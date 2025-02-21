/**
 * @file
 * A JavaScript file containing the main menu functionality (small/large screen)
 *
 */
Drupal.behaviors.mainMenu = {
  attach(context) {
    const menu = context.querySelector('.js-main-menu');

    // Finish the execution if the menu is not in context or if it has already been processed.
    if (!menu || menu.dataset.jsApplied) {
      return;
    }

    let tabContext;
    const menuExpanders = menu.querySelectorAll('.js-menu-sub-expand');
    const searchItem = Array.from(menu.querySelectorAll('a')).filter(
      (item) =>
        item.textContent.trim() === 'Search' ||
        item.getAttribute('href') === '/search',
    );

    const homeItem = Array.from(menu.querySelectorAll('a')).filter(
      (item) =>
      item.textContent.trim() === 'Home' || item.getAttribute('href') === '/',
    );

    homeItem.forEach((item) => {
      item.parentElement.classList.add('home-menu-item');
    });

    searchItem.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const searchForm = document.querySelector('.search-block-form');
        searchForm.classList.toggle('visually-hidden');
        searchForm.querySelector('input').focus();
      });
    });

    // Add the required functionality to all submenus.
    if (menuExpanders.length > 0) {
      menuExpanders.forEach((menuExpander) => {
        const submenu = menuExpander.nextElementSibling;
        const parentItem = menuExpander.parentElement;
        const menuBack = submenu.querySelector('.js-menu-sub-back');

        // Submenu toggle listener for mobile / desktop.
        menuExpander.addEventListener('click', (e) => {
          e.preventDefault();
          const expander = e.currentTarget;
          const ariaExpanded = expander.getAttribute('aria-expanded');

          // Close all open submenus before toggling the current one.
          Drupal.behaviors.mainMenu.closeAllSubmenus(menu, submenu);

          expander.setAttribute('aria-expanded', ariaExpanded === 'false');
          submenu.classList.toggle('is-expanded');

          // Trap focus on mobile only since it has a way of closing the menu.
          if (window.innerWidth < 1024) {
            if (submenu.classList.contains('is-expanded')) {
              tabContext = Drupal.tabbingManager.constrain(submenu, {
                trapFocus: true,
              });
            } else {
              tabContext.release();
              menuExpander.focus();
            }
          }
        });

        // Submenu closing on desktop when tabbing outside it.
        parentItem.addEventListener('focusout', (event) => {
          event.stopPropagation();

          if (window.innerWidth >= 1024) {
            if (!submenu.contains(event.relatedTarget)) {
              Drupal.behaviors.mainMenu.closeAllSubmenus(menu);
            }
          }
        });

        // Submenu back button listener for mobile.
        menuBack.addEventListener('click', () => {
          menuExpander.setAttribute('aria-expanded', 'false');
          submenu.classList.remove('is-expanded');
          tabContext.release();
          menuExpander.focus();
        });
      });
    }

    // Close all mobile submenus when resizing to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        Drupal.behaviors.mainMenu.closeAllSubmenus(menu);
      }
    });
  },

  /**
   * Closes all open submenus.
   * @param {HTMLElement} menu - The menu element.
   * @param {HTMLElement} current - Optional current target to not close.
   */
  closeAllSubmenus(menu, current) {
    const openSubmenus = menu.querySelectorAll(
      '.menu--sub-wrapper.is-expanded',
    );

    if (openSubmenus.length > 0) {
      openSubmenus.forEach((submenu) => {
        // Avoid closing the current one you want to open.
        if (current && current === submenu) return;

        // Close the submenu.
        const toggle = submenu.previousElementSibling;
        toggle.click();
      });
    }
  },
};
