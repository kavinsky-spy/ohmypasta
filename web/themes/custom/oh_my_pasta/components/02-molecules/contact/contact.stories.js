import React from 'react';
import template from './contact.twig';

export default {
  title: 'Molecules/Contact',
  argTypes: {
    contact_main_heading: {
      description: 'Main Title of the contact',
      table: {
        type: { summary: 'string' },
      },
    },
    contact_heading: {
      description: 'Title of the contact box',
      table: {
        type: { summary: 'string' },
      },
    },
    contact_location: {
      description:
        'Body of the contact, usually HTML markup created in a WYSIWYG',
      table: {
        type: { summary: 'HTML markup' },
      },
    },
    contact_email_title: {
      description: 'Link text',
      table: {
        type: { summary: 'string' },
      },
    },
    contact_email_url: {
      description: 'Link url',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    contact_phone_title: {
      description: 'Link text',
      table: {
        type: { summary: 'string' },
      },
    },
    contact_phone_url: {
      description: 'Link url',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
};
const Template = (args) => (
  <div
    style={{ maxWidth: '32.7rem' }}
    dangerouslySetInnerHTML={{ __html: template({ ...args }) }}
  />
);

export const Contact = {
  render: Template,
  args: {
    contact_main_heading: 'Contact information',
    contact_heading: 'Newport City Council',
    contact_location:
      'Newport City Council, Civic Centre, Newport, South Wales, NP20 4UR',
    contact_email_url: 'mailto:info@newport.gov.uk',
    contact_email_title: 'info@newport.gov.uk',
    contact_phone_url: 'tel:998998088098',
    contact_phone_title: '998998088098',
  },
};
