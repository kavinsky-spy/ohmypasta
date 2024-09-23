import React from 'react';
import template from '../card.twig';

export default {
  title: 'Molecules/Cards/News Card',
  argTypes: {
    card_modifiers: {
      table: {
        disable: true,
      },
    },
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
    style={{ maxWidth: '74rem' }}
    dangerouslySetInnerHTML={{ __html: template({ ...args }) }}
  />
);

export const NewsCard = {
  render: Template,
  args: {
    card_modifiers: ['news'],
    card_image: true,
    card_image_mobile: '250x300',
    card_image_tablet: '300x300',
    card_image_desktop: '300x300',
    card_heading: 'Headline 1',
    card_text:
      'Lorem ipsum dolor sit amet consectetur. Duis pharetra scelerisque ultricies eget est. Vitae neque pretium etiam tristique. Habitant pretium id nibh placerat pretium nulla sed elementum.',
    card_link: '#',
    card_date: '19 September 2023',
    card_tags: ['Education', 'Children'],
  },
};
