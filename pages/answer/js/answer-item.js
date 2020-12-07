let res={
    text:"我想要重置登录密码，该怎么办？",
    conts:[
        "1. 请进入“我的旅程”选择最顶端用户昵称（用户头像）旁的“齿轮”图标按钮进入用户中心。",
        "2. 点击用户中心最底端“退出登录”按钮。",
        "3. 您将回到“华尔街英语”登录页面，点击“忘记密码”按钮，即可得到您的登录名并重置您的密码。"
    ]
}
$(".head").load("/Wall-Street/pages/home/Navigation.html")
$(`<div class="top-crumbs">
<p>首页</p>
<p>常见问题解答</p>
<p>问题详情</p>
</div> 
<h2 class="ason-faq">常见问题解答</h2>`).prependTo($(".answer-box"))
$(".answer-items-box").prepend($(`<h2>${res.text}</h2>`))
res.conts.forEach((item,index)=>{
    $(`<li>${item}</li>`).appendTo($(".answer-item-box ul"));
})
$(".answer-box").on("click",".annswer-btn",function(){
    location.href="answer.html"
})