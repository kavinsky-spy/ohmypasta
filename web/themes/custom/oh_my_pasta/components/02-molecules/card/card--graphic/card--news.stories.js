import React from 'react';
import template from './card--graphic.twig';

export default {
  title: 'Molecules/Cards/Graphic Card',
  argTypes: {
    graphic_card_number: {
      description: 'Number / metric of the graphic',
      table: {
        type: { summary: 'HTML markup' },
      },
    },
    graphic_card_text: {
      description: 'Text / description of the graphic',
      table: {
        type: { summary: 'String' },
      },
    },
    graphic_card_color: {
      description: 'Alert type - uses localgov types',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'select',
      },
      options: ['lightgrey', 'darkgrey', 'labour'],
    },
  },
};
const Template = (args) => (
  <div
    style={{ maxWidth: '17rem' }}
    dangerouslySetInnerHTML={{ __html: template({ ...args }) }}
  />
);

export const GraphicCard = {
  render: Template,
  args: {
    graphic_card_number: '18',
    graphic_card_text: 'Italian labour',
    graphic_card_color: 'labour',
  },
};
