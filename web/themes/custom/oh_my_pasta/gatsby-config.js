module.exports = {
  pathPrefix: '/gatsby-theme-emulsify-workspace', // for deploying to a folder like on Github pages.
  plugins: [
    {
      resolve: 'gatsby-theme-emulsify',
      options: {
        // Site Metadata for style guide
        siteMetadata: {
          title: 'Visit Valencia',
          description: 'Digital Styleguide for Visit Valencia',
          author: 'Zoocha Ltd',
        },
        docPagesPath: 'styleguide', // Where your custom style guide pages live
        componentLibPath: 'components', // Where your component library lives
        UILibPath: '/static/storybook/iframe.html', // Where your Storybook instance lives. Could be remote or local like "/storybook/iframe.html"
        basePath: __dirname, // Needed to make above paths relative to your project
        // designSystems: [
        //   {
        //     name: "Basic", // Other design system you may want to link to in a parent/child situation
        //     link: "/"
        //   },
        // ]
      },
    },
  ],
};
