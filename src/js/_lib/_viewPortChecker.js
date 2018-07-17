

/**
 * @name initViewPortChecker
 * @description Detects if an element is in the viewport and adds a class to it
 */
function initViewPortChecker() {
  $(".viewport-hide-js").each(function(idx, el) {

    $(el).viewportChecker({
      classToAdd: 'viewport-show-js animated',
      classToAddForFullView: 'full-visible',
      classToRemove : 'viewport-hide-js',
      removeClassAfterAnimation: true,
      offset: 100,
      repeat: false,
      callbackFunction: function(elem, action) {

        $(elem).css({
          'animation-name' : ($(el).data('animation-name')) ? $(el).data('animation-name') + ", fadeIn" : 'slideInUp, fadeIn',
          'animation-delay' : $(el).data('animation-delay') || '0s',
          'animation-duration' : $(el).data('animation-duration') || '1s'
        });

      }
    });

  });
}
