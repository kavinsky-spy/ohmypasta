import React from 'react';
import template from './text.twig';

export default {
  title: 'Atoms/Forms/Text',
  argTypes: {
    text_title: {
      description: '',
      table: {
        type: { summary: 'string' },
      },
    },
    text_description: {
      description: '',
      table: {
        type: { summary: 'string' },
      },
    },
    text_error: {
      description: 'Apply error display',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    text_type: {
      description: 'Display text or textarea input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
      control: {
        type: 'inline-radio',
      },
      options: ['text', 'textarea'],
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

export const Text = {
  render: Template,
  args: {
    text_title: 'Name',
    text_description: 'First, Middle, Last',
    text_error: false,
    text_type: 'text',
  },
};
