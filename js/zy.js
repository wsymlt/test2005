
$(function(){
   // 轮播图区域商品分类导航部分效果
$('.category-item>a').mouseover(function () {
    $(this).next().css('display', 'block')
})

$('.category-item').mouseout(function () {
    $('.category-children').css('display', 'none')
})

$('.category-children').mouseover(function () {
    $(this).css('display', 'block');
})

$('.category-children').mouseout(function () {
    $(this).css('display', 'none');
})

})


// 主页面(index)倒计时效果
window.onload=function(){
  // 1 获取当前时间距离格林威治时间的毫秒数
var d = new Date();
// 2 获取当前时间的小时+5小时为例作为倒计时的总数
d.setHours(d.getHours() + 5); // 得到的是当前时间的小时+5
// console.log(t)
// 3 
function cutDown() {
    var t = d.getTime() - Date.now();
    // console.log(t)

    // 将这个时间(t)转换为小时的格式并返回出去
    return {
        hours: parseInt(t / 1000 / 60 / 60),
        minutes: parseInt(t / 1000 / 60 % 60),
        seconds: parseInt(t / 1000 % 60)
    }
}


// 5 获取页面相关元素(使用jquery就省略了，jquery可以直接获取dom节点)

// 8 倒计时
setInterval(function () {
    renderCutDown()
}, 1000);

// 6 渲染倒计时效果到页面上
function renderCutDown() {
    // 用一个变量来存储上面的cutDown函数的结果(得到的结果是对象格式的)
    var res = cutDown();
    // console.log(res);
    // 将结果放到对应的页面的标签内
    $('.h').html(addZero(res.hours));
    // console.log(addZero(res.hours))
    $('.m').html(addZero(res.minutes));
    $('.s').html(addZero(res.seconds));
}

// 7 判断是否需要+0(就是05:00:00这种格式)
function addZero(num) {
    if (num < 10) {
        return num = '0' + num; // 注意要加引号，不然两个数字相加的话即使数学运算
    } else {
        return num;
    }
}

renderCutDown();
// 主轮播图效果
var mySwiper = new Swiper('.swiper-container', {
    // 如果需要自动轮播
    autoplay: true,
    autoplay: {
        disableOnInteraction: false,
        delay: 2000,
        waitForTransition: false,

    },

    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要小圆点
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        shortSwipes: false,
    },

    // 如果需要左右箭头
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    //默认true，阻止
    loop: true,
})

mySwiper.pagination.$el.addClass('.my-bullet-active'); //为分页器增加样式

//鼠标覆盖停止自动切换
mySwiper.el.onmouseover = function () {
    mySwiper.autoplay.stop();
}

//鼠标离开开始自动切换
mySwiper.el.onmouseout = function () {
    mySwiper.autoplay.start();
}

//鼠标滑过pagination控制swiper切换
for (i = 0; i < mySwiper.pagination.bullets.length; i++) {
    mySwiper.pagination.bullets[i].onmouseover = function () {
        this.click();
    };
}


}
