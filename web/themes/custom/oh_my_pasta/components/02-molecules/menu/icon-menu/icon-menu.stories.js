import React from 'react';
import template from './icon-menu.twig';

export default {
  title: 'Molecules/Menus/Icon Menu',
  argTypes: {
    icon_menu_heading: {
      description: 'Title of the social menu',
      table: {
        type: { summary: 'string' },
      },
    },
    icon_menu_items: {
      description: 'Array of the social media platforms',
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
    dangerouslySetInnerHTML={{
      __html: template({ ...args }),
    }}
  />
);

export const iconMenu = {
  render: Template,
  args: {
    icon_menu_heading: 'Follow us',
    icon_menu_items: [
      {
        title: 'Facebook',
        url: '#',
        icon: 'facebook',
      },
      {
        title: 'Instagram',
        url: '#',
        icon: 'instagram',
      },
      {
        title: 'Twitter',
        url: '#',
        icon: 'twitter',
      },
      {
        title: 'Youtube',
        url: '#',
        icon: 'youtube',
      },
    ],
  },
};
