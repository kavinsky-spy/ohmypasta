import React from 'react';
import template from './downloads.twig';

export default {
  title: 'Molecules/Downloads',
  argTypes: {
    downloads_heading: {
      description: 'Title of the downloads',
      table: {
        type: { summary: 'string' },
      },
    },
    documents: {
      description: 'Array of links - They are documents to downloads',
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

export const Downloads = {
  render: Template,
  args: {
    downloads_heading: 'Documents',
    documents: [
      {
        downloads_link_name_text: 'Lorem ipsum dolor sit amet (PDF, 25KB)',
        downloads_link_name_url: '#',
        downloads_link_url: '#',
      },
      {
        downloads_link_name_text: 'Lorem ipsum dolor sit amet (PDF, 30KB)',
        downloads_link_name_url: '#',
        downloads_link_url: '#',
      },
    ],
  },
};
