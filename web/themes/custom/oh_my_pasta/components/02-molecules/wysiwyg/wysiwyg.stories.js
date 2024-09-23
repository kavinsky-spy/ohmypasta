import React from 'react';

import template from './wysiwyg.twig';

export default {
  title: 'Molecules/WYSIWYG',
  argTypes: {
    wysiwyg_contained: {
      description: 'Does the component need a container',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    wysiwyg_content: {
      description: 'WYSIWYG / Full text content',
      table: {
        type: { summary: 'HTML markup' },
        defaultValue: {},
      },
    },
  },
};
const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const WYSIWYG = {
  render: Template,
  args: {
    wysiwyg_contained: false,
    wysiwyg_content:
      '<div class="text-long"><h2>Report it</h2><p>You can report issues online at a time and place to suit you.</p>' +
      '<p>Our app and online services help you to contact the council quickly and easily and get a prompt response.</p>' +
      '<p>If you create a personal account, you will be able to view all your queries and responses in one place.</p>' +
      '<p>However, you can still report things without setting up an account – just log in as a guest.</p>' +
      '<p><a class="button button--primary ext" href="#">Report an issue</a></p>' +
      '<h2>Safeguarding and abuse</h2>' +
      '<p>If you have concerns about a child or young person under 18 years old or an adult at risk, please immediately contact our social services duty officer on (01633) 656656&nbsp;or the&nbsp;emergency contact team on <strong>0800 328 4432</strong> outside normal office hours, Mondays-Fridays 8.30-5pm.&nbsp;</p>' +
      '<p>Read about <a href="#">safeguarding children, young people and adults at risk</a>.</p>' +
      '<p>For more information visit the&nbsp;<a href="#">Gwent Safeguarding website</a>.</p></div>',
  },
};
