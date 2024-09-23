import React from 'react';
import template from './radio.twig';

export default {
  title: 'Atoms/Forms/Radio',
  argTypes: {
    radios: {
      table: {
        disable: true,
      },
    },
    radio_inline: {
      description: 'Display radios inline rather than in different rows',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    radio_error: {
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

export const Radio = {
  render: Template,
  args: {
    radio_error: false,
    radio_inline: false,
    radios: [
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
