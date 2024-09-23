import React from 'react';
import template from './paragraph.twig';

export default {
  title: 'Atoms/Paragraph',
  argTypes: {
    paragraph_content: {
      description: 'Paragraph text (HTML markup allowed)',
      table: {
        type: { summary: 'string/HTML' },
      },
    },
    paragraph_size: {
      description: 'Set different font size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'inline-radio',
      },
      options: ['default', 'small'],
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const Paragraph = {
  render: Template,
  args: {
    paragraph_content: 'Lorem ipsum dolor sit amet',
    paragraph_size: 'default',
  },
};
