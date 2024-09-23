import React from 'react';
import template from './search-result.twig';

export default {
  title: 'Molecules/Search Result',
  argTypes: {
    search_result_icon: {
      description: 'True if icon is present',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    search_result_heading: {
      description: 'Title text',
      table: {
        type: { summary: 'string' },
      },
    },
    search_result_heading_level: {
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
    search_result_url: {
      description: 'Link url',
      table: {
        type: { summary: 'string' },
      },
    },
    search_result_url_new_window: {
      description: 'True if link needs to open in a new window',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    search_result_description: {
      description: 'Description text',
      table: {
        type: { summary: 'string' },
      },
    },
    search_result_date: {
      description: 'Date format: j d M Y',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const SearchResult = {
  render: Template,
  args: {
    search_result_icon: true,
    search_result_heading: 'Pay your council tax',
    search_result_heading_level: 3,
    search_result_url: '#',
    search_result_url_new_window: false,
    search_result_description:
      'Lorem ipsum dolor sit amet consectetur. Aliquet non vel arcu sociis.',
    search_result_date: '14-09-2023',
  },
};
