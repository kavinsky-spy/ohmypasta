/**
 * @file Header JS
 *
 * JS Behaviors for handling header functionality.
 */
Drupal.behaviors.mainHeader = {
  attach(context) {
    const header = context.querySelector('.js-header');

    // Finish the execution if the header is not in context or if the JS has already been applied.
    if (!header || header.dataset.jsApplied) {
      return;
    }

    const { body } = document;
    const toggle = header.querySelector('.js-header-toggle');
    const content = header.querySelector('.js-header-mobile');

    if (toggle && content) {
      let tabContext;
      const wrapper = toggle.parentElement;

      toggle.setAttribute('aria-expanded', false);
      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded');
        toggle.setAttribute('aria-expanded', expanded === 'false');
        toggle.classList.toggle('is-open');
        content.classList.toggle('is-open');
        body.classList.toggle('header-is-open');

        if (toggle.classList.contains('is-open')) {
          tabContext = Drupal.tabbingManager.constrain(wrapper, {
            trapFocus: true,
          });
        } else {
          tabContext.release();
        }
      });
    }

    // Close the mobile header when resizing to desktop.
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        Drupal.behaviors.mainHeader.closeMobileMenu(header);
      }
    });
  },

  /**
   * Closes the mobile menu.
   * @param {HTMLElement} header - The header element.
   */
  closeMobileMenu(header) {
    const toggle = header.querySelector('.js-header-toggle');
    if (toggle.classList.contains('is-open')) {
      toggle.click();
    }
  },
};
