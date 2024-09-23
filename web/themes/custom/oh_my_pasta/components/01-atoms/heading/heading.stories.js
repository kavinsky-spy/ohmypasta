import React from 'react';
import template from './heading.twig';

export default {
  title: 'Atoms/Heading',
  argTypes: {
    heading_level: {
      description: 'From H1 to H6',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
      control: {
        type: 'inline-radio',
      },
      options: [1, 2, 3, 4, 5, 6],
    },
    heading: {
      description: '',
      table: {
        type: { summary: 'string' },
      },
    },
    heading_url: {
      description: 'Wraps the heading into an <a> element',
      table: {
        type: { summary: 'string/url' },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const Heading = {
  render: Template,
  args: {
    heading_level: 1,
    heading: 'Lorem ipsum',
    heading_url: '',
  },
};
