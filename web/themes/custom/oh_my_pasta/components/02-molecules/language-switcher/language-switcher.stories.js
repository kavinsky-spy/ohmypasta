import React from 'react';
import template from './language-switcher.twig';
import languageData from './language-switcher.json';

export default {
  title: 'Molecules/Language Switcher',
  argTypes: {
    language_switcher_links: {
      description:
        'Array of links - Structure and properties are based on the Drupal language switcher',
      table: {
        type: {
          summary: 'Array',
        },
      },
    },
  },
};
const Template = (args) => (
  <div
    style={{ maxWidth: '40rem' }}
    dangerouslySetInnerHTML={{ __html: template({ ...args }) }}
  />
);

export const Tile = {
  render: Template,
  args: {
    language_switcher_links: languageData,
  },
};
