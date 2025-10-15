import CtaSection from '../CtaSection';
import styles from './CtaSections.module.css';

// Componente CTA Sections (container)
function CtaSections({ data, items, images, drupalUrl }) {
  const isGrid = data.field_cta_sections_type || false;

  // Função para buscar imagem de um item
  const getItemImage = (item) => {
    const relationship = item.relationships?.field_cta_section_image;
    if (!relationship?.data?.id) return null;

    const uuid = relationship.data.id;
    const meta = relationship.data.meta || {};
    const imageFile = images[uuid];

    if (!imageFile) return null;

    let imageUrl = imageFile.attributes?.uri?.url || '';
    if (imageUrl && imageUrl.startsWith('/')) {
      imageUrl = drupalUrl + imageUrl;
    }

    // Função para construir URL com image style
    const buildImageStyleUrl = (originalUrl, styleName) => {
      if (!originalUrl) return '';
      let path = originalUrl.replace(drupalUrl, '');

      if (path.includes('/sites/default/files/')) {
        const afterFiles = path.split('/sites/default/files/')[1];
        path = `/sites/default/files/styles/${styleName}/public/${afterFiles}`;
      }

      return drupalUrl + path;
    };

    return {
      url: imageUrl,
      alt: meta.alt || '',
      drupalUrl: drupalUrl,
      buildImageStyleUrl: buildImageStyleUrl
    };
  };

  if (isGrid) {
    // Layout Grid
    return (
      <div className={styles.ctaSectionsGrid}>
        {data.field_cta_sections_title && (
          <h2 className={styles.ctaSectionsGridTitle}>
            {data.field_cta_sections_title}
          </h2>
        )}
        <div className={styles.ctaSectionsGridScrollableGroup}>
          {items.map((item, index) => (
            <CtaSection
              key={item.id || index}
              data={item.attributes}
              image={getItemImage(item)}
              isGrid={true}
            />
          ))}
        </div>
      </div>
    );
  } else {
    // Layout Default
    return (
      <div className={styles.ctaSections}>
        {items.map((item, index) => (
          <CtaSection
            key={item.id || index}
            data={item.attributes}
            image={getItemImage(item)}
            isGrid={false}
          />
        ))}
      </div>
    );
  }
}

export default CtaSections;
