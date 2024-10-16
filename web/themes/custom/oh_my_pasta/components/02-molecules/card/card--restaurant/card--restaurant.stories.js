import React from 'react';
import template from '../card.twig';

export default {
  title: 'Molecules/Cards/Restaurant Card',
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
    card_address: {
      description: 'Restaurant location',
      table: {
        type: { summary: 'HTML markup' },
      },
    },
    card_website: {
      description: 'Restaurant website URL',
      table: {
        type: { summary: 'HTML markup' },
      },
    },
    card_email: {
      description: 'Restaurant email address',
      table: {
        type: { summary: 'HTML markup' },
      },
    },
    card_phone: {
      description: 'Restaurant phone number',
      table: {
        type: { summary: 'HTML markup' },
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

export const RestaurantCard = {
  render: Template,
  args: {
    card_modifiers: ['restaurant'],
    card_image: true,
    card_image_mobile: '330x180',
    card_image_tablet: '300x300',
    card_image_desktop: '300x300',
    card_heading: 'Alway Primary Restaurant',
    card_link: '#',
    card_address: 'Aberthaw Road',
    card_website: 'https://alwayprimaryRestaurant.co.uk',
    card_email: 'info@ohmypasta.gov.uk',
    card_phone: '998998088098',
  },
};
