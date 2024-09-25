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
    page_title_heading: 'Wine and Sauce',
    page_title_summary:
      '<p>Pasta ipsum dolor sit amet gnocchi capunti fedelini fiorentine penne lisce pasta al ceppo bucatini lasagnotte calamarata lagane.</p>',
  },
};
