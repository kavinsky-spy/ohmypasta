import React from 'react';
import template from './blockquote.twig';

export default {
  title: 'Atoms/Blockquote',
  argTypes: {
    blockquote_content: {
      description: '',
      table: {
        type: { summary: 'string' },
      },
    },
    blockquote_citation: {
      description: '',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const Blockquote = {
  render: Template,
  args: {
    blockquote_content:
      'As a local authority we have listened to what families have said they need and want for their children. This funding will help provide everything from a simple changing bench for disabled children to more classroom places so that they can attend local schools.\n' +
      'Cllr Timothy Barnes, Cabinet Member for Economic Development, Education and Skills at Westminster City Council',
    blockquote_citation: 'Lorem ipsum',
  },
};
