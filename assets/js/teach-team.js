var lqScrollWrapper = $('.lq-scroll-wrapper')[0]
var bs = new BScroll(lqScrollWrapper,{
	scrollX:true,
	probeType:3,
})
// console.log(bs.x)
bs.on('scroll', (position) => {
	console.log(position.x)
		if(position.x<-674){
			$('.arrow-right').css({
				display:'none'
			})
			$('.arrow-left').css({
				display:'block'
			})
		}
		if(position.x>0){
			$('.arrow-right').css({
				display:'block'
			})
			$('.arrow-left').css({
				display:'none'
			})
		}
  })
// console.log(scrollToElement)
$('.arrow-right').on('click',function(){
	$('.lq-scroll-container').css('left','-70%')
	$(this).css('display','none')
	$('.arrow-left').css('display','block')
})
$('.arrow-left').css('display','none')
$('.arrow-left').on('click',function(){
	$('.lq-scroll-container').css('left','0')
	$(this).css('display','none')
	$('.arrow-right').css('display','block')
})