import React from 'react';
import template from './list.twig';

export default {
  title: 'Atoms/List',
  argTypes: {
    list_type: {
      description: 'Type of list - ordered or unordered',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'ul' },
      },
      control: {
        type: 'inline-radio',
      },
      options: ['ul', 'ol'],
    },
    list_items: {
      description: '',
      table: {
        type: { summary: 'array' },
      },
    },
    list_style: {
      description: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
      control: {
        type: 'inline-radio',
      },
      options: ['none', 'inline', 'unstyled', 'icon'],
    },
    list_items_icon: {
      description:
        'Add an icon name to display it within the list item e.g. "chevron"',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'chevron' },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const List = {
  render: Template,
  args: {
    list_type: 'ul',
    list_items: [
      {
        content: 'Item 1',
      },
      {
        content: 'Item 2',
      },
      {
        content: 'Item 3',
      },
    ],
    list_style: 'none',
    list_items_icon: 'chevron',
  },
};
