import React from 'react';
import template from './header.twig';
import menuData from '../../02-molecules/menu/menu--main/menu--main.json';
import '../../02-molecules/menu/menu--main/menu--main';
import languageData from '../../02-molecules/language-switcher/language-switcher.json';
import './header';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Header',
  argTypes: {
    header_menu_items: {
      description:
        'Array of links - Structure and properties are based on the Drupal Menu Links',
      table: {
        type: {
          summary: 'Array',
        },
      },
    },
    header_language_links: {
      description:
        'Array of links - Structure and properties are based on the Drupal Language switcher links',
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
    dangerouslySetInnerHTML={{
      __html: template({ ...args }),
    }}
  />
);

export const Header = {
  render: Template,
  args: {
    header_menu_items: menuData,
    header_language_links: languageData,
  },
};
