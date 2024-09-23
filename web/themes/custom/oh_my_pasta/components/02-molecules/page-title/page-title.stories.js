import React from 'react';
import template from './page-title.twig';

export default {
  title: 'Molecules/Page Title',
  argTypes: {
    page_title_heading: {
      description: 'Title text',
      table: {
        type: { summary: 'string' },
      },
    },
    page_title_summary: {
      description: 'Summary text',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const PageTitle = {
  render: Template,
  args: {
    page_title_heading: 'Schools and education',
    page_title_summary:
      '<p>Includes how to claim benefits, who to contact if you need help and where to get advice on your financial situation.</p>',
  },
};
