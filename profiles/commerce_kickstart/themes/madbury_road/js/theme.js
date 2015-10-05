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
  Drupal.behaviors.madburyRoad = {
    attach: function (context, settings) {
      svgToPng();
      breadcrumbify();
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

  $('#shippingBtn').click(function(e) { 
    var zipsTotal = $('#block-views-zip-codes-block').find('p').text();
    var zipsInput = $('.shipping-calculator').find('input').val();
    var zipsArray = zipsTotal.split(',');

    zipsArray.every(function(val) {
      if (val === zipsInput) {
        alert('FREE SHIPPING');
        return false;
      } else {
        alert('$250 DOLLAR SHIPPING');
        return false;
      }
    });
    e.preventDefault();
  });

  $('.js--mobile-show').click(function(e) {
    $('.primary--header').find('ul').toggleClass('open-nav');
    $('.primary--header').toggleClass('mobile-open');
    e.preventDefault();
  });

  $('.cloud-zoom-gallery-thumbs').find('a').first().addClass('active');

  $(window).scroll(function(e) {
    var scrolled = $(window).scrollTop();

    if ($(window).width() > 992) {
      if(headerOffset <= scrolled) {
       $('#primaryHeader').addClass('header--affix');
       $('.top-bar').addClass('padding-bottom');
      } else {
       $('#primaryHeader').removeClass('header--affix');
       $('.top-bar').removeClass('padding-bottom');
      }
    }

    if($('.jumbotron__banner').length > 0) {
       moveSlide($('.jumbotron__banner'), 0.2, 1)
    }
  });

  if ($('.page-checkout').length > 0) {

    $('.checkout-continue').click(function(event) {
      /* Act on the event */

      var zipsTotal = $('#block-views-zip-codes-block').find('p').text();
      var zipsInput = $('.postal-code').val();
      var zipsArray = zipsTotal.split(',');
      var $couponField = $('.form-item-commerce-coupon-coupon-code').find('input');

      zipsArray.every(function(val) {
        if (val === zipsInput) {
          $couponField.val('Q5zvS+nPJ~x+T*Pa');
          return false;
          ;
        } else {
          $couponField.val('standard');
          return false;
        }
      });

   // this doesnt work   
   // // nevermind this works now, keep your eyes peeled, fam
      setTimeout(function () {
        $('#commerce-checkout-form-checkout').submit();
      },500);
      event.preventDefault();
    });
  }

  if ($('.additional-item').length > 0) {
    var itemFamilyHeader = $('.product--description .field-name-title-field').first().text().trim().toLowerCase();
    var itemFamily = itemFamilyHeader.substr(0, itemFamilyHeader.indexOf(" "));

    $('.additional-item .views-row a').each(function(index, el) {
      var $elem = $(this);
      var additionalItem = $(this).text();

      if (additionalItem.toLowerCase().indexOf(itemFamily.toLowerCase()) >= 0) {
      } else {
        $elem.closest('.views-row').remove();
      }

      if (additionalItem.toLowerCase().indexOf(itemFamilyHeader.toLowerCase()) >= 0) {
        $elem.closest('.views-row').remove();
      }
    });


    setTimeout(function () {
      $('.additional-item').find('input[type="text"]').val('0');
    }, 250);
  }

$('#edit-submit').mousedown(function(event) {

  var $additionalItemRows = $('.additional-item .views-row');

  $additionalItemRows.each(function(index, el) {
    var additionalToSubmitNum = $(this).find('input[type="text"]').val();


    if (additionalToSubmitNum > 0 && additionalToSubmitNum != undefined) {
      setTimeout(function() {
        $(this).closest('form').submit();
      }, 2000);
    } else {
      setTimeout(function() {
        window.location.href = '/cart';
      }, 1000);
    }

  });

  if  ($additionalItemRows.length <= 0) {
    setTimeout(function() {
      window.location.href = '/cart';
    }, 1000);
  }
});

  if ($('.cloud-zoom-gallery-thumbs').length > 0) {
    if ($('.cloud-zoom-gallery-thumbs a').length <= 1) {
      $('.cloud-zoom-gallery-thumbs').addClass('hidden');
    }
  }

  if ($('input[name="quantity"]').length) {
    var originalValue = Number($('.commerce-product-field-commerce-price .field-item').text().replace(/\D/g,''));
    $('input[name="quantity"]').keyup(function(event) {
      /* Act on the event */
      var currentPrice = Number($('.commerce-product-field-commerce-price .field-item').text().replace(/\D/g,''));
      var priceAddition = Number($(this).parent('.form-item').prev().prev().text().replace(/\D/g,''));

      if ($(this).val().length == 0) {
        var priceAdditionTotal = 0;
      } else  {
        var priceAdditionTotal = Number((priceAddition * $(this).val()) * 100);
      }

      if(($(this).is('#edit-quantity'))) {
        var priceAdditionTotal = 0;
      }

      var newPrice = originalValue + priceAdditionTotal;
      var newPriceTotal = '$'+ Number(newPrice) / 100+'.00';
      $('.commerce-product-field-commerce-price .field-item').text(newPriceTotal);
      
    });
  }

  if ($('.node-try-us-at-home-step').length) {
    var homeI = 1;
    $('.node-try-us-at-home-step').first().parent('.views-row').addClass('active');

    $('.node-try-us-at-home-step').each(function(index, el) {
      $(this).append('<a href="#" class="try-us-at-home-arrow" data-target="'+homeI+'">Next Step</a>');
      $(this).append('<span class="try-us-number">'+homeI+'</span>');
      homeI++;
    });

    $('.views-row-last .node-try-us-at-home-step').append('<a href="#" class="try-us-at-home-arrow__last">Back to Top</a>');

    $('.views-row-1 .try-us-at-home-arrow').click(function(event) {
      /* Act on the event */
      event.preventDefault();
      $('.view-try-us-at-home-block .view-content').animate({
        scrollTop: $(".views-row-2").position().top + 50,
      }, 500);



      $(this).addClass('fadeOut');
    });

    $('.views-row-2 .try-us-at-home-arrow').click(function(event) {
      /* Act on the event */
      event.preventDefault();
      $('.view-try-us-at-home-block .view-content').animate({
        scrollTop: $(".views-row-3").offset().top + 50
      }, 500);

      $(this).addClass('fadeOut');
      $('.try-us-at-home--footer').append('<a href="#" class="try-us-at-home-arrow__last">Back to Top</a>');

      $('.try-us-at-home-arrow__last').click(function(event) {
        /* Act on the event */
        event.preventDefault();
        $('.try-us-at-home-arrow').removeClass('fadeOut');
        $('.view-try-us-at-home-block .view-content').animate({
          scrollTop: $(".views-row-first").position().top,
        }, 500);
      });
    });


    $('.view-try-us-at-home-block').prepend('<div class="try-us-at-home--header"></div>');
    $('.view-try-us-at-home-block').append('<div class="try-us-at-home--footer"></div>');

  }


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



  function breadcrumbify() {
    var path = "";
    var href = document.location.href;
    var s = href.split("/");
    s[2] = 'Home';

    for (var i=2;i<(s.length-1);i++) {
    path+="<A HREF=\""+href.substring(0,href.indexOf("/"+s[i])+s[i].length+1)+"/\">"+s[i]+"</A>";
    }
    i=s.length-1;
    path+="<A HREF=\""+href.substring(0,href.indexOf(s[i])+s[i].length)+"\">"+s[i]+"</A>";

    $('.breadcrumb').html(path);
    $('.breadcrumb').find('a').first().attr('href', '/');
  }

}(jQuery));
