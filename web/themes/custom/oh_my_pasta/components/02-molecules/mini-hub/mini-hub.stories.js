import React from 'react';
import template from './mini-hub.twig';
import './mini-hub--horizontal/mini-hub--horizontal';

export default {
  title: 'Molecules/Mini Hub',
  argTypes: {
    mini_hub_links: {
      description: 'List of links',
      table: {
        type: {
          summary: 'Array',
        },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const MiniHub = {
  render: Template,
  args: {
    mini_hub_links: [
      {
        text: 'General information',
        url: '#',
      },
      {
        text: 'Reception',
        url: '#',
        active: true,
      },
      {
        text: 'Year 7 (Secondary school)',
        url: '#',
      },
      {
        text: 'Year 12 (Sixth form)',
        url: '#',
      },
    ],
  },
};
