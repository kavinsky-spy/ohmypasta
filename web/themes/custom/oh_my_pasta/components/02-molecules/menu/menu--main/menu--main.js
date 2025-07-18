/**
 * @file
 * A JavaScript file containing the main menu functionality (small/large screen)
 *
 */
Drupal.behaviors.mainMenu = {
  attach(context) {
    const menu = context.querySelector('.js-main-menu');
    const menuContainer = context.querySelector('.menu-container');
    const hamburger = context.querySelector('.js-menu-hamburger');

    // Finish the execution if the menu is not in context or if it has already been processed.
    if (!menu || menu.dataset.jsApplied) {
      return;
    }

    // Hamburger menu toggle
    if (hamburger && menuContainer) {
      const handleEscape = (event) => {
        if (
          event.key === 'Escape' &&
          hamburger.getAttribute('aria-expanded') === 'true'
        ) {
          hamburger.click();
        }
      };

      hamburger.addEventListener('click', () => {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        menuContainer.classList.toggle('is-open');

        if (!isExpanded) {
          document.body.style.overflow = 'hidden';
          document.addEventListener('keydown', handleEscape);
        } else {
          document.body.style.overflow = '';
          document.removeEventListener('keydown', handleEscape);
        }
      });

      // Close menu on resize to desktop
      window.addEventListener('resize', () => {
        if (
          window.innerWidth >= 1024 &&
          hamburger.getAttribute('aria-expanded') === 'true'
        ) {
          hamburger.click();
        }
      });
    }

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

    console.log(searchItem);

    searchItem.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const searchForm = document.querySelector('.search-block-form');
        const clonedFormId = 'search-block-form--cloned';
        let clonedForm = document.getElementById(clonedFormId);
        const target = searchItem[0];

        if (window.innerWidth > 1024) {
          searchForm.classList.toggle('visually-hidden');
          searchForm.querySelector('input').focus();
        } else {
          // If cloned form doesn't exist, create and insert it
          if (!clonedForm) {
            clonedForm = searchForm.cloneNode(true);
            clonedForm.id = clonedFormId;
            clonedForm.classList.add('visually-hidden');
            target.parentNode.insertBefore(clonedForm, target.nextSibling);
          }
          // Toggle visibility
          clonedForm.classList.toggle('visually-hidden');
          if (!clonedForm.classList.contains('visually-hidden')) {
            clonedForm.querySelector('input').focus();
          }
        }
      });
    });

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
