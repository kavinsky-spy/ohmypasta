import React from 'react';
import template from './accordion.twig';
import './accordion';

export default {
  title: 'Molecules/Accordion',
  argTypes: {
    accordion_heading: {
      description: 'Title of the accordion',
      table: {
        type: { summary: 'string' },
      },
    },
    accordion_heading_level: {
      description: 'From H2 to H6',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 3 },
      },
      control: {
        type: 'inline-radio',
      },
      options: [2, 3, 4, 5, 6],
    },
    accordion_icon_before: {
      description: 'Icon position',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    accordion_icon_name: {
      description: 'Icon name',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'chevron' },
      },
    },
    accordion_content: {
      description: 'Hidden content',
      table: {
        type: { summary: 'string/HTML' },
      },
    },
    accordion_contained: {
      description:
        'Set this option to true if you want the component to sit within a container.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const Accordion = {
  render: Template,
  args: {
    accordion_heading: 'Accordion title',
    accordion_heading_level: 3,
    accordion_icon_before: false,
    accordion_icon_name: 'chevron-down',
    accordion_content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    accordion_contained: false,
  },
};
