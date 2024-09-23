import React from 'react';

import template from './video.twig';

export default {
  title: 'Molecules/Video',
  argTypes: {
    video_full_width: {
      description: 'Is the video going to display full width?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    video_content: {
      description: 'Local video content or raw video content.',
      table: {
        type: { summary: 'path to local video or iframe.' },
        defaultValue: {},
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const Video = {
  render: Template,
  args: {
    video_full_width: false,
    video_content:
      "<iframe title='Zoocha Video' width='854' height='480' frameborder='0' allowfullscreen='allowfullscreen' src='https://www.youtube.com/embed/YRnVnlhjOBs?autoplay=0&amp;start=0'></iframe>",
  },
};
