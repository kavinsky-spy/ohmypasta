/**
 * @file postinstall.js
 * Contains a script to run tasks that should be performed after npm install.
 */

// Requires file system and removes gitignore lines that ignore dist & styleguide folders.
const fs = require('fs');

// Only removes the gitignore lines if not on the starter theme.
if (!__dirname.includes('storybook-starter-theme')) {
  const gitignore = fs.readFileSync('.gitignore', 'utf-8');
  const newGitignore = gitignore.replace(
    '\n' +
      '# Ignore compiled files - Remove on a real Drupal project.\n' +
      'dist\n' +
      'styleguide\n',
    '',
  );

  console.info('Modifying .gitignore...');
  fs.writeFileSync('.gitignore', newGitignore, 'utf-8');
}
