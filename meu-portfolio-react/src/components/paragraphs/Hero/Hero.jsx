import ResponsiveImage from '../../common/ResponsiveImage';
import styles from './Hero.module.css';

// Componente Hero
function Hero({ data, image }) {
  return (
    <div className={styles.hero}>
      {image && (
        <div className={styles.heroImage}>
          <ResponsiveImage
            imageData={image}
            stylePrefix="hero"
            alt={image.alt}
            availableSizes={['small', 'medium', 'large', 'wide']}
          />
        </div>
      )}
      <div className={styles.heroContent}>
        {data.field_hero_subheading && (
          <div className={styles.heroSubheading}>
            <h2>{data.field_hero_subheading}</h2>
          </div>
        )}
        {data.field_hero_heading && (
          <div className={styles.heroHeading}>
            <h3>{data.field_hero_heading}</h3>
          </div>
        )}
        {data.field_hero_description && (
          <div className={styles.heroDescription}>
            <p>{data.field_hero_description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
