$('.top-bottom div a').hover(function(){
	$(this).css({
		background:'#fff',
		color:'#000'
	})
},function(){
	$(this).css({
		background:'',
		color:'#fff',
	})
})
// if($(window).innerWidth()>=768){
// 	$('.brand-circle').height($('.brand-circle').width())
// }