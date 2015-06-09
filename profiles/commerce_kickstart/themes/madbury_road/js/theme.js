(function ($) {
  /**
   * Swap out svg files for PNGs on unsupporting devices. Modrnizr determines
   * what an unsupporting device is by adding the .no-svg class to the html
   * tag.
   */
  function svgToPng() {
    $('.no-svg .js__svg-image').each(function() {
      var src = $(this).attr('src');
      src = src.replace("svg", "png");
      $(this).attr('src', src);
    });
  }

  /**
   * Stuff to run on resize.
   */
  $(window).resize(function() {
    var width = $(window).width();
    // Place functions to run here.
  });

  /**
   * Stuff to run on page load and ajax events.
   */
  Drupal.behaviors.bootstrapStarter = {
    attach: function (context, settings) {
      svgToPng();
      // Place functions to run here.
    }
  };

  var headerOffset = $('#primaryHeader').offset().top;

  $(window).scroll(function(e) {
     var scrolled = $(window).scrollTop();

     if(headerOffset <= scrolled) {
      $('#primaryHeader').addClass('header--affix');
      $('.top-bar').addClass('padding-bottom');
     } else {
      $('#primaryHeader').removeClass('header--affix');
      $('.top-bar').removeClass('padding-bottom');
     }
  });

}(jQuery));

