import React from 'react';
import template from './hero.twig';

const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export default {
  title: 'Molecules/Hero',
  argTypes: {
    hero_heading: {
      description: 'Hero component title',
      table: {
        type: { summary: 'string' },
      },
    },
    hero_search_enable: {
      description: 'Hero Search Eanbled or not',
      table: {
        type: { summary: 'boolean' },
      },
    },
    hero_background_type: {
      description: 'Background Show or not',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
};

export const hero = {
  render: Template,
  args: {
    hero_heading: 'Discover flavours never tasted before.',
    hero_background_type: true,
    hero_search_enable: true,
  },
};
