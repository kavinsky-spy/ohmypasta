import React from 'react';
import template from './footer.twig';
import socialMenuData from './data/social-menu.json';
import downloadMenuData from './data/download-menu.json';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Footer',
  argTypes: {
    footer_menu_items: {
      description:
        'Array of links - Structure and properties are based on the Drupal Menu Links',
      table: {
        type: {
          summary: 'Array',
        },
      },
    },
    footer_social_menu_heading: {
      description: 'Title of the social menu',
      table: {
        type: { summary: 'string' },
      },
    },
    footer_social_menu_items: {
      description: 'Array of the social media platforms',
      table: {
        type: {
          summary: 'Array',
        },
      },
    },
    footer_text: {
      description: 'Copyright text.',
      table: {
        type: { summary: 'string' },
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

export const Footer = {
  render: Template,
  args: {
    footer_feedback_content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    footer_social_menu_heading: 'Follow us',
    footer_social_menu_items: socialMenuData,
    footer_download_heading: 'Download our app',
    footer_download_items: downloadMenuData,
    footer_contact_heading: 'Contact us',
    footer_address_heading: 'Our Address',
    footer_accessibility_heading: 'Accessibility',
  },
};
