const pretty = require('pretty');
const cleaner = require('clean-html')

export default (markup) => {
  let cleanedMarkup = '';
  const cleanOptions = {
    'break-around-tags' : ['svg', 'use', 'span', 'img'],
    'replace-nbsp': true,
  }
  // Remove extra tags coming from Controls set up.
  const formattedMarkup = markup.replace('<div\n' +
      '  dangerouslySetInnerHTML={{\n' +
      '    __html: \'', '')
    .replaceAll('\\n', '')
    .replace('\'\n' +
      '  }}\n' +
      ' />', '');
  // Clean markup https://github.com/dave-kennedy/clean-html
  cleaner.clean(formattedMarkup, cleanOptions, (src) => {
    cleanedMarkup = src;
  });
  // Beautify markup https://github.com/jonschlinkert/pretty
  return pretty(cleanedMarkup);
}
