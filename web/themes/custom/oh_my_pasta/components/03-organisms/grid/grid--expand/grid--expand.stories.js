import React from 'react';
import template from '../grid.twig';
import './grid--expand';

export default {
  title: 'Organisms/Grid/Expandable Grid',
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
    grid_more_text: {
      description: 'Text for the view more / expand button',
      table: {
        type: { summary: 'string' },
      },
    },
    grid_less_text: {
      description: 'Text for the view less / expand button',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const ExpandableGrid = {
  render: Template,
  args: {
    grid_heading: 'Services and information',
    grid_heading_level: 2,
    grid_bg_color: 'lightgreen',
    grid_type: 'expand',
    grid_items_per_row: 4,
    grid_items: [
      {
        heading: 'Recycling and waste',
        url: '#',
        icon: true,
      },
      {
        heading: 'Council tax',
        url: '#',
        icon: true,
      },
      {
        heading: 'Benefits and support',
        url: '#',
        icon: true,
      },
      {
        heading: 'Schools and learning',
        url: '#',
        icon: true,
      },
      {
        heading: 'Roads and travel',
        url: '#',
        icon: true,
      },
      {
        heading: 'Jobs, skills and training',
        url: '#',
        icon: true,
      },
      {
        heading: 'Our City',
        url: '#',
        icon: true,
      },
      {
        heading: 'Our Council',
        url: '#',
        icon: true,
      },
      {
        heading: 'Births, deaths and ceremonies',
        url: '#',
        icon: true,
      },
      {
        heading: 'Health and social care',
        url: '#',
        icon: true,
      },
      {
        heading: 'Business and economy',
        url: '#',
        icon: true,
      },
      {
        heading: 'Anti-social behaviour',
        url: '#',
        icon: true,
      },
    ],
    grid_more_text: 'View more services',
    grid_less_text: 'View fewer services',
  },
};
