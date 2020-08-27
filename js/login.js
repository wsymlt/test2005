// 登录页面效果

// 1 底部链接变色
$('.login-link a').mouseover(function () {
    $(this).css({
        color: '#333'
    })
})

$('.login-link a').mouseout(function () {
    $('.active').siblings().css({
        color: '#757575'
    })
})

// 登录界面切换效果
$('.pwd').click(function () {
    $('.login-main').css({
        display: 'block'
    })

    $('.login-qrcode').css({
        display: 'none'
    })

    $(this).addClass('navtab-link-now')
        .siblings()
        .removeClass('navtab-link-now')
})

$('.qr').click(function () {
    $('.login-qrcode').css({
        display: 'block'
    })
    $('.login-main').css({
        display: 'none'
    })
    $(this).addClass('navtab-link-now')
        .siblings()
        .removeClass('navtab-link-now')
})



// 实现登录功能

$('.sub').click(function () {
    $.ajax({
        method: 'post',
        url: '../server/login.php',
        dataType: 'json',
        data: {
            username: $('.un').val(),
            password: $('.pw').val()
        },
        success: function (data) {
            if (data.code == 1) {
                // 表示成功
                // 把用户名存入本地存储
                localStorage.setItem('un', data.data.username);
                // 跳转页面
                // alert('3秒后跳转首页');
                // setTimeout(time, 5000);
                location.href = "../pages/cart.html";
            } else {
                alert(data.msg);
            }
        }
    })

});

// function time() {
//     location.href = "../html/cart.html";
// }