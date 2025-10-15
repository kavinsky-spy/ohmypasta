import Hero from '../../paragraphs/Hero';
import MediaTextCta from '../../paragraphs/MediaTextCta';
import CtaSplash from '../../paragraphs/CtaSplash';
import CtaSections from '../../paragraphs/CtaSections';

// Componente que renderiza paragraphs
function ParagraphRenderer({ paragraph, images, drupalUrl, included }) {
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

  // Função para buscar media entity e pegar o file dela
  const getMediaImage = (relationship) => {
    if (!relationship?.data?.id) return null;

    // Busca o media entity no included
    const mediaEntity = included?.find(item => item.id === relationship.data.id);
    if (!mediaEntity) return null;

    // O media entity tem um relationship para o file real
    const fileRelationship = mediaEntity.relationships?.field_media_image;
    if (!fileRelationship) return null;

    // Agora busca o file
    return getImageData(fileRelationship);
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
      // CTA Splash usa media entity (não file direto)
      const splashImage = getMediaImage(paragraph.relationships?.field_image);
      return <CtaSplash data={paragraph.attributes} image={splashImage} />;

    case 'paragraph--cta_sections':
      // CTA Sections tem paragraphs aninhados
      const itemsRefs = paragraph.relationships?.field_cta_sections_items?.data || [];
      const ctaSectionItems = itemsRefs
        .map(ref => included?.find(item => item.id === ref.id))
        .filter(item => item !== undefined);

      return (
        <CtaSections
          data={paragraph.attributes}
          items={ctaSectionItems}
          images={images}
          drupalUrl={drupalUrl}
        />
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

export default ParagraphRenderer;
