import React from 'react';
import template from './menu--main.twig';
import './menu--main';
import menuItems from './menu--main.json';

export default {
  title: 'Molecules/Menus/Main Menu',
  argTypes: {
    menu_items: {
      description:
        'Array of links - Structure and properties are based on the Drupal Menu Links',
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

export const mainMenu = {
  render: Template,
  args: {
    menu_items: menuItems,
  },
};
