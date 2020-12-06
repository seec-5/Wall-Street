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
 




$('.arrow-right').on('click',function(){
	$('.lq-scroll-container').css({'left':'-65%',transition:'0.4s'})
	$(this).css('display','none')
	// bs.off('scroll')
	$('.arrow-left').css('display','block')
})	
$('.arrow-left').css('display','none')
$('.arrow-left').on('click',function(){
	// bs.refresh()
	$('.lq-scroll-container').css({'left':'0',transition:'0.4s'})
	$(this).css('display','none')
	$('.arrow-right').css('display','block')
})
if(parseInt($('.lq-scroll-container').position().left===-700)){
	$('.arrow-left').css('display','block')
	$('.arrow-right').css('display','none')
}