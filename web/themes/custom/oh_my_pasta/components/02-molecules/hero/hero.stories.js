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
  },
};

export const hero = {
  render: Template,
  args: {
    hero_heading: 'Welcome to Newport City Council',
  },
};
