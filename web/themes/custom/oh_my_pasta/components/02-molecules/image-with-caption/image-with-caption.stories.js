import React from 'react';

import template from './image-with-caption.twig';

export default {
  title: 'Molecules/Image With Caption',
  argTypes: {
    image_with_caption_text: {
      description: 'Image caption',
      table: {
        type: { summary: 'string' },
        defaultValue: {},
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const imageWithCaption = {
  render: Template,
  args: {
    image_with_caption_text: 'This is the image caption',
  },
};
