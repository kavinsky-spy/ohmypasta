import React from 'react';
import template from './alert.twig';

export default {
  title: 'Molecules/Alert',
  argTypes: {
    alert_type: {
      description: 'Alert type - uses localgov types',
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'select',
      },
      options: ['announcement', 'minor', 'major', 'notable-person'],
    },
    alert_title: {
      description: 'Title of the alert',
      table: {
        type: { summary: 'string' },
      },
    },
    alert_display_title: {
      description: 'True to display the title',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    alert_content: {
      description: 'Content of the alert',
      table: {
        type: { summary: 'string' },
      },
    },
    alert_link_text: {
      description: 'Text of the alert link',
      table: {
        type: { summary: 'string' },
      },
    },
    alert_link_url: {
      description: 'URL of the alert link',
      table: {
        type: { summary: 'string' },
      },
    },
    alert_remove_close: {
      description: 'True to hide the close button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const Alert = {
  render: Template,
  args: {
    alert_type: 'announcement',
    alert_title: 'Lorem ipsum',
    alert_display_title: true,
    alert_content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    alert_link_text: 'More information',
    alert_link_url: '#',
    alert_remove_close: false,
  },
};
