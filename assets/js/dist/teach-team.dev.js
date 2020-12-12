"use strict";

$('#navigation').load('../../pages/home/Navigation.html');
$('#footer').load('../../pages/wll-demo/foot.html');
var lqScrollWrapper = $('.lq-scroll-wrapper')[0];
$('.arrow-left').click(function () {
  $('.swiper-wrapper').css({
    transform: "translateX(0%)",
    transition: '0.4s'
  });
  $(this).css({
    display: 'none'
  });
  $('.arrow-right').css({
    display: 'block'
  });
});
$('.arrow-right').click(function () {
  var w = $(window).innerWidth() / 3 * 2;
  $('.swiper-wrapper').css({
    transform: "translateX(-66.6%)",
    transition: '0.4s'
  });
  $(this).css({
    display: 'none'
  });
  $('.arrow-left').css({
    display: 'block'
  });
});
var swiper = new Swiper('.swiper-container-block', {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  activeIndex: 0,
  on: {
    slideChange: function slideChange(swiper) {
      if (swiper.activeIndex >= 2) {
        $('.arrow-right').css({
          display: 'none'
        });
        $('.arrow-left').css({
          display: 'block'
        });
      } else {
        $('.arrow-right').css({
          display: 'block'
        });
        $('.arrow-left').css({
          display: 'none'
        });
      }
    }
  }
});
var mySwiper = new Swiper('.swiper-container-hidden', {
  activeIndex: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  on: {
    slideChange: function slideChange(swiper) {
      if (swiper.activeIndex >= 4) {
        $('.swiper-container-hidden .swiper-button-next').css({
          'display': 'none'
        });
        $('.swiper-container-hidden .swiper-button-prev').css({
          'display': 'block'
        });
      } else {
        $('.swiper-container-hidden .swiper-button-prev').css({
          'display': 'block'
        });
        $('.swiper-container-hidden .swiper-button-next').css({
          'display': 'block'
        });
      }

      if (swiper.activeIndex <= 0) {
        $('.swiper-container-hidden .swiper-button-prev').css({
          'display': 'none'
        });
        $('.swiper-container-hidden .swiper-button-next').css({
          'display': 'block'
        });
      } else {
        $('.swiper-container-hidden .swiper-button-next').css({
          'display': 'block'
        });
        $('.swiper-container-hidden .swiper-button-prev').css({
          'display': 'block'
        });
      }
    }
  }
});
//# sourceMappingURL=teach-team.dev.js.map
