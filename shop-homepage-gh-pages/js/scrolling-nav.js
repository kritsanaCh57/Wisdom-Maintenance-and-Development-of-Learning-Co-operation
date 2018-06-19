(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger').click(function() {
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 1000);
    return false;
  })

})(jQuery); // End of use strict
