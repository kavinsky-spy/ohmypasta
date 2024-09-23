import React from 'react';
import template from './tile.twig';

export default {
  title: 'Molecules/Tile',
  argTypes: {
    tile_icon: {
      description: 'True if icon is present',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    tile_heading: {
      description: 'Title text',
      table: {
        type: { summary: 'string' },
      },
    },
    tile_heading_level: {
      description: 'From H2 to H6',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 3 },
      },
      control: {
        type: 'inline-radio',
      },
      options: [2, 3, 4, 5, 6],
    },
    tile_url: {
      description: 'Link url',
      table: {
        type: { summary: 'string' },
      },
    },
    tile_url_new_window: {
      description: 'True if link needs to open in a new window',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    tile_description: {
      description: 'Description text',
      table: {
        type: { summary: 'string' },
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
    tile_icon: true,
    tile_heading: 'Report it',
    tile_heading_level: 3,
    tile_url: '#',
    tile_url_new_window: false,
    tile_description:
      'Example of text here to see how much tet we can fit in the link card up to 3 lines.',
  },
};
