/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../components/**/*.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../images', '../dist'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-links/register', {
    name: '@storybook/addon-essentials',
    options: {
      actions: false
    }
  }, 'storybook-addon-themes', '@storybook/addon-mdx-gfm'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  docs: {
    autodocs: true
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
};

export default config;
