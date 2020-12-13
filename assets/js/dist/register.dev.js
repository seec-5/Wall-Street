"use strict";

$('#navigation').load('../../pages/home/Navigation.html');
$('#footer').load('../../pages/wll-demo/foot.html');
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
}); // $('.cities-city').html('')

var arr = [];
$('.province-wrapper input').focus(function () {
  $('.cities').css({
    display: 'block'
  });
});
$('.city-wrapper input').focus(function () {
  $('.cities-city').css({
    display: 'block'
  });
});
$.ajax({
  url: '/Wall-Street/assets/json/region.json',
  method: 'get',
  data: {},
  success: function success(data) {
    console.log(data.data);

    for (var i = 0; i < data.data.length; i++) {
      $("<li class='li'>".concat(data.data[i].province, "</li>")).appendTo($('.cities'));
    }

    $('.cities .li').click(function () {
      var index = $(this).index();
      arr = data.data[index].cities;
      console.log(arr);
      $('.province-wrapper input').val($(this).html());
      $('.cities').css({
        display: 'none'
      });
      $('.cities-city').html('');
      $('.cities-city').css({
        display: 'none'
      });

      for (var i = 0; i < arr.length; i++) {
        $('<li class="li">' + arr[i] + '</li>').appendTo($('.cities-city'));
      }

      $('.cities-city .li').click(function () {
        $('.city-wrapper input').val($(this).html());
        $('.cities-city').css({
          display: 'none'
        });
        $('.cities').css({
          display: 'none'
        });
      });
    });
  }
});
//# sourceMappingURL=register.dev.js.map
