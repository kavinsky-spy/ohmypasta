/**
 * Site-wide viewports
 *
 * These are manual, but should marry up with those defined in the SASS and the .breakpoints.yml files.
 *
 * This is just for the Storybook display – it adds a 'viewport' button so you can test the layouts inside Storybook.
 */
export const siteViewports = {
  phone: {
    name: 'phone',
    styles: {
      width: '375px',
      height: '100%',
    },
  },
  phonewide: {
    name: 'phone-wide',
    styles: {
      width: '480px',
      height: '100%',
    },
  },
  phablet: {
    name: 'phablet',
    styles: {
      width: '540px',
      height: '100%',
    },
  },
  tablet: {
    name: 'tablet',
    styles: {
      width: '768px',
      height: '100%',
    },
  },
  tabletwide: {
    name: 'tablet-wide',
    styles: {
      width: '1024px',
      height: '100%',
    },
  },
  desktop: {
    name: 'desktop',
    styles: {
      width: '1280px',
      height: '100%',
    },
  },
  desktopwide: {
    name: 'desktop-wide',
    styles: {
      width: '1440px',
      height: '100%',
    },
  },
};
