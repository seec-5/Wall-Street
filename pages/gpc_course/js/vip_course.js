{
	$("[i18n]").i18n({
		defaultLang: "cn",
		filePath: "../i18n/", //注意！要配置好语言文件的正确路径
		filePrefix: "i18n_",
		fileSuffix: "",
		forever: true,
		callback: function () {
		}
	});
}

{
	// 爬楼层效果
	let scrollBox = document.querySelector(".scroll-left")
	let floorBox = document.querySelectorAll(".scroll-section")
	let floorBtn = document.querySelectorAll(".floor li")
	//获取所有div的offsetTop,也就是每个楼层距离顶部的距离
	let arr = []
	let current = 0 //保存当前滚动到的楼层
	// let t = obj.offsetTop;
	// while (obj = obj.offsetParent) {
	// 	t += obj.offsetTop;
	// }
	// return t;
	for (let i = 0; i < floorBox.length; i++) {
		let t = floorBox[i].offsetTop + window.innerHeight //获取每个楼层的offsetTop
		arr.push(t)//把获取到的offsetTop值插插入到数组中
	}
	console.log(arr);

	window.onscroll = function () {
		let st = document.body.scrollTop || document.documentElement.scrollTop

		// 吸顶效果
		if (st > arr[0] - 200) {
			scrollBox.style.position = "fixed"
			scrollBox.style.top = "100px"
		} else {
			scrollBox.style.position = "absolute"
			scrollBox.style.top = "0px"
		}

		// st = st + window.innerHeight / 2
		//楼层滚动到可视窗口中间时，相当于滚动到了此楼层
		for (let i = 0; i < arr.length; i++) {
			if (st > arr[i] && st < arr[i + 1]) {
				current = i
			}
			if (st > arr[arr.length - 1]) {
				current = arr.length - 1
			}
		}
		//按钮变色
		for (let i = 0; i < floorBtn.length; i++) {
			// floorBtn[i].style.color = "black"
			floorBtn[i].classList.remove("active");
		}
		// floorBtn[current].style.color = "red"
		console.log(current);
		console.log(floorBtn[current]);

		floorBtn[current - 1].classList.add("active");
	}

	// 循环绑定监听事件
	for (let i = 0; i < floorBtn.length; i++) {
		floorBtn[i].index = i
		floorBtn[i].onclick = function () {
			window.scrollTo({
				left: 0,
				top: arr[this.index],
				behavior: "smooth"
			})
		}
	}
}
