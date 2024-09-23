/**
 * @file
 * A JavaScript file containing the horizontal mini-hub mobile behaviour
 *
 */
Drupal.behaviors.horizontalMiniHub = {
  attach(context) {
    const minihub = context.querySelector('.js-minihub');

    // Finish the execution if the minihub is not in context or if it has already been processed.
    if (!minihub || minihub.dataset.jsApplied) {
      return;
    }

    // Get the toggle and add the behaviour.
    const toggle = minihub.querySelector('.js-minihub-toggle');

    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isExpanded);
      minihub.classList.toggle('is-open');
    });
  },
};
