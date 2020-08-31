$(document).ready(function() {
  var scrollLink = $('.scroll');
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top - 20;
      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
  });
  $('.arlo_tm_resize').click(function() {
    $('body').toggleClass('opened');
  });
  $('.menu  > ul').before('<div class="mobile-trigger"><i></i></div>');
  $('.menu  ul  li:has(ul)').addClass("submenu");
  $('.submenu > a').after('<div class="child-trigger"><i></i></div>');
  $('.mobile-trigger').click(function() {
    $(this).next('ul').slideToggle(250);
    $('body').toggleClass('mobile-open');
    $('.child-trigger').removeClass('child-open');
    $('li.submenu > ul').slideUp(250);
    return false;
  });
  // if ($(window).width() < 1200) {
  //   $(".cv-download-btn").insertAfter(".menu > ul > li:last-child");
  //   $(".menu-btns").insertAfter(".menu > ul > li:last-child");
  // }
  if ($(window).width() > 1200) {
    $('.demo').ripples({
      imageUrl: null,
      dropRadius: 20,
      perturbance: 0.04,
      interactive: true,
      crossOrigin: ''
    });
  }
})
$(function() {
  function progress() {
    $('.progress-bar').each(function() {
      $(this).find('.w_bar').animate({
        width: $(this).attr('data-max')
      }, {
        duration: 4000,
        step: function(now) {
          $(this).next().text(Math.floor(now) + '%');
        }
      });
    });
  };
  var flag = true;
  $(window).on('scroll', function() {
    var topof = $('.wrap').offset().top - $(window).height() / 1;
    if ($(window).scrollTop() > topof && flag) {
      flag = false;
      progress();
    };
  });
});
$(window).load(function() {
  var $all = $(".web-page-container");
  $all.isotope({
    filter: "*",
    animationOptions: {}
  });
  $(".links a").click(function() {
    $(".links ul li a").removeClass('active');
    $(this).addClass('active');
    var tab = $(this).attr('data-filter');
    $all.isotope({
      filter: tab,
      animationOption: {}
    });
  });
  if (window.matchMedia("(max-width: 767px)").matches) {
    $('.links label').click(function() {
      $(this).next('ul').slideToggle();
    });
    $('.links ul li a').click(function() {
      var text = $(this).text();
      $('.links label').text(text);
      $(this).parents('ul').slideToggle();
    });
  }
});


