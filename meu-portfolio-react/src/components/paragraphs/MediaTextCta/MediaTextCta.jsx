import ResponsiveImage from '../../common/ResponsiveImage';
import styles from './MediaTextCta.module.css';

// Componente MediaTextCta
function MediaTextCta({ data, image }) {
  return (
    <div className={`${styles.mediaTextCta} ${data.field_media_text_cta_direction ? styles.reverse : ''}`}>
      {image && (
        <div className={styles.mediaTextCtaImage}>
          <ResponsiveImage
            imageData={image}
            stylePrefix="cta_media"
            alt={image.alt}
            availableSizes={['small']}
          />
        </div>
      )}
      <div className={styles.mediaTextCtaContent}>
        {data.field_media_text_cta_subtitle && (
          <div className={styles.mediaTextCtaSubtitle}>
            <p>{data.field_media_text_cta_subtitle}</p>
          </div>
        )}
        {data.field_media_text_cta_title && (
          <div className={styles.mediaTextCtaTitle}>
            <h3>{data.field_media_text_cta_title}</h3>
          </div>
        )}
        {data.field_media_text_cta_description && (
          <div className={styles.mediaTextCtaDescription}>
            <p>{data.field_media_text_cta_description}</p>
          </div>
        )}
        {data.field_media_text_cta_link && (
          <div className={styles.mediaTextCtaLink}>
            <a href={data.field_media_text_cta_link.uri}>
              {data.field_media_text_cta_link.title}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default MediaTextCta;
