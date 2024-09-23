import React from 'react';
import template from './service-status.twig';

export default {
  title: 'Molecules/Service Status',
  argTypes: {
    service_status_date: {
      description: 'Date',
      table: {
        type: { summary: 'UNIX time' },
      },
    },
    service_status_heading: {
      description: 'Heading',
      table: {
        type: { summary: 'string' },
      },
    },
    service_status_heading_level: {
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
    service_status_description: {
      description: 'Summary / text',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const ServiceStatus = {
  render: Template,
  args: {
    service_status_date: '1700643689',
    service_status_heading: 'Schools closure',
    service_status_heading_level: 3,
    service_status_heading_url: '#',
    service_status_description:
      'Lorem ipsum dolor sit amet consectetur. Aliquet non vel arcu',
  },
};
