import React from 'react';
import template from './menu.twig';

export default {
  title: 'Molecules/Menus/Menu',
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
    menu_type: {
      description:
        'Items are displayed vertically by default. Use the inline modifier to get them in the same row',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'vertical' },
      },
      control: {
        type: 'inline-radio',
      },
      options: ['default', 'inline'],
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

export const Menu = {
  render: Template,
  args: {
    menu_items: [
      {
        title: 'Lorem ipsum 1',
        url: '#',
      },
      {
        title: 'Lorem ipsum 2',
        url: '#',
      },
      {
        title: 'Lorem ipsum 3',
        url: '#',
      },
    ],
    menu_type: 'default',
  },
};
