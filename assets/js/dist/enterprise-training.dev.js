"use strict";

$('#a').load('/Wall-Street/pages/home/Navigation.html');
$('#footer').load('/Wall-Street/pages/wll-demo/foot.html');
$('.top-bottom div a').hover(function () {
  $(this).css({
    background: '#fff',
    color: '#000'
  });
}, function () {
  $(this).css({
    background: '',
    color: '#fff'
  });
});
var swiper = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
//# sourceMappingURL=enterprise-training.dev.js.map
