import React from 'react';
import template from './breadcrumbs.twig';

export default {
  title: 'Molecules/Menus/Breadcrumbs',
  argTypes: {
    breadcrumb: {
      description:
        'Array of links - Structure and properties are based on the Drupal Breadcrumbs',
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

export const breadcrumbs = {
  render: Template,
  args: {
    breadcrumb: [
      {
        text: 'Home',
        url: '#',
      },
      {
        text: 'Parent page',
        url: '#',
      },
      {
        text: 'Current page',
      },
    ],
  },
};
