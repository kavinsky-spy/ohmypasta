import React from 'react';
import template from './pager.twig';

export default {
  title: 'Molecules/Pagers/Pager',
  argTypes: {
    pager_next_title: {
      description: 'Title of the next item',
      table: {
        type: { summary: 'string' },
      },
    },
    pager_prev_title: {
      description: 'Title of the previous item',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const Pager = {
  render: Template,
  args: {
    pager_next_url: '#',
    pager_next_title: 'Next',
    pager_prev_url: '#',
    pager_prev_title: 'Previous',
  },
};
