"use strict";

$('#navigation').load('../../pages/home/Navigation.html');
$('.province-wrapper input').focus(function () {
  $('.cities').css({
    display: 'block'
  });
});
$('.cities li').hover(function () {
  $(this).addClass('active').siblings().removeClass('active');
});
$('.cities .li').click(function () {
  var index = $(this).index() + 1;
  $('.province-wrapper input').val($(this).html());
  $('.cities').css({
    display: 'none'
  });
});
var i = 0;
$('.isAgree .checkbox').click(function () {
  i++;

  if (i % 2 == 0) {
    $('.select-checkbox').css({
      display: 'none'
    });
  } else {
    $('.select-checkbox').css({
      display: 'block'
    });
  }
});
//# sourceMappingURL=register.dev.js.map
