import { useEffect } from '@storybook/client-api';
import Twig from 'twig';
import { setupTwig } from './setupTwig';
import { siteViewports } from './viewports';
import renderHtml from './renderHtml';

// GLOBAL CSS
import '../components/styles.scss';

// If in a Drupal project, it's recommended to import a symlinked version of drupal.js.
import './_drupal.js';
import './once.global';

// jQuery
import jquery from 'jquery';
global.jQuery = jquery;
global.$ = jquery;

// Accessible Slick
import '@accessible360/accessible-slick';

// Vimeo
import '@vimeo/player';

export const parameters = {
  viewport: {
    viewports: siteViewports,
  },
  html: {
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  },
  controls: { expanded: true },
  docs: {
    transformSource: (src) => renderHtml(src),
  },
};

export const decorators = [
  (storyFn) => {
    // Using a different id for the deps parameter will force the component to trigger the function again, which
    // is needed when updating components variables through Controls.
    useEffect(() => Drupal.attachBehaviors(), [Math.random()]);
    return storyFn();
  },
];

setupTwig(Twig);
