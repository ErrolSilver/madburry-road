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
  var $headLinks = $('.navigation--primary').find('.nolink');

  $headLinks.click(function(event) {
    if(!$(this).next('ul').hasClass('open-nav')) {
      $headLinks.not($(this)).next('ul').removeClass('open-nav');
      $('.primary--header').removeClass('open-nav');
    }
    $(this).next('ul').toggleClass('open-nav');
    $('.primary--header').toggleClass('open-nav');
  });

  $(window).scroll(function(e) {
     var scrolled = $(window).scrollTop();

     if(headerOffset <= scrolled) {
      $('#primaryHeader').addClass('header--affix');
      $('.top-bar').addClass('padding-bottom');
     } else {
      $('#primaryHeader').removeClass('header--affix');
      $('.top-bar').removeClass('padding-bottom');
     }

     moveSlide($('.jumbotron__banner'), 0.2, 1)
  });


  function moveSlide(element, xspeed, zindex) {
    var scrolled = $(window).scrollTop(),
      boundryTop = element.closest('section').offset().top,
      boundryBottom = boundryTop + element.closest('section').outerHeight(),
      windowBottom = $(window).height(),
      inViewport = (boundryTop - scrolled) + windowBottom;

      element.css('z-index', zindex);

    //if (boundryTop <= scrolled && boundryBottom > scrolled) {
    if (boundryTop - scrolled <= windowBottom && inViewport > 0) {
      element.css({
        //transform: 'translateY(' + ((scrolled - element.offset().top) * xspeed) + 'px) translateX(0px)',
        'background-position': '0%' + ((scrolled - element.offset().top) * xspeed) + 'px',
      });

    } else {
      element.css({
        transform: 'translateY(0px) translateX(0px)',
      });
    }
  }

}(jQuery));
