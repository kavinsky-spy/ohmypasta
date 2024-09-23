import React from 'react';
import template from './checkbox.twig';

export default {
  title: 'Atoms/Forms/Checkbox',
  argTypes: {
    checkboxes: {
      table: {
        disable: true,
      },
    },
    checkbox_inline: {
      description: 'Display checkboxes inline rather than in different rows',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    checkbox_error: {
      description: 'Apply error display to the checkboxes',
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

export const Checkbox = {
  render: Template,
  args: {
    checkbox_error: false,
    checkbox_inline: false,
    checkboxes: [
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
