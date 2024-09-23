import React from 'react';
import template from './pager-numbers.twig';

export default {
  title: 'Molecules/Pagers/Pager Numbers',
  argTypes: {
    current: {
      name: 'Current active item',
      description: '',
      table: {
        type: { summary: 'string' },
      },
    },
    items: {
      name: 'Pager items',
      description:
        'Array of links - Structure and properties are based on the Drupal pager links',
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

export const PagerNumbers = Template.bind({});
PagerNumbers.args = {
  current: '2',
  items: {
    previous: { href: '#' },
    next: { href: '#' },
    pages: [
      {
        href: '/',
        attributes: [],
      },
      {
        href: '/',
        attributes: [],
      },
      {
        href: '/',
        attributes: [],
      },
      {
        href: '/',
        attributes: [],
      },
      {
        href: '/',
        attributes: [],
      },
    ],
  },
};
