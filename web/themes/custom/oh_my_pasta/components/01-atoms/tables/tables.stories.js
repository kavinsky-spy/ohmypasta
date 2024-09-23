import React from 'react';
import template from './tables.twig';
import mdx from './tables.mdx';

import './tables';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Tables',
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    table_non_responsive: {
      description:
        'If true it adds a class to the table doing it do not have the responsive style on mobile',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    table_scrollable: {
      description:
        'If true it adds a div wrapping the table with style to make the table scrollable, only works if table_non_responsive is true',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

const Template = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: template({ ...args }),
    }}
  />
);

export const Tables = {
  render: Template,
  args: {
    table_non_responsive: true,
    table_scrollable: true,
  },
};
