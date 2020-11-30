$(window).scroll((e)=>{ 
        console.log( $(this).scrollTop())
        $(".travel-content-line-active").css({height:$(this).scrollTop()-300+"px"})
});