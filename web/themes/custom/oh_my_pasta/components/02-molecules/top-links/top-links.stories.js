import React from 'react';
import template from './top-links.twig';

export default {
  title: 'Molecules/Top Links',
  argTypes: {
    top_links_heading: {
      description: 'Title text',
      table: {
        type: { summary: 'string' },
      },
    },
    top_links_heading_level: {
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
    top_links_items: {
      description: 'Array of links',
      table: {
        type: {
          summary: 'Array',
        },
      },
    },
  },
};
const Template = (args) => (
  <div
    style={{ maxWidth: '40rem' }}
    dangerouslySetInnerHTML={{ __html: template({ ...args }) }}
  />
);

export const TopLinks = {
  render: Template,
  args: {
    top_links_heading: 'Top Links',
    top_links_heading_level: 2,
    top_links_items: [
      {
        title: 'Term dates',
        url: '#',
      },
      {
        title: 'School transports',
        url: '#',
      },
    ],
  },
};
