import React from 'react';
import template from './select.twig';

export default {
  title: 'Atoms/Forms/Select',
  argTypes: {
    select: {
      table: {
        disable: true,
      },
    },
    select_error: {
      description: 'Apply error display to the radios',
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

export const Select = {
  render: Template,
  args: {
    select_error: false,
    select: [
      {
        title: 'Lorem ipsum 1',
      },
      {
        title: 'Lorem ipsum 2',
      },
      {
        title: 'Lorem ipsum 3',
      },
      {
        title: 'Lorem ipsum 4',
      },
      {
        title: 'Lorem ipsum 5',
      },
    ],
  },
};
