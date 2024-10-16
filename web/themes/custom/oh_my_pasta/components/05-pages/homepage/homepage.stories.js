import React from 'react';
import template from './homepage.twig';

export default {
  title: 'Pages/Homepage',
  argTypes: {
    homepage: {
      name: 'homepage oh my pasta',
      description: 'dummy page Oh My Pasta',
    },
  },
};

const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const Homepage = Template.bind({});
Homepage.args = {
  title: 'test',
};
