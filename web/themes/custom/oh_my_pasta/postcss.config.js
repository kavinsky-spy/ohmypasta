const autoPrefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = (ctx) => {
  const plugins = [autoPrefixer()];
  
  // Add cssnano for production builds
  if (ctx.env === 'production') {
    plugins.push(
      cssnano({
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true,
            },
            normalizeWhitespace: true,
            minifySelectors: true,
            minifyParams: true,
            minifyFontValues: true,
            colormin: true,
            reduceIdents: true,
          },
        ],
      })
    );
  }
  
  return {
    plugins,
  };
};
