// Documentation on theming Storybook: https://storybook.js.org/docs/configurations/theming/

import { create } from '@storybook/theming';

export default create({
  base: 'light',
  // Branding
  brandTitle: 'Digital Styleguide for Oh My Pasta',
  brandUrl: '#',
  brandImage:
    'logo.svg',
});
