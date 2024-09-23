import React from 'react';
import template from './card.twig';

export default {
  title: 'Molecules/Cards/Card',
  argTypes: {
    card_image: {
      description: 'True to display an image',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    card_image_mobile: {
      table: {
        disable: true,
      },
    },
    card_image_tablet: {
      table: {
        disable: true,
      },
    },
    card_image_desktop: {
      table: {
        disable: true,
      },
    },
    card_heading: {
      description: 'Title of the card',
      table: {
        type: { summary: 'string' },
      },
    },
    card_link: {
      table: {
        disable: true,
      },
    },
    card_text: {
      description: 'Body of the card, usually HTML markup created in a WYSIWYG',
      table: {
        type: { summary: 'HTML markup' },
      },
    },
    card_date: {
      description: 'Date format: j d M Y',
      table: {
        type: { summary: 'string' },
      },
    },
    card_tags: {
      description: 'Array of tags - plain text',
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

export const Card = {
  render: Template,
  args: {
    card_image: true,
    card_image_mobile: '600x400',
    card_image_tablet: '600x400',
    card_image_desktop: '600x400',
    card_heading: 'Newport City Dogs Home wins two RSPCA gold awards',
    card_text:
      'Newport City Dogs Home has won gold in two categories at the 2023 RSPCA Cymru PawPrint Awards for their work with stray dogs.',
    card_link: '#',
    card_date: '19 September 2023',
    card_tags: [],
  },
};
