import React from 'react';
import template from './call-out-box.twig';

export default {
  title: 'Molecules/Call Out Box',
  argTypes: {
    call_out_box_icon: {
      description: 'Heading icon',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'false' },
      },
    },
    call_out_box_heading: {
      description: 'Heading text',
      table: {
        type: { summary: 'string' },
      },
    },
    call_out_box_heading_level: {
      description: 'Heading level',
      table: {
        type: { summary: '2/3/4/5/6' },
        defaultValue: { summary: '2' },
      },
      control: {
        type: 'inline-radio',
      },
      options: ['2', '3', '4', '5', '6'],
    },
    call_out_box_text: {
      description: 'Main text content (HTML)',
      table: {
        type: { summary: 'string/HTML' },
      },
    },
    call_out_box_cta_text: {
      description: 'CTA text',
      table: {
        type: { summary: 'string' },
      },
    },
    call_out_box_cta_url: {
      description: 'CTA URL',
      table: {
        type: { summary: 'string' },
      },
    },
    call_out_box_cta_new_window: {
      description: 'True to open the link in a new window',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    call_out_box_search: {
      description: 'True to display the search (Find my nearest)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    call_out_box_color: {
      description: 'Colour of the call out box',
      table: {
        type: { summary: 'green/pink/blue' },
        defaultValue: { summary: 'green' },
      },
      control: {
        type: 'inline-radio',
      },
      options: ['green', 'pink', 'blue'],
    },
    call_out_box_large: {
      description: 'True for large variation',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const CallOutBox = {
  render: Template,
  args: {
    call_out_box_icon: true,
    call_out_box_heading: 'Find my nearest',
    call_out_box_heading_level: '',
    call_out_box_text:
      '<div class="text-long"><p>The easiest way to find nearest schools, council services, your councillors, car parks and more.</p><p>or browse <a href="#">My Maps</a></p></div>',
    call_out_box_cta_text: '',
    call_out_box_cta_url: '',
    call_out_box_cta_new_window: false,
    call_out_box_search: true,
    call_out_box_color: '',
    call_out_box_large: true,
  },
};
