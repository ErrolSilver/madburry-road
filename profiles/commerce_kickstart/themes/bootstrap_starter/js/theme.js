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

  $('.cloud-zoom-gallery-thumbs').find('a').first().addClass('active');

  $('.cloud-zoom-gallery-thumbs').find('a').click(function(e) {
    $(this).addClass('active');
    $('.cloud-zoom-gallery-thumbs').not($(this)).removeClass('active');
    e.preventDefault();
  });


  $('.js__open-menu').click(function(e) {
    $(this).toggleClass('open');
    $('.navigation--primary--off-canvas').toggleClass('open');
    $('body').toggleClass('open');
    e.preventDefault();
  });

  $('body').swipe({
    swipeLeft: function (event, direction, distance, duration, fingerCount) {
      $('.navigation--primary--off-canvas').removeClass('open');
      $('body').removeClass('open');
      $('.js__open-menu').removeClass('open');
    }
  });

  if ($('body').hasClass('logged-in')) {
    $('.menu--account .nav').find('a').each(function(index, el) {
      if ($(this).text() == 'Sign In') {
        $(this).text('Account');
      }
    });
  }

  // Sidebar menu accordion
  var $sidebarLinks = $('.menu--sidebar-nav .nav').find('a'),
    $sidebarTopLevel = $('.menu--sidebar-nav').find('.nav').not('.nav .nav');

    $sidebarTopLevel.find('li').not('.nav .nav li').addClass('closed');

  $sidebarLinks.click(function(e) {
    if ($(this).next().is('ul')) {
      $(this).parent('li').toggleClass('closed');
      e.preventDefault();
    }
  });

}(jQuery));

