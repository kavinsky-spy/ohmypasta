import React from 'react';
import template from './link.twig';

export default {
  title: 'Atoms/Link',
  argTypes: {
    link_url: {
      description: '',
      table: {
        type: { summary: 'string' },
      },
    },
    link_content: {
      description: '',
      table: {
        type: { summary: 'string' },
      },
    },
    link_icon: {
      description: '',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    link_icon_before: {
      description: 'Positions the icon at the right of the link.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    link_icon_name: {
      description:
        'Add an icon name to display it within the link e.g. "chevron"',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const Link = {
  render: Template,
  args: {
    link_url: 'https://zoocha.github.io/storybook-starter-theme/',
    link_content: 'This is my link text',
    link_icon: false,
    link_icon_before: false,
    link_icon_name: '',
  },
};
