import React from 'react';
import template from './status-messages.twig';

/**
 * Storybook Definition.
 */

export default {
  title: 'Molecules/Status Messages',
  argTypes: {
    status_messages_type: {
      description: '',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'inline-radio',
      },
      options: ['status', 'warning', 'error'],
    },
    status_messages_title: {
      description: 'Heading of the status message',
      table: {
        type: { summary: 'string' },
      },
    },
    status_messages_messages: {
      description: 'Message content',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);
export const StatusMessages = {
  render: Template,
  args: {
    status_messages_type: 'status',
    status_messages_title: 'This is a status message',
    status_messages_messages: [
      {
        content: 'The configuration options have been saved.',
      },
      {
        content: 'The page has been updated.',
      },
    ],
  },
};
