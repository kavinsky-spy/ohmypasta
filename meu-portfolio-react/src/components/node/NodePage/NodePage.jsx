import { useState, useEffect } from 'react';
import ParagraphRenderer from '../ParagraphRenderer';
import styles from './NodePage.module.css';

// Página principal do Node
function NodePage({ nodeId, drupalUrl }) {
  const [node, setNode] = useState(null);
  const [paragraphs, setParagraphs] = useState([]);
  const [included, setIncluded] = useState([]);
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let nodeData = null;

    // Passo 1: Buscar o node com paragraphs principais
    fetch(`${drupalUrl}/jsonapi/node/page/${nodeId}?include=field_paragraphs`)
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            console.error('Erro na resposta:', text);
            throw new Error(`Erro ao buscar node: ${response.status}`);
          });
        }
        return response.json();
      })
      .then(data => {
        nodeData = data.data;
        let includedData = data.included || [];

        // Extrai os paragraphs principais
        if (nodeData.relationships?.field_paragraphs?.data) {
          const paragraphRefs = nodeData.relationships.field_paragraphs.data;

          const orderedParagraphs = paragraphRefs.map(ref => {
            return includedData.find(item => item.id === ref.id);
          }).filter(p => p !== undefined);

          // Passo 2: Identificar CTA Sections e coletar UUIDs dos items aninhados
          const nestedItemUuids = new Set();
          const ctaSectionsParagraphs = orderedParagraphs.filter(p => p.type === 'paragraph--cta_sections');

          ctaSectionsParagraphs.forEach(ctaSections => {
            const itemsRefs = ctaSections.relationships?.field_cta_sections_items?.data || [];
            itemsRefs.forEach(ref => {
              if (ref.id) nestedItemUuids.add(ref.id);
            });
          });

          // Passo 3: Se houver items aninhados, buscar eles
          if (nestedItemUuids.size > 0) {
            const uuidsArray = Array.from(nestedItemUuids);
            const filterParams = uuidsArray.map((uuid, index) =>
              `filter[id-filter][condition][value][${index}]=${uuid}`
            ).join('&');

            const nestedUrl = `${drupalUrl}/jsonapi/paragraph/cta_section?filter[id-filter][condition][path]=id&filter[id-filter][condition][operator]=IN&${filterParams}`;

            return fetch(nestedUrl)
              .then(response => response.json())
              .then(nestedData => {
                // Adiciona os items aninhados ao included
                includedData = [...includedData, ...(nestedData.data || [])];

                setParagraphs(orderedParagraphs);
                setIncluded(includedData);

                // Agora coleta imagens
                return collectAndFetchImages(orderedParagraphs, includedData);
              });
          } else {
            setParagraphs(orderedParagraphs);
            setIncluded(includedData);

            // Coleta imagens
            return collectAndFetchImages(orderedParagraphs, includedData);
          }
        } else {
          setNode(nodeData);
          setLoading(false);
        }
      })
      .catch(err => {
        console.error('Erro:', err);
        setError(err.message);
        setLoading(false);
      });

    // Função helper para coletar e buscar imagens
    function collectAndFetchImages(paragraphs, included) {
      const imageUuids = new Set();
      const mediaUuids = new Set();

      // Coleta UUIDs de imagens e media entities de todos os paragraphs
      const allParagraphs = included.filter(item => item.type?.startsWith('paragraph--'));

      allParagraphs.forEach(paragraph => {
        const relationships = paragraph.relationships || {};

        Object.values(relationships).forEach(rel => {
          // Coleta files diretos
          if (rel?.data?.type === 'file--file' && rel?.data?.id) {
            imageUuids.add(rel.data.id);
          }
          // Coleta media entities (para buscar depois)
          if (rel?.data?.type === 'media--image' && rel?.data?.id) {
            mediaUuids.add(rel.data.id);
          }
        });
      });

      // Se há media entities, busca elas primeiro
      let mediaPromise = Promise.resolve(included);

      if (mediaUuids.size > 0) {
        const mediaUuidsArray = Array.from(mediaUuids);
        const mediaFilterParams = mediaUuidsArray.map((uuid, index) =>
          `filter[id-filter][condition][value][${index}]=${uuid}`
        ).join('&');

        const mediaUrl = `${drupalUrl}/jsonapi/media/image?filter[id-filter][condition][path]=id&filter[id-filter][condition][operator]=IN&${mediaFilterParams}&include=field_media_image`;

        mediaPromise = fetch(mediaUrl)
          .then(response => response.json())
          .then(mediaData => {
            // Adiciona as media entities e seus files ao included
            const newIncluded = [...included, ...(mediaData.data || []), ...(mediaData.included || [])];

            // Coleta os UUIDs dos files das media entities
            (mediaData.data || []).forEach(media => {
              const fileRel = media.relationships?.field_media_image;
              if (fileRel?.data?.id) {
                imageUuids.add(fileRel.data.id);
              }
            });

            return newIncluded;
          });
      }

      // Depois de buscar media entities (se necessário), busca as imagens
      return mediaPromise.then(finalIncluded => {
        setIncluded(finalIncluded);

        if (imageUuids.size > 0) {
          const uuidsArray = Array.from(imageUuids);
          const filterParams = uuidsArray.map((uuid, index) =>
            `filter[id-filter][condition][value][${index}]=${uuid}`
          ).join('&');

          const imageUrl = `${drupalUrl}/jsonapi/file/file?filter[id-filter][condition][path]=id&filter[id-filter][condition][operator]=IN&${filterParams}`;

          return fetch(imageUrl)
            .then(response => response.json())
            .then(imageData => {
              const imagesMap = {};
              (imageData.data || []).forEach(img => {
                imagesMap[img.id] = img;
              });

              setImages(imagesMap);
              setNode(nodeData);
              setLoading(false);
            });
        } else {
          setNode(nodeData);
          setLoading(false);
        }
      });
    }
  }, [nodeId, drupalUrl]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <p>Carregando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>Erro: {error}</p>
      </div>
    );
  }

  if (!node) {
    return (
      <div className={styles.notFound}>
        <p>Node não encontrado</p>
      </div>
    );
  }

  return (
    <article className={styles.node}>
      <header className={styles.nodeHeader}>
        <h1>{node.attributes.title}</h1>
      </header>

      {/* Renderiza os paragraphs na ordem correta */}
      <div className={styles.nodeContent}>
        {paragraphs.length > 0 ? (
          paragraphs.map((paragraph, index) => (
            <ParagraphRenderer
              key={paragraph.id || index}
              paragraph={paragraph}
              images={images}
              drupalUrl={drupalUrl}
              included={included}
            />
          ))
        ) : (
          <p>Nenhum paragraph encontrado</p>
        )}
      </div>
    </article>
  );
}

export default NodePage;
