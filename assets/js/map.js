$('.selectCity').click(function(){
	$('.select-city .cities').css({
		display:'block'
	})
})
$('.cities li').hover(function(){
	$(this).addClass('active').siblings().removeClass('active')
	$('.cities li').eq(0).addClass('active')
},function(){
	$('.cities li').eq(0).addClass('active')
})
$('.cities .li').click(function(){
	var str = $(this).html()
	$('.my-city').html(str)
	$('.cities').css({
		display:'none'
	})
	$.ajax({
		url:'/Wall-Street/assets/json/mapData.json',
		type:'get',
		success:(data)=>{
			for(let i=0;i<data.data.length;i++){
				
			}
		}
	})
})
