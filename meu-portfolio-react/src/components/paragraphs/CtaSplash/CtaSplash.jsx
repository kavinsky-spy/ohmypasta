import styles from './CtaSplash.module.css';

// Componente CtaSplash
function CtaSplash({ data, image }) {
  // Extrai o processed HTML se tiver
  const description = data.field_description?.processed || data.field_description?.value || '';

  return (
    <div
      className={styles.ctaSplash}
      style={{
        backgroundImage: image ? `url('${image.url}')` : 'none',
        backgroundColor: image ? 'transparent' : '#667eea'
      }}
    >
      <div className={styles.ctaSplashContainer}>
        <div className={styles.ctaSplashContent}>
          {data.field_subtitle && (
            <span className={styles.ctaSplashSubtitle}>
              {data.field_subtitle}
            </span>
          )}

          {data.field_title && (
            <h2 className={styles.ctaSplashTitle}>{data.field_title}</h2>
          )}

          {description && (
            <div
              className={styles.ctaSplashDescription}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}

          {data.field_cta_link && (
            <a
              href={data.field_cta_link.uri}
              className={styles.ctaSplashButton}
            >
              {data.field_cta_link.title || 'Learn More'}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default CtaSplash;
