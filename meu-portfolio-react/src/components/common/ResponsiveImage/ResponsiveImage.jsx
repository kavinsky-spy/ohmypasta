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

export default ResponsiveImage;
