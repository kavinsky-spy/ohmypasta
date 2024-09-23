/**
 * @file Carousel JS
 *
 * JS Behaviors for handling carousel functionality.
 */
(($) => {
  Drupal.behaviors.carousel = {
    attach(context) {
      const carousels = context.querySelectorAll('.carousel');

      // If no carousels exist, finish the execution.
      if (carousels.length === 0) {
        return;
      }

      carousels.forEach((carousel) => {
        // If JS has been processed, finish the execution.
        if (carousel.dataset.jsProcessed) {
          return;
        }

        // Get custom arrows and dots containers.
        const slides = carousel.querySelector('.carousel__slides');
        const controls = carousel.querySelector('.carousel__controls');
        const prevArrow = carousel.querySelector('.button--prev');
        const nextArrow = carousel.querySelector('.button--next');

        $(slides).slick({
          arrowsPlacement: 'afterSlides',
          appendArrows: controls,
          appendDots: controls,
          centerMode: true,
          centerPadding: '21%',
          dots: true,
          infinite: true,
          slidesToShow: 1,
          nextArrow,
          prevArrow,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                centerPadding: '5%',
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });

        // Get slide count and update it.
        const count = carousel.querySelector('.js-carousel-count');

        if (count) {
          $(slides).on(
            'init reInit afterChange',
            (event, slick, currentSlide) => {
              const index = (currentSlide || 0) + 1;
              count.textContent = `${index} ${Drupal.t('of')} ${
                slick.slideCount
              }`;
            },
          );
        }
      });
    },
  };
})(jQuery);
