import ResponsiveImage from '../../common/ResponsiveImage';
import styles from './CtaSection.module.css';

// Componente CTA Section (item individual)
function CtaSection({ data, image, isGrid }) {
  return (
    <div className={`${styles.ctaSection} ${isGrid ? styles.ctaSectionGrid : ''}`}>
      {image && (
        <div className={styles.ctaSectionImage}>
          {isGrid ? (
            <ResponsiveImage
              imageData={image}
              stylePrefix="section_grid"
              alt={image.alt}
              availableSizes={['small']}
            />
          ) : (
            <img src={image.url} alt={image.alt || ''} />
          )}
        </div>
      )}

      <div className={styles.ctaSectionContent}>
        <div className={styles.ctaSectionText}>
          {data.field_cta_section_title && (
            <h2 className={styles.ctaSectionTitle}>
              {data.field_cta_section_title}
            </h2>
          )}

          {data.field_cta_section_text && (
            <h3 className={styles.ctaSectionSubtitle}>
              {data.field_cta_section_text}
            </h3>
          )}
        </div>

        {data.field_cta_section_cta_text && (
          <a
            href={data.field_cta_section_cta_url || '#'}
            className={styles.ctaSectionButton}
          >
            {data.field_cta_section_cta_text}
          </a>
        )}
      </div>
    </div>
  );
}

export default CtaSection;
