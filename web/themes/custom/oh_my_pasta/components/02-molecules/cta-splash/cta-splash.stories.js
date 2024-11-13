import React from 'react';
import template from './cta-splash.twig';

export default {
  title: 'Molecules/CTA Splash',
  argTypes: {
    cta_splash_image: {
      description: 'CTA Splash Background Image',
      table: {
        type: { summary: 'img' },
        defaultValue: { summary: 'https://picsum.photos/1285/640' },
      },
    },
    cta_splash_title: {
      description: 'CTA Splash Title',
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: 'Get grocery and convenience store essentials',
        },
      },
    },
    cta_splash_subtitle: {
      description: 'CTA Splash Subtitle',
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: 'Grocery delivery, exactly how you want it.',
        },
      },
    },
    cta_splash_description: {
      description: 'CTA Splash Description',
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary:
            'Shop from home and fill your cart with fresh produce, frozen entrees, deli delights and more.',
        },
      },
    },
    cta_splash_cta: {
      description: 'CTA Splash Button',
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: 'Shop Groceries',
        },
      },
    },
    cta_splash_url: {
      description: 'CTA Splash Button URL',
      table: {
        type: { summary: 'string' },
        defaultValue: {
          summary: '#',
        },
      },
    },
  },
};

const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const ctaSplash = {
  render: Template,
  args: {
    cta_splash_image: 'https://picsum.photos/1285/640',
    cta_splash_title: 'Get grocery and convenience store essentials',
    cta_splash_subtitle: 'Grocery delivery, exactly how you want it.',
    cta_splash_description:
      'Shop from home and fill your cart with fresh produce, frozen entrees, deli delights and more.',
    cta_splash_cta: 'Shop Groceries',
    cta_splash_url: '#',
  },
};
