/**
 * @file Accordion JS
 *
 * JS Behaviors for toggling accordion content.
 */
Drupal.behaviors.Accordion = {
  attach(context) {
    const accordions = context.querySelectorAll('.js-accordion');

    // If there are no accordions in the context, finish the execution.
    if (!accordions.length) {
      return;
    }

    // Loop over all the accordion objects.
    accordions.forEach((accordion) => {
      const heading = accordion.querySelector('.js-accordion-heading');
      const content = accordion.querySelector('.js-accordion-content');

      // If there is no heading, content or the JS is already applied, finish the execution.
      if (!heading || !content || accordion.dataset.jsApplied) {
        return;
      }

      accordion.dataset.jsApplied = true;

      // Add aria-expanded="false" to the button.
      heading.querySelector('button').setAttribute('aria-expanded', 'false');

      // Click handler for the accordions.
      const handleClick = (e) => {
        const target = e.currentTarget;
        const button = target.querySelector('button');
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !isExpanded);

        if (!isExpanded) {
          heading.classList.add('is-active');
          accordion.classList.add('is-open');
        } else {
          heading.classList.remove('is-active');
          accordion.classList.remove('is-open');
        }
      };

      // Adds the click handler to the accordion.
      heading.addEventListener('click', handleClick);
    });
  },
};
