import { useState, useEffect } from 'react';

// Componente de Imagem Responsiva
function ResponsiveImage({ imageData, stylePrefix, alt, className, availableSizes = ['small', 'medium', 'large'] }) {
  if (!imageData?.url) return null;

  const { url: originalUrl, drupalUrl, buildImageStyleUrl } = imageData;

  // Constrói URLs para cada image style baseado no prefix
  const getStyleUrl = (size) => {
    const styleName = `${stylePrefix}_${size}`;
    return buildImageStyleUrl(originalUrl, styleName);
  };

  // Verifica quais sizes estão disponíveis
  const hasWide = availableSizes.includes('wide');
  const hasLarge = availableSizes.includes('large');
  const hasMedium = availableSizes.includes('medium');
  const hasSmall = availableSizes.includes('small');

  // Define o fallback (usa o maior disponível)
  const fallbackSize = hasLarge ? 'large' : hasMedium ? 'medium' : 'small';

  return (
    <picture className={className}>
      {/* Desktop Wide (1440px+) - se existir */}
      {hasWide && (
        <source
          media="(min-width: 1440px)"
          srcSet={getStyleUrl('wide')}
        />
      )}
      
      {/* Desktop (1280px+) - se existir */}
      {hasLarge && (
        <source
          media="(min-width: 1280px)"
          srcSet={getStyleUrl('large')}
        />
      )}
      
      {/* Tablet Wide (1024px+) - se existir */}
      {hasMedium && (
        <source
          media="(min-width: 1024px)"
          srcSet={getStyleUrl('medium')}
        />
      )}
      
      {/* Mobile/Tablet (até 1024px) - sempre usa small se disponível */}
      {hasSmall && (
        <source
          media="(max-width: 1023px)"
          srcSet={getStyleUrl('small')}
        />
      )}
      
      {/* Fallback */}
      <img
        src={getStyleUrl(fallbackSize)}
        alt={alt || ''}
        loading="lazy"
      />
    </picture>
  );
}

