import React from 'react';
import template from './grid--graphic.twig';

export default {
  title: 'Organisms/Grid/Graphic Grid',
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
    grid_items: {
      description: 'Array of the tile items',
      table: {
        type: {
          summary: 'Array',
        },
      },
    },
    grid_bg_color: {
      table: {
        disable: true,
      },
    },
    grid_items_per_row: {
      table: {
        disable: true,
      },
    },
    grid_more_text: {
      table: {
        disable: true,
      },
    },
    grid_less_text: {
      table: {
        disable: true,
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const GraphicGrid = {
  render: Template,
  args: {
    grid_heading: 'Results:',
    grid_heading_level: 2,
    grid_type: 'graphic',
    grid_items_per_row: 6,
    grid_items: [
      {
        number: '8',
        text: 'Conservatives',
        color: 'conservatives',
      },
      {
        number: '18',
        text: 'Welsh Labour',
        color: 'welsh-labour',
      },
      {
        number: '2',
        text: 'Liberal Democrats',
        color: 'liberal-democrats',
      },
      {
        number: '2',
        text: 'Plaid Cymru',
        color: 'plaid-cymru',
      },
      {
        number: '4',
        text: 'The Green Party',
        color: 'green-party',
      },
      {
        number: '0',
        text: 'UKIP',
        color: 'ukip',
      },
    ],
  },
};
