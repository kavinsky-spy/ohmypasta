import React from 'react';
import template from './cta-sections.twig';

export default {
  title: 'Organisms/CTA Sections',
  argTypes: {
    section_items: [
      {
        title: 'Become a Dasher',
        image: 'https://loremicon.com/rect/128/128/',
        text:
          'As a delivery driver, make money and work on your schedule. Sign up in minutes.',
        cta_text: 'Start earning',
      },
      {
        title: 'Become a Dasher',
        image: 'https://loremicon.com/rect/128/128/',
        text:
          'As a delivery driver, make money and work on your schedule. Sign up in minutes.',
        cta_text: 'Start earning',
      },
      {
        title: 'Become a Dasher',
        image: 'https://loremicon.com/rect/128/128/',
        text:
          'As a delivery driver, make money and work on your schedule. Sign up in minutes.',
        cta_text: 'Start earning',
      },
    ],
  },
};

const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const CtaSections = {
  render: Template,
  args: {
    section_items: [
      {
        title: 'Become a Dasher',
        image: 'https://loremicon.com/rect/154/154/',
        text:
          'As a delivery driver, make money and work on your schedule. Sign up in minutes.',
        cta_text: 'Start earning',
      },
      {
        title: 'Become a Merchant',
        image: 'https://loremicon.com/rect/154/154/',
        text:
          'Attract new customers and grow sales, starting with 0% commissions for up to 30 days.',
        cta_text: 'Sign up for DoorDash',
      },
      {
        title: 'Become a Dasher',
        image: 'https://loremicon.com/rect/154/154/',
        text:
          'As a delivery driver, make money and work on your schedule. Sign up in minutes.',
        cta_text: 'Start earning',
      },
    ],
  },
};
