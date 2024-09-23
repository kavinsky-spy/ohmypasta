import React from 'react';
import template from './carousel.twig';
import './carousel';

/**
 * Storybook Definition.
 */

export default {
  title: 'Organisms/Carousel',
  argTypes: {
    carousel_slides: {
      name: 'carousel_slides',
      description: 'Array of slide information - Image / Title / Date / Link',
      table: {
        type: {
          summary: 'Array',
        },
      },
    },
    carousel_contained: {
      description:
        'Set this option to true if you want the component to sit within a container.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};

const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const Carousel = Template.bind({});
Carousel.args = {
  carousel_slides: [
    {
      title: 'Slide #1 Title',
      date: '29 September 2024',
      url: 'https://www.google.com/',
    },
    {
      title: 'Slide #2 Title',
      date: '29 September 2024',
      url: 'https://www.google.com/',
    },
    {
      title: 'Slide #3 Title',
      date: '29 September 2024',
      url: 'https://www.google.com/',
    },
    {
      title: 'Slide #4 Title',
      date: '29 September 2024',
      url: 'https://www.google.com/',
    },
  ],
  carousel_contained: true,
};
