$('#navigation').load('../../pages/home/Navigation.html')
var lqScrollWrapper = $('.lq-scroll-wrapper')[0]

// var bs = new BScroll(lqScrollWrapper,{
// 	scrollX:true,
// 	probeType:3,
// 	freeScroll:true,
// 	eventPassthrough:"",
// 	momentum:true,
// 	momentumLimitTime:300
// })
// bs.refresh()
// bs.on('scroll',(pos)=>{
// 	if(pos.x<=-700){
// 		$('.arrow-left').css('display','block')
// 		$('.arrow-right').css('display','none')
// 	}
// 	if(pos.x>=0){
// 		$('.arrow-left').css('display','none')
// 		$('.arrow-right').css('display','block')
// 	}
	
// })
 
// if(parseInt($('.swiper-wrapper .swiper-slide').eq(4).offset().left)>=583){
// 	$('.arrow-right').css({
// 		display:'none'
// 	})
// 		$('.arrow-left').css({
// 		display:'block'
// 	})
// }
// if(parseInt($('.swiper-wrapper .swiper-slide').eq(0).offset().left)<=83){
// 	$('.arrow-right').css({
// 		display:'block'
// 	})
// 		$('.arrow-left').css({
// 		display:'none'
// 	})
// }
$('.arrow-left').click(function(){
	$('.swiper-wrapper').css({
		transform:"translateX(0%)",
		transition:'0.4s'
	})

	$(this).css({
		display:'none'
	})
		$('.arrow-right').css({
		display:'block'
	})
})
$('.arrow-right').click(function(){
	let w = $(window).innerWidth()/3*2
	$('.swiper-wrapper').css({
		transform:"translateX(-66.6%)",
		transition:'0.4s'
	})
	$(this).css({
		display:'none'
	})
		$('.arrow-left').css({
		display:'block'
	})
})
var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
			freeMode: true,
			activeIndex:0,
		on:{
				slideChange:function(swiper){
		if(swiper.activeIndex>=2){
			$('.arrow-right').css({
		display:'none'
	})
		$('.arrow-left').css({
		display:'block'
	})
		}else{
			$('.arrow-right').css({
		display:'block'
	})
		$('.arrow-left').css({
		display:'none'
	})
}
		}
		}
    });


