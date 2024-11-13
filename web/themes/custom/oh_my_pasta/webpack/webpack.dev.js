import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  stats: {
    // Config for minimal console.log mess.
    assets: false,
    moduleAssets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    children: false,
    chunkGroups: false,
    chunkModules: false,
  },
});
