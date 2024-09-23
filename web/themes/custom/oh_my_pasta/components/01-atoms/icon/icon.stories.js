import React from 'react';
import template from './icon.twig';

export default {
  title: 'Atoms/Icon',
  component: template,
  argTypes: {
    icon_title: {
      description: 'Icon title',
      table: {
        type: { summary: 'string' },
      },
    },
    icon_role: {
      description: 'File name of the icon',
      table: {
        type: { summary: 'string' },
      },
    },
    icon_name: {
      description: 'File name of the icon',
      table: {
        type: { summary: 'string' },
      },
    },
    icon_desc: {
      description: 'Icon description',
      table: {
        type: { summary: 'string' },
      },
    },
    icon_decorative: {
      description: 'Set it true to change the aria-hidden and role attributes',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

const ListTemplate = () => {
  const fileIcons = require
    .context('../../../images/icons/', true, /\.svg$/)
    .keys();

  const fileNames = [];
  fileIcons.forEach((value) => {
    const name = value.split('./')[1].split('.svg')[0];
    fileNames.push({
      name,
      value: name,
    });
  });

  return (
    <div className="demo-cards">
      {fileNames.map((icon) => (
        <div className="demo-cards__card">
          <Template icon_name={icon.value} icon_title={icon.title} />
          <pre>{icon.name}</pre>
        </div>
      ))}
    </div>
  );
};

export const Icon = {
  render: Template,

  args: {
    icon_title: 'Icon title',
    icon_name: 'chevron',
    icon_desc: '',
    icon_role: '',
    icon_decorative: false,
  },
};

export const IconList = {
  render: ListTemplate,
};
