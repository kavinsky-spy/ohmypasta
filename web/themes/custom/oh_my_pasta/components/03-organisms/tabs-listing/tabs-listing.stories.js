import React from 'react';
import template from './tabs-listing.twig';

export default {
  title: 'Tabs Listing',
  argsTypes: {
    tabs_listing_title: {
      description: 'Title of Tabs Listing',
      table: {
        type: { summary: 'string' },
      },
    },
    title_tabs: {
      description: 'List of Title Tabs',
      table: {
        type: { summary: 'string' },
      },
    },
    title_list: {
      description: 'List of Title Items',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

const Template = (args) => (
  <div dangerouslySetInnerHTML={{ __html: template({ ...args }) }} />
);

export const tabsListing = {
  render: Template,
  args: {
    tabs_listing_title: 'Get more from your neighborhood',
    tabs_list: [
      {
        title_tab: 'Top Cities',
        list_titles: [
          {
            title_list: 'New York',
          },
          {
            title_list: 'Brooklyn',
          },
          {
            title_list: 'Atlanta',
          },
          {
            title_list: 'Los Angeles',
          },
          {
            title_list: 'San Diego',
          },
          {
            title_list: 'Queens',
          },
          {
            title_list: 'Toronto',
          },
          {
            title_list: 'Las Vegas',
          },
          {
            title_list: 'Vancouver',
          },
          {
            title_list: 'Chicago',
          },
          {
            title_list: 'San Francisco',
          },
          {
            title_list: 'Miami',
          },
          {
            title_list: 'Houston',
          },
          {
            title_list: 'Seattle',
          },
          {
            title_list: 'San Antonio',
          },
        ],
      },
      {
        title_tab: 'Top Cuisines',
        list_titles: [
          {
            title_list: 'Pizza',
          },
          {
            title_list: 'Lunch',
          },
          {
            title_list: 'Asian Food',
          },
          {
            title_list: 'Chinese Food',
          },
          {
            title_list: 'Seafood',
          },
          {
            title_list: 'Italian Food',
          },
          {
            title_list: 'Sushi',
          },
          {
            title_list: 'Indian Food',
          },
          {
            title_list: 'Vegan Food',
          },
          {
            title_list: 'Cafe',
          },
          {
            title_list: 'Dessert',
          },
          {
            title_list: 'Sandwiches',
          },
          {
            title_list: 'Burgers',
          },
          {
            title_list: 'Restaurants',
          },
        ],
      },
      {
        title_tab: 'Top Chains',
        list_titles: [
          {
            title_list: "Raising Cane's",
          },
          {
            title_list: 'Subway',
          },
          {
            title_list: "Jersey Mike's",
          },
          {
            title_list: 'Starbucks',
          },
          {
            title_list: 'Buffalo Wild Wings',
          },
          {
            title_list: 'KFC',
          },
          {
            title_list: 'Chick-fil-A',
          },
          {
            title_list: 'Chipotle',
          },
          {
            title_list: 'The Cheesecake Facto',
          },
          {
            title_list: 'Taco Bell',
          },
          {
            title_list: 'Panera Bread',
          },
          {
            title_list: 'Panda Express',
          },
          {
            title_list: "McDonald's",
          },
          {
            title_list: "Wendy's",
          },
          {
            title_list: 'Burger King',
          },
        ],
      },
    ],
  },
};
