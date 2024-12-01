/**
 * @file Tabs Listing JS
 *
 * JS Behaviors for handling the tabs functionality.
 */
Drupal.behaviors.tabsListing = {
  attach(context) {
    const tabsGroup = context.querySelector('.tabs-listing__tabs-group');
    const listGroup = context.querySelector('.tabs-listing__list-group');

    if (tabsGroup && listGroup) {
      // Add click event to all tab items
      tabsGroup.querySelectorAll('.table-item').forEach((tab) => {
        tab.addEventListener('click', function initiateTabs() {
          const tabId = this.getAttribute('data-tab-id');

          tabsGroup.querySelectorAll('.table-item').forEach((item) => {
            item.classList.remove('active');
          });
          this.classList.add('active');

          // Show the corresponding list and hide others
          listGroup.querySelectorAll('.tab-list').forEach((list) => {
            if (list.getAttribute('data-tab-id') === tabId) {
              list.style.display = 'flex';
            } else {
              list.style.display = 'none';
            }
          });
        });
      });

      const firstTab = tabsGroup.querySelector('.table-item[data-tab-id="1"]');
      if (firstTab) {
        firstTab.click();
      }
    }
  },
};
