import React from 'react';
import template from './service-status-list.twig';

export default {
  title: 'Organisms/Service Status List',
  argTypes: {
    service_status_list_heading: {
      description: 'Heading',
      table: {
        type: { summary: 'string' },
      },
    },
    service_status_list_heading_level: {
      description: 'Heading level - from H2 to H6',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 3 },
      },
      control: {
        type: 'inline-radio',
      },
      options: [2, 3, 4, 5, 6],
    },
    service_status_list_all_text: {
      description: 'All updates text',
      table: {
        type: { summary: 'string' },
      },
    },
    service_status_list_all_url: {
      description: 'All updates URL',
      table: {
        type: { summary: 'string' },
      },
    },
    service_status_list_no_updates_text: {
      description: 'No updates text',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const ServiceStatusList = {
  render: Template,
  args: {
    service_status_list_heading: 'Service updates',
    service_status_list_heading_level: 3,
    service_status_list_all_text: 'See all service updates',
    service_status_list_all_url: '#',
    service_status_list_no_updates_text: 'There are currently no updates',
    service_status_list_items: [
      {
        date: '1700643689',
        title: 'Schools closure',
        url: '#',
        description:
          'Lorem ipsum dolor sit amet consectetur. Aliquet non vel arcu ',
      },
      {
        date: '1700784001',
        title: 'School gate maintenance',
        url: '#',
        description:
          'Lorem ipsum dolor sit amet consectetur. Aliquet non vel arcu ',
      },
    ],
  },
};