// Componente Hero
function Hero({ data, image }) {
  return (
    <div className="hero">
      {image && (
        <div className="hero__image">
          <ResponsiveImage
            imageData={image}
            stylePrefix="hero"
            alt={image.alt}
            availableSizes={['small', 'medium', 'large', 'wide']}
          />
        </div>
      )}
      <div className="hero__content">
        {data.field_hero_subheading && (
          <div className="hero__subheading">
            <h2>{data.field_hero_subheading}</h2>
          </div>
        )}
        {data.field_hero_heading && (
          <div className="hero__heading">
            <h3>{data.field_hero_heading}</h3>
          </div>
        )}
        {data.field_hero_description && (
          <div className="hero__description">
            <p>{data.field_hero_description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Componente MediaTextCta
function MediaTextCta({ data, image }) {
  return (
    <div className={`media-text-cta ${data.field_media_text_cta_direction ? 'reverse' : ''}`}>
      {image && (
        <div className="media-text-cta__image">
          <ResponsiveImage
            imageData={image}
            stylePrefix="cta_media"
            alt={image.alt}
            availableSizes={['small']}
          />
        </div>
      )}
      <div className="media-text-cta__content">
        {data.field_media_text_cta_subtitle && (
          <div className="media-text-cta__subtitle">
            <p>{data.field_media_text_cta_subtitle}</p>
          </div>
        )}
        {data.field_media_text_cta_title && (
          <div className="media-text-cta__title">
            <h3>{data.field_media_text_cta_title}</h3>
          </div>
        )}
        {data.field_media_text_cta_description && (
          <div className="media-text-cta__description">
            <p>{data.field_media_text_cta_description}</p>
          </div>
        )}
        {data.field_media_text_cta_link && (
          <div className="media-text-cta__link">
            <a href={data.field_media_text_cta_link.uri}>
              {data.field_media_text_cta_link.title}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

// Componente CtaSplash
function CtaSplash({ data }) {
  return (
    <div className="cta-splash">
      <div className="cta-splash__content">
        {data.field_subtitle && (
          <p className="cta-splash__subtitle">{data.field_subtitle}</p>
        )}
        {data.field_title && (
          <h2 className="cta-splash__title">{data.field_title}</h2>
        )}
        {data.field_description && (
          <div 
            className="cta-splash__description"
            dangerouslySetInnerHTML={{ __html: data.field_description.processed }}
          />
        )}
        {data.field_cta_link && (
          <a href={data.field_cta_link.uri} className="cta-splash__link">
            {data.field_cta_link.title}
          </a>
        )}
      </div>
    </div>
  );
}

// Componente que renderiza paragraphs
function ParagraphRenderer({ paragraph, images, drupalUrl }) {
  if (!paragraph) return null;

  // Função helper para buscar imagem pelo UUID
  const getImageByUuid = (uuid) => {
    if (!uuid || !images) return null;
    return images[uuid] || null;
  };

  // Função para construir URL com image style
  const buildImageStyleUrl = (originalUrl, styleName) => {
    if (!originalUrl) return '';
    
    // Se já tem o domínio, remove pra trabalhar só com o path
    let path = originalUrl.replace(drupalUrl, '');
    
    // Padrão: /sites/default/files/2025-10/imagem.jpg
    // Vira:   /sites/default/files/styles/hero_large/public/2025-10/imagem.jpg
    
    if (path.includes('/sites/default/files/')) {
      // Extrai a parte depois de 'files/'
      const afterFiles = path.split('/sites/default/files/')[1];
      
      // Constrói a URL com o image style
      path = `/sites/default/files/styles/${styleName}/public/${afterFiles}`;
    }
    
    // Adiciona o domínio do Drupal
    return drupalUrl + path;
  };

  // Função para extrair UUID e meta da imagem (sem aplicar style ainda)
  const getImageData = (relationship) => {
    if (!relationship?.data?.id) return null;
    
    const uuid = relationship.data.id;
    const meta = relationship.data.meta || {};
    const imageFile = getImageByUuid(uuid);
    
    if (!imageFile) return null;
    
    let imageUrl = imageFile.attributes?.uri?.url || '';
    
    // Se a URL for relativa, adiciona o domínio do Drupal
    if (imageUrl && imageUrl.startsWith('/')) {
      imageUrl = drupalUrl + imageUrl;
    }
    
    return {
      url: imageUrl,
      alt: meta.alt || '',
      width: meta.width,
      height: meta.height,
      drupalUrl: drupalUrl,
      buildImageStyleUrl: buildImageStyleUrl
    };
  };

  // Switch baseado no tipo do paragraph
  switch (paragraph.type) {
    case 'paragraph--hero':
      // Hero gera responsive images automaticamente
      const heroImage = getImageData(paragraph.relationships?.field_hero_image);
      return <Hero data={paragraph.attributes} image={heroImage} />;
    
    case 'paragraph--media_text_cta':
      // Media Text CTA gera responsive images automaticamente
      const mediaImage = getImageData(paragraph.relationships?.field_media_text_cta_image);
      return <MediaTextCta data={paragraph.attributes} image={mediaImage} />;
    
    case 'paragraph--cta_splash':
      return <CtaSplash data={paragraph.attributes} />;
    
    case 'paragraph--cta_sections':
      return (
        <div style={{padding: '20px', background: '#f9f9f9', margin: '20px 0'}}>
          <h3>{paragraph.attributes.field_cta_sections_title}</h3>
          <p>CTA Sections (ainda não implementado)</p>
        </div>
      );
    
    default:
      console.warn(`Paragraph type não implementado: ${paragraph.type}`);
      return (
        <div style={{padding: '20px', background: '#f0f0f0', margin: '10px 0'}}>
          <p>Componente "{paragraph.type}" ainda não implementado</p>
        </div>
      );
  }
}

// Página principal do Node
function NodePage({ nodeId, drupalUrl }) {
  const [node, setNode] = useState(null);
  const [paragraphs, setParagraphs] = useState([]);
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Passo 1: Buscar o node com paragraphs (sem imagens)
    fetch(`${drupalUrl}/jsonapi/node/page/${nodeId}?include=field_paragraphs`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar node');
        }
        return response.json();
      })
      .then(data => {
        const nodeData = data.data;
        const included = data.included || [];
        
        // Extrai os paragraphs
        if (nodeData.relationships?.field_paragraphs?.data) {
          const paragraphRefs = nodeData.relationships.field_paragraphs.data;
          
          const orderedParagraphs = paragraphRefs.map(ref => {
            return included.find(item => item.id === ref.id);
          }).filter(p => p !== undefined);
          
          setParagraphs(orderedParagraphs);
          
          // Passo 2: Coletar todos os UUIDs de imagens (file--file)
          const imageUuids = new Set();
          
          orderedParagraphs.forEach(paragraph => {
            // Verifica todos os possíveis campos de imagem
            const relationships = paragraph.relationships || {};
            
            Object.values(relationships).forEach(rel => {
              if (rel?.data?.type === 'file--file' && rel?.data?.id) {
                imageUuids.add(rel.data.id);
              }
            });
          });
          
          // Passo 3: Se houver imagens, buscar todas de uma vez
          if (imageUuids.size > 0) {
            const uuidsArray = Array.from(imageUuids);
            
            // Constrói os filtros para buscar múltiplos UUIDs
            const filterParams = uuidsArray.map((uuid, index) => 
              `filter[id-filter][condition][value][${index}]=${uuid}`
            ).join('&');
            
            const imageUrl = `${drupalUrl}/jsonapi/file/file?filter[id-filter][condition][path]=id&filter[id-filter][condition][operator]=IN&${filterParams}`;
            
            return fetch(imageUrl)
              .then(response => response.json())
              .then(imageData => {
                // Organiza as imagens por UUID para fácil acesso
                const imagesMap = {};
                (imageData.data || []).forEach(img => {
                  imagesMap[img.id] = img;
                });
                
                setImages(imagesMap);
                setNode(nodeData);
                setLoading(false);
              });
          } else {
            // Sem imagens, só finaliza
            setNode(nodeData);
            setLoading(false);
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
  }, [nodeId, drupalUrl]);

  if (loading) {
    return (
      <div style={{padding: '40px', textAlign: 'center'}}>
        <p>Carregando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{padding: '40px', color: 'red'}}>
        <p>Erro: {error}</p>
      </div>
    );
  }

  if (!node) {
    return (
      <div style={{padding: '40px'}}>
        <p>Node não encontrado</p>
      </div>
    );
  }

  return (
    <article className={`node node--${node.type}`}>
      <header>
        <h1>{node.attributes.title}</h1>
      </header>
      
      {/* Renderiza os paragraphs na ordem correta */}
      <div className="node__content">
        {paragraphs.length > 0 ? (
          paragraphs.map((paragraph, index) => (
            <ParagraphRenderer 
              key={paragraph.id || index} 
              paragraph={paragraph}
              images={images}
              drupalUrl={drupalUrl}
            />
          ))
        ) : (
          <p>Nenhum paragraph encontrado</p>
        )}
      </div>
    </article>
  );
}

// App de exemplo
function App() {
  // CONFIGURAÇÃO - TROQUE PELOS SEUS VALORES!
  const drupalUrl = 'https://ohmypasta.ddev.site'; // SEM barra no final
  const nodeId = '1fbc12ae-3357-4729-8fe7-931240992e1a'; // UUID do seu node

  return (
    <div className="App" style={{maxWidth: '1200px', margin: '0 auto', padding: '20px'}}>
      <NodePage nodeId={nodeId} drupalUrl={drupalUrl} />
    </div>
  );
}

export default App;