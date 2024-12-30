import React from 'react';
import template from './cta-section.twig';

export default {
  title: 'Molecules/CTA Section',
  argTypes: {
    section_title: {
      description: 'Title of section',
      table: {
        type: { summary: 'string' },
      },
    },
    section_image: {
      description: 'Image section',
      table: {
        type: { summary: 'img' },
        defaultValue: { summary: 'https://loremicon.com/rect/128/128/' },
      },
    },
    section_text: {
      description: 'Text content as description',
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary:
            'As a delivery driver, make money and work on your schedule. Sign up in minutes.',
        },
      },
    },
    section_cta_text: {
      description: 'CTA Text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Start earning' },
      },
    },
    section_cta_url: {
      description: 'CTA url',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#' },
      },
    },
  },
};

const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const CtaSection = {
  render: Template,
  args: {
    section_title: 'Become a Dasher',
    section_image: 'https://loremicon.com/rect/128/128/',
    section_text:
      'As a delivery driver, make money and work on your schedule. Sign up in minutes.',
    section_cta_text: 'Start earning',
    section_cta_url: '#',
  },
};
