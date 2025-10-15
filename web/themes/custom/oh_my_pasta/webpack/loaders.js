const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const globImporter = require('node-sass-glob-importer');

const JSLoader = {
  test: /^(?!.*\.(stories|component)\.js$).*\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
};

const ImageLoader = {
  test: /\.(png|svg|jpg|gif)$/i,
  exclude: /icons\/.*\.svg$/,
  loader: 'file-loader',
};

const CSSLoader = {
  test: /\.s[ac]ss$/i,
  exclude: /node_modules/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: process.env.NODE_ENV !== 'production',
        url: false,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: process.env.NODE_ENV !== 'production',
        postcssOptions: {
          env: process.env.NODE_ENV || 'development',
        },
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: process.env.NODE_ENV !== 'production',
        sassOptions: {
          importer: globImporter(),
          outputStyle: process.env.NODE_ENV === 'production' ? 'compressed' : 'expanded',
        },
      },
    },
  ],
};

const SVGSpriteLoader = {
  test: /icons.*\.svg$/, // your icons directory
  loader: 'svg-sprite-loader',
  options: {
    extract: true,
    spriteFilename: '../dist/icons.svg',
  },
};

module.exports = {
  JSLoader,
  CSSLoader,
  SVGSpriteLoader,
  ImageLoader,
};
