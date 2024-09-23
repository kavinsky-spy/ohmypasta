import React from 'react';
import template from './date.twig';

export default {
  title: 'Atoms/Forms/Date',
  argTypes: {
    date_error: {
      description: 'Apply error display',
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

export const Date = {
  render: Template,
  args: {
    date_error: false,
  },
};
