// 商品详情js
$(function () { // 入口函数(页面dom元素加载完成事件)

    // nav-bar 通栏效果实现
    $('.close').click(function () {
        $('.login-notice').css({
            display: 'none'
        })
    })

    $(window).scroll(function () {
        if ($('html').scrollTop() > 200) {
            $('.nav-bar-hidden').addClass('nav-fix')
        } else {
            $('.nav-bar-hidden').removeClass('nav-fix')
        }
    })

    // 选择模块的效果实现
    $('.color-list').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).children().addClass('active');
        $(this).siblings().children().removeClass('active')
    })




    // 加入购物车按钮功能实现(加入成功后跳转到购物车页面)

    // 增加商品
    $('.addToCart').click(function () {
        $.ajax({
            url: '../server/interface/addwq.php',
            data: {
                id: '01',
                img: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/T178EjBjVT1RXrhCrK.jpg?thumb=1&w=100&h=100',
                price: '9.9',
                num: 1,
                name: '彩虹7号电池（10粒装） 彩色'
            },
            dataType: 'json',
            success: function (res) {
                if (res.code) {
                    alert('商品加入成功');
                    location.href = "./cart.html";
                } else {
                    alert('商品加入失败');
                }
            }

        })

    })











})