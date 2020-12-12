$(".navbar-change").on("click",".list-four",function(){
	// console.log(1)
	$(".navbar-change").find(".show-navbar").hide();
	$(".navbar-change").find(".showbox").show();
	$(".navigation-mask").show();
})
$(".navbar-change").on("click",".show-close",function(){
	$(".showbox").hide();
	$(".show-navbar").show();
})
$(window).on('scroll',function(e){
	// console.log(1)
	console.log($(this).scrollTop())
	if($(this).scrollTop()>=50){
		$(".navigation").addClass('show-active')
		$(".bigbox").addClass('big-show')
	}else{
		$(".navigation").removeClass('show-active')
		$(".bigbox").removeClass('big-show')
	}
	
})


$(`<div class="navbar">
					<ul class="nav-left">
						<li class="active">会员/学员</li>
						<li>企业合作</li>
						<li>职业生涯</li>
					</ul>
					<ul class="nav-right">
						<li><span><button type="submit" style="transform: translate(10px,8px);"></button></span>最近学习中心</li>
						<li>关于华尔街英语</li>
						<li>新会员</li>
						<li>会员登陆</li>
						<li>学员通道</li>
						<li><button type="button">中</button> | <button type="button">EN</button></li>
					</ul>
				</div>`).appendTo($(".navigation"))
$(`<button type="button" class="last-btn"></button>
				<ul>
					<li class="last-included">
						<span>你选择华尔街英语是因为</span>
						<ol class="last-show">
							<li>为职业发展</li>
							<li>为职业发展</li>
							<li>为职业发展</li>
							<li>为职业发展</li>
							<li>为职业发展</li>
						</ol>
					</li>
					<li class="last-change"><span>课程</span></li>
					<li class="last-change"><span>学习之旅</span></li>
					<li class="last-change"><span>优质师资</span></li>
					<li class="last-earmark">
						<span>最新消息</span>
						<ol class="last-exhibit">
							<li>公司新闻</li>
							<li>精彩活动</li>
						</ol>
					</li>
					<li class="last-change"><span>联系我们</span></li>
					<li><span>免费体验</span></li>
				</ul>`).appendTo($('.navigation-last'))
$(`<div class="show-navbar">
				<div class="change-head"><img src="../../assets/img/logo-wse.jpg" alt=""></div>
				<div class="change-btn">
					<ul class="btn-list">
						<li>试听</li>
						<li class="contact"></li>
						<li class="contact"></li>
						<li class="list-four">菜单</li>
					</ul>
				</div>
			</div>
			<div class="showbox ">
				<div class="show-head">
					<ul>
						<li>会员/学员</li>
						<li>企业合作</li>
						<li>职业生涯</li>
					</ul>
					<button type="button" class="show-close"></button>
				</div>
				<div class="show-headson animated fadeInRightBig">
					<ul class="headson-list">
						<li>首页</li>
						<li class="included">
							<span>首页</span>
							<ul class="son-children son-show">
								<li>未来伟业发招</li>
								<li>未来伟业发招</li>
								<li>未来伟业发招</li>
								<li>未来伟业发招</li>
								<li>未来伟业发招</li>
							</ul>
						</li>
						<li>首页</li>
						<li>首页</li>
						<li>首页</li>
						<li class="earmark">
							<span>首页</span>
							<ul class="son-children son-exhibit">
								<li>来呢</li>
								<li>欧锦</li>
							</ul>
						</li>
						<li>首页</li>
						<li>首页</li>
						<li>首页</li>
						<li>首页</li>
					</ul>
				</div>
			</div>`).appendTo($('.navbar-change'))
$(`<div class="side-flex">
				<div class="side-box obox">
					<button type="button"></button>
					<div class="side-show side-one">
						在线咨询
					</div>
				</div>
				<div class="side-box tbox">
					<button type="button"></button>
					<div class="side-show side-two">
						电话咨询
					</div>
				</div>
			</div>`).appendTo($('.public-side'))