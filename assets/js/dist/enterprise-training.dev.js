"use strict";

$('#a').load('../../pages/home/Navigation.html');
$('#footer').load('../../pages/wll-demo/foot.html');
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
//# sourceMappingURL=enterprise-training.dev.js.map
