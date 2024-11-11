import React from 'react';
import template from './media-text-cta.twig';

export default {
  title: 'Molecules/Media Text Cta',
  argTypes: {
    media_text_cta_title: {
      description: 'Title of Media Text Cta',
      table: {
        type: { summary: 'string' },
      },
    },
    media_text_cta_subtitle: {
      description: 'Subtitle of Media Text Cta',
      table: {
        type: { summary: 'string' },
      },
    },
    media_text_cta_text: {
      description: 'Text description to CTA',
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary:
            "Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try.",
        },
      },
    },
    media_text_cta_image: {
      description: 'Image media',
      table: {
        type: { summary: 'img' },
        defaultValue: { summary: 'https://picsum.photos/727/523/' },
      },
    },
    media_text_cta_side: {
      description: 'Component orientation',
      control: { type: 'boolean' },
    },
  },
};

const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const mediaTextCta = {
  render: Template,
  args: {
    media_text_cta_title: 'Everything you crave, delivered.',
    media_text_cta_subtitle: 'Your favorite local restaurants',
    media_text_cta_text:
      "Get a slice of pizza or the whole pie delivered, or pick up house lo mein from the Chinese takeout spot you've been meaning to try.",
    media_text_cta_image: 'https://picsum.photos/727/523/',
  },
};
