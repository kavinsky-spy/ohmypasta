import React from 'react';
import template from './accordion-faq.twig';

export default {
  title: 'Organisms/Accordion FAQ',
  argTypes: {
    accordion_faq_heading: {
      description: 'Title text',
      table: {
        type: { summary: 'string' },
      },
    },
    accordion_faq_heading_level: {
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
    accordion_faq_items: {
      description: 'Array of the accordion items',
      table: {
        type: {
          summary: 'Array',
        },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const AccordionFAQ = {
  render: Template,
  args: {
    accordion_faq_heading: '',
    accordion_faq_heading_level: 2,
    accordion_faq_items: [
      {
        heading: 'Pay for it',
        heading_level: 2,
        content:
          '<div class="text-long"><p>Lorem ipsum dolor sit amet consectetur. Phasellus posuere convallis arcu velit. Platea molestie tortor ultricies orci mattis volutpat fermentum metus penatibus. Donec tincidunt integer eu urna molestie non arcu urna enim. Ipsum massa consectetur condimentum a fermentum nulla.</p></div>',
      },
      {
        heading: 'Report it',
        heading_level: 2,
        content:
          '<div class="text-long"><p>Lorem ipsum dolor sit amet consectetur. Phasellus posuere convallis arcu velit. Platea molestie tortor ultricies orci mattis volutpat fermentum metus penatibus. Donec tincidunt integer eu urna molestie non arcu urna enim. Ipsum massa consectetur condimentum a fermentum nulla.</p></div>',
      },
      {
        heading: 'Request it',
        heading_level: 2,
        content:
          '<div class="text-long"><p>Lorem ipsum dolor sit amet consectetur. Phasellus posuere convallis arcu velit. Platea molestie tortor ultricies orci mattis volutpat fermentum metus penatibus. Donec tincidunt integer eu urna molestie non arcu urna enim. Ipsum massa consectetur condimentum a fermentum nulla.</p></div>',
      },
    ],
  },
};
