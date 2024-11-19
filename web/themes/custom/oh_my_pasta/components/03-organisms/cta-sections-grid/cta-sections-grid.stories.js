import React from 'react';
import template from './cta-sections-grid.twig';

export default {
  title: 'Organisms/CTA Sections Grid',
  argTypes: {
    cta_sections_grid_title: {
      description: 'Title of CTA Sections Grid',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const ctaSectionsGrid = {
  render: Template,
  args: {
    cta_sections_grid_title: 'Helping you with to-dos and gifting',
    cta_sections_grid_items: [
      {
        title: 'Return packages from home',
        image: 'https://picsum.photos/727/523/',
        text:
          'Request a package pickup with just a few taps and get your returns dropped off at carriers like UPS, FedEx, and USPS.',
        cta_text: 'Shop Alcohol',
      },
      {
        title: 'Restock the minibar',
        image: 'https://picsum.photos/727/523/',
        text:
          'Hosting a get-together or need or need a special cocktail ingredient? Get liquor, beer, mixers, champagne and wine delivered fast.*',
        cta_text: 'Shop Alcohol',
      },
      {
        title: 'Restock the minibar',
        image: 'https://picsum.photos/727/523/',
        text:
          'Hosting a get-together or need or need a special cocktail ingredient? Get liquor, beer, mixers, champagne and wine delivered fast.*',
        cta_text: 'Shop Alcohol',
      },
      {
        title: 'Restock the minibar',
        image: 'https://picsum.photos/727/523/',
        text:
          'Hosting a get-together or need or need a special cocktail ingredient? Get liquor, beer, mixers, champagne and wine delivered fast.*',
        cta_text: 'Shop Alcohol',
      },
    ],
  },
};
