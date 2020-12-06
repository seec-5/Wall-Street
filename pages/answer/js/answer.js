let arr=[{
    title:"我的课程",
    texts:["课程预定指导1","课程预定指导2","课程预定指导3","课程预定指导4","课程预定指导5","课程预定指导6","课程预定指导7","课程预定指导8","课程预定指导9","课程预定指导10"]
},
{
    title:"我的学习系统",
    texts:["如何取消订单1","如何取消订单","如何取消订单","如何取消订单","如何取消订单","如何取消订单","如何取消订单","如何取消订单","如何取消订单","如何取消订单"]
},
{
    title:"我的课程",
    texts:["课程预定指导1","课程预定指导2","课程预定指导3","课程预定指导4","课程预定指导5","课程预定指导6","课程预定指导7","课程预定指导8","课程预定指导9","课程预定指导10"]
},
{
    title:"我的课程",
    texts:["课程预定指导1","课程预定指导2","课程预定指导3","课程预定指导4","课程预定指导5","课程预定指导6","课程预定指导7","课程预定指导8","课程预定指导9","课程预定指导10"]
},
{
    title:"我的课程",
    texts:["课程预定指导1","课程预定指导2","课程预定指导3","课程预定指导4","课程预定指导5","课程预定指导6","课程预定指导7","课程预定指导8","课程预定指导9","课程预定指导10"]
},
,
{
    title:"我的课程",
    texts:["课程预定指导1","课程预定指导2","课程预定指导3","课程预定指导4","课程预定指导5","课程预定指导6","课程预定指导7","课程预定指导8","课程预定指导9","课程预定指导10"]
}]


// $(".answer-cont-box-left ul").append(``)
var textindex=0
arr.forEach((item,index)=>{
    $(`<li>${item.title}</li>`).appendTo($(".answer-cont-box-left ul"))
    $(".answer-cont-box-left ul").find("li")
    
    $(`<option value="${index}" id="${index}">${item.title}</option>`).appendTo($(".answer-ipt-left select"))
    if(textindex==index){
        $(".answer-cont-box-rigt ul").html(``)
            item.texts.forEach((item,indexs)=>{
                $(`<li><span>${indexs+1}</span> ${item}</li>`).appendTo($(".answer-cont-box-rigt ul"))
            })
        }
        
    
})

console.log($(".answer-cont-box-left ul").find('li:first').addClass("active"))
function textfn(arr){
    arr.forEach((item,indexs)=>{
        $(`<li><span>${indexs+1}</span> ${item}</li>`).appendTo($(".answer-cont-box-rigt ul"))
        
    })
}
$(`   <div class="top-crumbs">
<p>首页</p>
<p>常见问题解答</p>
</div> 
<h2 class="ason-faq">常见问题解答</h2>
`).prependTo($(".answer-box"))
    $(`  <div class="ipt">
    <span class=" glyphicon glyphicon-search"></span>
    <input type="text" placeholder="请输入关键字">
    <button>搜索</button>
</div>`).prependTo($(".answer-box .answer-ipt-left"))
$(".answer-cont-box-left ul").on("click","li",function(){
    console.log($(this).index())
    console.log(arr[2])

    textindex=$(this).index()
    $(".answer-cont-box-rigt ul").html(``)

    textfn(arr[textindex].texts)
    console.log($(".answer-ipt-left .sele select").val(textindex))
})
$(".answer-ipt-left .sele select").on("input",function(){
    
    console.log($(this).val())
    textfn(arr[$(this).val()].texts)
})
$(".answer-cont-box-rigt ul").on("click","li",function(){
    location.href="answer-item.html"
})
$(".answer-cont-box-left ul").on("click","li",function(){
    $(this).addClass("active").siblings().removeClass("active")
})