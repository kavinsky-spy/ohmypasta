import React from 'react';
import template from './button.twig';
import mdx from './button.mdx';

export default {
  title: 'Atoms/Button',
  component: template,
  parameters: {
    docs: {
      page: mdx,
    },
  },
  argTypes: {
    button_content: {
      description: 'Content of the button (typically text)',
      table: {
        type: { summary: 'string' },
      },
    },
    button_type: {
      description: '',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'inline-radio',
      },
      options: ['primary', 'secondary'],
    },
    button_icon: {
      description: '',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    button_icon_before: {
      description: 'Positions the icon at the right of the button.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    button_icon_name: {
      description:
        'Add an icon name to display it within the button e.g. "chevron"',
      table: {
        type: { summary: 'string' },
      },
    },
    button_aria_label: {
      description:
        "Optional aria-label. Only specific when there's no content, e.g. for an icon-only button",
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    button_span: {
      description: 'Add the button text to a span tag',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    button_url: {
      description:
        'When a button URL is added, it uses a hyperlink instead of button tag',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    button_visually_hidden_text: {
      description:
        'Add sr-only class to the button text and clean some button styles to display only the icon.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

const Template = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: template({ ...args }),
    }}
  />
);

export const Button = {
  render: Template,
  args: {
    button_content: 'Button',
    button_type: 'primary',
    button_icon: false,
    button_icon_before: false,
    button_icon_name: '',
    button_aria_label: '',
    button_span: false,
    button_visually_hidden_text: false,
    button_url: '',
  },
};
