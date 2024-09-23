import React from 'react';
import template from './grid.twig';

export default {
  title: 'Organisms/Grid/Regular Grid',
  argTypes: {
    grid_heading: {
      description: 'Title text',
      table: {
        type: { summary: 'string' },
      },
    },
    grid_heading_level: {
      description: 'From H2 to H5',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 2 },
      },
      control: {
        type: 'inline-radio',
      },
      options: [2, 3, 4, 5],
    },
    grid_bg_color: {
      description: 'Background colour',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'white' },
      },
      control: {
        type: 'select',
      },
      options: ['white', 'lightgreen'],
    },
    grid_items_per_row: {
      description: 'Items per grid row',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 4 },
      },
      control: {
        type: 'inline-radio',
      },
      options: [3, 4],
    },
    grid_items: {
      description: 'Array of the tile items',
      table: {
        type: {
          summary: 'Array',
        },
      },
    },
    grid_cta_text: {
      description: 'Content of the optional button',
      table: {
        type: { summary: 'string' },
      },
    },
    grid_cta_url: {
      description: 'Link of the optional button',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const RegularGrid = {
  render: Template,
  args: {
    grid_heading: 'Popular pages',
    grid_heading_level: 2,
    grid_bg_color: 'white',
    grid_items_per_row: 3,
    grid_items: [
      {
        heading: 'Book the HWRC',
        url: '#',
      },
      {
        heading: 'Check school terms dates',
        url: '#',
      },
      {
        heading: 'Pay your council tax',
        url: '#',
      },
      {
        heading: 'Report a missed bin collection',
        url: '#',
      },
      {
        heading: 'Order bins, boxes and bags',
        url: '#',
      },
      {
        heading: 'Search for a job',
        url: '#',
      },
    ],
  },
};
