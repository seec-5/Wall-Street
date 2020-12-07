"use strict";

$('#navigation').load('../../pages/home/Navigation.html');
$('#footer').load('../../pages/wll-demo/foot.html');
$(function () {
  $('.selectCity').click(function () {
    $('.select-city .cities').css({
      display: 'block'
    });
  });
  $('.cities li').hover(function () {
    $(this).addClass('active').siblings().removeClass('active'); // $('.cities li').eq(0).addClass('active')
  }, function () {// $('.cities li').eq(0).addClass('active')
  });
  $('.cities .li').click(function () {
    var index = $(this).index() - 1;
    var str = $(this).html();
    $('.my-city').html(str);
    $('.cities').css({
      display: 'none'
    });
    $.ajax({
      url: '../../assets/json/mapData.json',
      type: 'get',
      success: function success(data) {
        console.log(index);
        var str1 = '';

        for (var i = 0; i < data.data.length; i++) {
          $('.info-phone').html("<h4>\u8054\u7CFB\u7535\u8BDD</h4><p>".concat(data.data[index].phone, "</p>"));
          $('.map-top-right').html("<img src=\"".concat(data.data[index].imgSrc, "\" alt=\"\">\n\t\t\t\t\t\t<div class=\"text\">").concat(data.data[index].text, "</div>\n\t\t\t\t\t</div>"));
        }

        for (var j = 0; j < data.data[index].address.length; j++) {
          str1 += "<p>".concat(data.data[index].address[j], "</p>");
          $('.info-arr').html(str1);
        }

        var map = new BMapGL.Map('map-wrapper');
        map.centerAndZoom(new BMapGL.Point(data.data[index].lat, data.data[index].log), 12);
        var opts = {
          width: 230,
          height: 250,
          title: "<div style=\"color:#f00\">".concat(data.data[index].title, "</div>")
        };
        var infoWindow = new BMapGL.InfoWindow("<div class=\"info\"  style='border-bottom:1px solid #ccc;font-size:14px;'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 style='color:#00f'>\u5730\u5740</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"info-arr\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>".concat(data.data[index].address[0], "</p>\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>").concat(data.data[index].address[1], "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>").concat(data.data[index].address[2], "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>").concat(data.data[index].address[3], "</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"info info-phone\"  style='border-bottom:1px solid #ccc;font-size:14px;'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 style='color:#00f'>\u8054\u7CFB\u7535\u8BDD</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>010-85185058</p>\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"info\" style='border-bottom:1px solid #ccc;font-size:14px;'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 style='color:#00f'>\u5DE5\u4F5C\u65F6\u95F4</h4>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\u5468\u4E00\u81F3\u5468\u4E94 10:00 - 21:30</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\u5468\u516D\u81F3\u5468\u65E5 10:00 - 19:00</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>"), opts);
        map.openInfoWindow(infoWindow, map.getCenter());
      }
    });
  });
  var map = new BMapGL.Map('map-wrapper');
  map.centerAndZoom(new BMapGL.Point(116.395645038, 39.9299857781), 12);
  var opts = {
    width: 230,
    height: 250,
    title: "<div style=\"color:#f00\">\u4E1C\u65B9\u5E7F\u573A\u4E2D\u5FC3</div>"
  };
  var infoWindow = new BMapGL.InfoWindow("<div class=\"info\"  style='border-bottom:1px solid #ccc;font-size:14px;'>\n\t\t\t\t\t\t\t\t\t\t<h4 style='color:#00f'>\u5730\u5740</h4>\n\t\t\t\t\t\t\t\t\t\t<div class=\"info-arr\">\n\t\t\t\t\t\t\t\t\t\t\t<p>\u5317\u4EAC\u5E02\u4E1C\u57CE\u533A</p>\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p>\u4E1C\u957F\u5B89\u8857 1 \u53F7</p>\n\t\t\t\t\t\t\t\t\t\t\t<p>\u4E1C\u65B9\u5E7F\u573A W3 \u5EA7 2 \u5C42</p>\n\t\t\t\t\t\t\t\t\t\t\t<p>\u90AE\u7F16\uFF1A100738</p>\n\t\t\t\t\t\t\t\t\t\t\t<p>\uFF08\u5730\u94C1 1 \u53F7\u7EBF\u738B\u5E9C\u4E95\u7AD9 A \u51FA\u53E3\uFF09</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"info info-phone\"  style='border-bottom:1px solid #ccc;font-size:14px;'>\n\t\t\t\t\t\t\t\t\t\t\t<h4 style='color:#00f'>\u8054\u7CFB\u7535\u8BDD</h4>\n\t\t\t\t\t\t\t\t\t\t\t<p>010-85185058</p>\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"info\" style='border-bottom:1px solid #ccc;font-size:14px;'>\n\t\t\t\t\t\t\t\t\t\t<h4 style='color:#00f'>\u5DE5\u4F5C\u65F6\u95F4</h4>\n\t\t\t\t\t\t\t\t\t\t<p>\u5468\u4E00\u81F3\u5468\u4E94 10:00 - 21:30</p>\n\t\t\t\t\t\t\t\t\t\t<p>\u5468\u516D\u81F3\u5468\u65E5 10:00 - 19:00</p>\n\t\t\t\t\t\t\t\t\t</div>", opts);
  map.openInfoWindow(infoWindow, map.getCenter());
});
//# sourceMappingURL=map.dev.js.map
