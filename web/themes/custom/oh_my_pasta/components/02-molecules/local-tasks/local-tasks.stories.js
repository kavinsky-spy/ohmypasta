import React from 'react';
import template from './local-tasks.twig';

const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export default {
  title: 'Molecules/Local Tasks',
  argTypes: {
    tasks: {
      description:
        'Array of links - Structure and properties are based on the Drupal Local Tasks',
      table: {
        type: {
          summary: 'Array',
        },
      },
    },
    local_tasks_contained: {
      description:
        'Set this option to true if you want the component to sit within a container.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

export const localTasks = {
  render: Template,
  args: {
    tasks: [
      {
        text: 'View',
        is_active: true,
      },
      {
        text: 'Edit',
      },
      {
        text: 'Delete',
      },
      {
        text: 'Revisions',
      },
    ],
    local_tasks_contained: false,
  },
};
