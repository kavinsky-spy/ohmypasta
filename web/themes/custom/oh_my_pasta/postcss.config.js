const autoPrefixer = require('autoprefixer');
module.exports = () => {
  return {
    plugins: [autoPrefixer()],
  };
};
