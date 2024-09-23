import React from 'react';
import template from './image.twig';

export default {
  title: 'Atoms/Image',
  argTypes: {
    mobile_size: {
      description: 'Size of the image for mobile',
      table: {
        type: { summary: '[width]x[height]' },
        defaultValue: { summary: '150x100' },
      },
    },
    tablet_size: {
      description: 'Size of the image for tablet',
      table: {
        type: { summary: '[width]x[height]' },
        defaultValue: { summary: '300x200' },
      },
    },
    desktop_size: {
      description: 'Size of the image for desktop',
      table: {
        type: { summary: '[width]x[height]' },
        defaultValue: { summary: '600x400' },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const image = {
  render: Template,
  args: {
    mobile_size: '150x100',
    tablet_size: '300x200',
    desktop_size: '600x400',
  },
};
