$(".navbar-change").on("click",".list-four",function(){
	// console.log(1)
	$(".navbar-change").find(".show-navbar").hide();
	$(".navbar-change").find(".showbox").show();
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
						<li class="active"><a href="/Wall-Street/index.html">会员/学员</a></li>
						<li><a href="/Wall-Street/pages/home/enterprise-training.html">企业合作</a></li>
						<li><a href="/Wall-Street/pages/answer/answer.html">职业生涯</a></li>
					</ul>
					<ul class="nav-right">
						<li><a href="/Wall-Street/pages/home/map.html"><span><button type="submit" style="transform: translate(10px,8px);"></button></span>最近学习中心</a></li>
						<li><a href="/Wall-Street/pages/Wall Street English/English-index.html">关于华尔街英语</a></li>
						<li><a href="/Wall-Street/pages/home/register.html" style="color:#fff">新会员</a></li>
						<li><a href="/Wall-Street/pages/home/member-login.html">会员登陆</a></li>
						<li><a href="/Wall-Street/pages/gpc_course/html/student-access.html">学员通道</a></li>
						<li><button type="button">中</button> | <button type="button">EN</button></li>
					</ul>
				</div>`).appendTo($(".navigation"))
$(`<button type="button" class="last-btn"></button>
				<ul>
					<li class="last-included">
						<span>你选择华尔街英语是因为</span>
						<ol class="last-show">
							<li><a href="/Wall-Street/pages/wll-demo/weisha.html">为职业发展</a></li>
							<li><a href="/Wall-Street/pages/wll-demo/weisha.html">为职业发展</a></li>
							<li><a href="/Wall-Street/pages/wll-demo/weisha.html">为职业发展</a></li>
							<li><a href="/Wall-Street/pages/wll-demo/weisha.html">为职业发展</a></li>
							<li><a href="/Wall-Street/pages/wll-demo/weisha.html">为职业发展</a></li>
						</ol>
					</li>
					<li class="last-change"><span><a href="/Wall-Street/pages/gpc_course/html/vvip_course.html">课程</a></span></li>
					<li class="last-change"><span><a href="/Wall-Street/pages/travel/travel.html">学习之旅</a></span></li>
					<li class="last-change"><span><a href="/Wall-Street/pages/teaching team/index.html">优质师资</a></span></li>
					<li class="last-earmark">
						<span>最新消息</span>
						<ol class="last-exhibit">
							<li><a href="/Wall-Street/pages/journalism/xw-index.html">公司新闻</a></li>
							<li><a href="/Wall-Street/pages/journalism/xw-index.html">精彩活动</a></li>
						</ol>
					</li>
					<li class="last-change"><span><a href="/Wall-Street/pages/home/contact.html">联系我们</a></span></li>
					<li><span><a href="/Wall-Street/pages/wll-demo/active.html">免费体验</a></span></li>
				</ul>`).appendTo($('.navigation-last'))
$(`<div class="show-navbar">
				<div class="change-head"><img src="../../assets/img/logo-wse.jpg" alt=""></div>
				<div class="change-btn">
					<ul class="btn-list">
						<li><a href="/Wall-Street/pages/wll-demo/active.html">试听</a></li>
						<li class="contact"></li>
						<li class="contact"></li>
						<li class="list-four">菜单</li>
					</ul>
				</div>
			</div>
			<div class="showbox">
				<div class="show-head">
					<ul>
						<li>会员/学员</li>
						<li>企业合作</li>
						<li>职业生涯</li>
					</ul>
					<button type="button" class="show-close"></button>
				</div>
				<div class="show-headson">
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