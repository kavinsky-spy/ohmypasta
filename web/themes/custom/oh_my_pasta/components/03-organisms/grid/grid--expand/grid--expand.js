/**
 * @file Expandable Grid JS
 *
 * JS Behaviors for handling expandable grids (i.e Services)
 */
Drupal.behaviors.expandGrid = {
  attach(context) {
    const grids = context.querySelectorAll('.grid--expand');

    // If no expandable grids exist, finish the execution.
    if (grids.length === 0) {
      return;
    }

    grids.forEach((grid) => {
      if (grid.dataset.jsApplied) {
        return;
      }

      // Setting data attribute to avoid repeated JS calls and CSS selector checking.
      grid.dataset.jsApplied = true;

      // Add click listener to the expand button
      const expand = grid.querySelector('.js-grid-expand');
      if (expand) {
        expand.addEventListener('click', () => {
          grid.classList.toggle('is-expanded');
        });
      }
    });
  },
};
