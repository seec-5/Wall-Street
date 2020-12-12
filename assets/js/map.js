$('#navigation').load('../../pages/home/Navigation.html')
$('#footer').load('../../pages/wll-demo/foot.html')
$(function(){
	$('.selectCity').click(function() {
	$('.select-city .cities').css({
		display: 'block'
	})
})
$('.cities li').hover(function() {
	$(this).addClass('active').siblings().removeClass('active')
	// $('.cities li').eq(0).addClass('active')
}, function() {
	// $('.cities li').eq(0).addClass('active')
})
$('.cities .li').click(function() {
	var index = $(this).index() - 1
	var str = $(this).html()
	$('.my-city').html(str)
	$('.cities').css({
		display: 'none'
	})
	$.ajax({
		url: '../../assets/json/mapData.json',
		type: 'get',
		success: (data) => {
			console.log(index)
			var str1 = ''
			for (let i = 0; i < data.data.length; i++) {
				$('.info-phone').html(`<h4>联系电话</h4><p>${data.data[index].phone}</p>`)
				$('.map-top-right').html(
					`<img src="${data.data[index].imgSrc}" alt="">
						<div class="text">${data.data[index].text}</div>
					</div>`
				)
			}
			for (let j = 0; j < data.data[index].address.length; j++) {
				str1 += `<p>${data.data[index].address[j]}</p>`
				$('.info-arr').html(str1)
			}
			var map = new BMapGL.Map('map-wrapper');
			var marker1 = new BMapGL.Marker(new BMapGL.Point(data.data[index].lat, data.data[index].log));
map.addOverlay(marker1);
			map.centerAndZoom(new BMapGL.Point(data.data[index].lat, data.data[index].log), 12);
			var opts = {
				width: 230,
				height: 250,
				title: `<div style="color:#f00">${data.data[index].title}</div>`
			}
			var infoWindow = new BMapGL.InfoWindow(
				`<div class="info"  style='border-bottom:1px solid #ccc;font-size:14px;'>
													<h4 style='color:#00f'>地址</h4>
													<div class="info-arr">
													<p>${data.data[index].address[0]}</p>														<p>${data.data[index].address[1]}</p>
														<p>${data.data[index].address[2]}</p>
														<p>${data.data[index].address[3]}</p>
													</div>
													</div>
													<div class="info info-phone"  style='border-bottom:1px solid #ccc;font-size:14px;'>
														<h4 style='color:#00f'>联系电话</h4>
														<p>010-85185058</p>	
													</div>
												<div class="info" style='border-bottom:1px solid #ccc;font-size:14px;'>
													<h4 style='color:#00f'>工作时间</h4>
													<p>周一至周五 10:00 - 21:30</p>
													<p>周六至周日 10:00 - 19:00</p>
												</div>`,
				opts);
			map.openInfoWindow(infoWindow, map.getCenter());
			 
		}
	})
})
var map = new BMapGL.Map('map-wrapper');
map.centerAndZoom(new BMapGL.Point(116.395645038, 39.9299857781), 12);
var marker1 = new BMapGL.Marker(new BMapGL.Point(116.395645038, 39.9299857781));
map.addOverlay(marker1);
var opts = {
	width: 230,
	height: 250,
	title: `<div style="color:#f00">东方广场中心</div>`
}
var infoWindow = new BMapGL.InfoWindow(
	`<div class="info"  style='border-bottom:1px solid #ccc;font-size:14px;'>
										<h4 style='color:#00f'>地址</h4>
										<div class="info-arr">
											<p>北京市东城区</p>														<p>东长安街 1 号</p>
											<p>东方广场 W3 座 2 层</p>
											<p>邮编：100738</p>
											<p>（地铁 1 号线王府井站 A 出口）</p>
										</div>
										</div>
										<div class="info info-phone"  style='border-bottom:1px solid #ccc;font-size:14px;'>
											<h4 style='color:#00f'>联系电话</h4>
											<p>010-85185058</p>	
										</div>
									<div class="info" style='border-bottom:1px solid #ccc;font-size:14px;'>
										<h4 style='color:#00f'>工作时间</h4>
										<p>周一至周五 10:00 - 21:30</p>
										<p>周六至周日 10:00 - 19:00</p>
									</div>`,
	opts);
map.openInfoWindow(infoWindow, map.getCenter());

})