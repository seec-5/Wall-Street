let arr = [
        {
                type: "img",
                src: "../travel/img/T8_01.png",
                title: "你的第一堂入门课",
                cont: [{
                        title: "和你的学习顾问一起参加入门课",
                        content: "我们的客户服务助理将在学习中心欢迎你，安排你和学习顾问面谈。学习顾问将会帮助你制定学习规划。"
                },
                {
                        title: "和你的学习顾问一起参加入门课",
                        content: "我们的客户服务助理将在学习中心欢迎你，安排你和学习顾问面谈。学习顾问将会帮助你制定学习规划。"
                }
                ]
        },
        {
                type: "img",
                src: "../travel/img/T8_02.png",
                title: "新学员讨论会",
                cont: [{
                        title: "你会更多了解学习中心和华尔街英语的“多元法®”学习体系",
                        content: "在充满乐趣的活动中，你的学习顾问和服务经理会把你介绍给学习中心的教育团队，他们将在你随后的学习旅程中提供全程支持与指导。"
                },
                {
                        title: "和你的学习顾问一起参加入门课",
                        content: "我们的客户服务助理将在学习中心欢迎你，安排你和学习顾问面谈。学习顾问将会帮助你制定学习规划。"
                }
                ]
        },
        {
                type: "vudio",
                src: "../travel/vudio/1.mp4",
                title: "使用华尔街英语电子互动学生手册开始学习",
                cont: [{
                        title: "",
                        content: "在我们的电子互动学生手册上，你可以使用各种各样的在线学习材料，强化阅读和写作技巧、掌握关键语法点，随时随地进行有针对性的学习。"
                }
                ]
        },
        {
                type: "img",
                src: "../travel/img/T8_03.png",
                title: "欢迎来到英语角",
                cont: [{
                        title: "和你的学习顾问一起参加入门课",
                        content: "我们的客户服务助理将在学习中心欢迎你，安排你和学习顾问面谈。学习顾问将会帮助你制定学习规划。"
                }
                ]
        },
        {
                type: "vudio",
                src: "../travel/vudio/1.mp4",
                title: "你的第一节外教小班辅导课",
                cont: [{
                        title: "与外教老师见面",
                        content: "华尔街英语的外教小班辅导课非常重要。通过外教带领的各种互动活动，可以加强巩固你在多媒体部分学习到的重点同时得到许多有助于你实现英语学习目标的有益建议。"
                },
                {
                        title: "和你的学习顾问一起参加入门课",
                        content: "我们的客户服务助理将在学习中心欢迎你，安排你和学习顾问面谈。学习顾问将会帮助你制定学习规划。"
                }
                ]
        },
        {
                type: "img",
                src: "../travel/img/T8_04.png",
                title: "参加外教补充课",
                cont: [{
                        title: "和你的学习顾问一起参加入门课",
                        content: "我们的客户服务助理将在学习中心欢迎你，安排你和学习顾问面谈。学习顾问将会帮助你制定学习规划。"
                }
                ]
        },
        {
                type: "vudio",
                src: "../travel/vudio/1.mp4",
                title: "你的第一堂入门课",
                cont: [{
                        title: "和你的学习顾问一起参加入门课",
                        content: "我们的客户服务助理将在学习中心欢迎你，安排你和学习顾问面谈。学习顾问将会帮助你制定学习规划。"
                },
                {
                        title: "和你的学习顾问一起参加入门课",
                        content: "我们的客户服务助理将在学习中心欢迎你，安排你和学习顾问面谈。学习顾问将会帮助你制定学习规划。"
                }
                ]
        },
        {
                type: "img",
                src: "../travel/img/learn-bg-bot.png",
                title: "课程回顾",
                cont: [{
                        title: "",
                        content: "课程结束后，你将再次与你的学习顾问和课程顾问见面，以确保你经历了一次愉快的学习之旅！"
                }
                ]
        }
]
$(".head").load("/Wall-Street/pages/home/Navigation.html")
for(let i in arr){
        if(i%2==0){

        $(`<div class="arc ${'arc'+i}">${i-0+1}</div>`).appendTo($(".travel-content-line"))
        $("body").find(".arc").eq(i).css({
                'position':"absolute",
                'top':i*470+"px"
        })
}else{
        $(`<div class="arc active ${'arc'+i}">${i-0+1}</div>`).appendTo($(".travel-content-line"))
        $("body").find(".arc").eq(i).css({
                'position':"absolute",
                'top':i*470+"px"
        })   
}

        $(`<div class="dot"><div></div></div>`).appendTo($(".travel-content-line"))
       $("body").find(".dot").eq(i).css({
                'position':"absolute",
                'top':i*470+"px"
        }).addClass("dot"+i)

       
}
arr.forEach((item,i)=>{
        if(i%2==0){
                $(`<div class="travel-conten-item">
                <div class="travel-content-left">
                    <img src="${item.src}" style="display:${item.type=="img"?"block":"none"}" alt="">
                    <video src="${item.src}" style="display:${item.type!="img"?"block":"none"}" controls></video>
                </div>
                <div class="travel-content-right">
                    <h2>${item.title}</h2>
                    
                </div>
            </div>
            `).appendTo($(".travel-content"))
            for(let x in item.cont){
        $(`<div class="texts">
        <div>${item.cont[x].title}</div>
        <div>${item.cont[x].content}</div>
        </div>`).appendTo($(".travel-content-right").eq(i))
            }
              }else{
                $(` <div class="travel-conten-item child">
                <div class="travel-content-right">
                    <h2>${item.title}</h2>
                </div>
                <div class="travel-content-left">
                <img src="${item.src}" style="display:${item.type=="img"?"block":"none"}" alt="">
                <video src="${item.src}" style="display:${!item.type=="img"?"block":"none"}"></video>
                </div>
            </div>
            `).appendTo($(".travel-content"))  
            for(let x in item.cont){
                $(`<div class="texts">
                <div>${item.cont[x].title}</div>
                <div>${item.cont[x].content}</div>
                </div>`).appendTo($(".travel-content-right").eq(i))
             
                    }
              }
})


$(window).scroll((e) => {
        let sctop=$(this).scrollTop() - 300
        let scarr=[]
        let index=0
        let index2=0
        $(".travel-content-line-active").css({ height:  sctop+ "px" })
        let length=arr.length
        if(sctop<=0){
                $("body").find(".dot").removeClass("active")
                return
        }
        for(let i in arr){
        if(sctop>=i*470){
                index++
                scarr.push(index)
                fn(scarr)
        }else if(sctop<scarr.length-1*475){
                if(index==0){
                 index=0
                 scarr=[]
                 return
                }
                scarr.splice(index-1,1)
                index--
                fn(scarr)
        }
}
console.log(scarr)

});
let fn=(scarr)=>{
        
        for(let i in scarr){
                console.log(i)
        $("body").find(".dot").removeClass("active")
       
        $("body").find(".dot").eq(i).addClass("active")
}
}