$(function () {
    // 回到顶部功能
    $(window).scroll(function () {
        if ($(window).scrollTop() > 800) {
            $('.totop').css({
                visibility: 'visible',
            })
        } else {
            $('.totop').css({
                visibility: 'hidden',
            })
        }
    })

    $('.totop').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 500)
    })


    // topbar购物车下拉menu
    $('.car').on('mouseenter', function () {
        $('.cart-content').css('height', 100);
        $('.cart-content').html('<div>购物车中还没有任何商品，赶紧选购吧！</div>')
        $(this).css({
            color: '#ff6700'
        })
        $('.topbar-inner .car span').css({
            color: '#ff6700'
        })
    });

    $('.topbar-cart').on('mouseleave', function () {
        $('.cart-content').css('height', 0);
        $('.car').css({
            color: '#b0b0b0'
        })
        $('.topbar-inner .car span').css({
            color: '#b0b0b0'
        })
    });

    // logo换图
    $('.header-logo').mouseover(function () {
        $('.mi').stop().animate({
            left: 55,
        }, 500);
    })
    $('.header-logo').mouseout(function () {
        $('.mi').stop().animate({
            left: 0
        }, 500);
    });


    // 头部下拉menu展示
    $('.nav-items').mouseover(function () {
        $('.nav-items')
            .eq($(this).index())
            .find('.children-list')
            .stop()
            .animate({
                height: 229
            }, 500, 'linear')
        $(this)
            .find('.children-list')
            .addClass('children-active')
    })

    $('.nav-items').mouseout(function () {

        $('.nav-items')
            .eq($(this).index())
            .find('.children-list')
            .stop()
            .animate({
                height: 0,
            }, 500, 'linear')

        $(this)
            .find('.children-list')
            .removeClass('children-active')
    })



























    // 底部footer特效
    $('.wx').mouseover(function () {
        $('.follow img').css({
            display: 'block'
        })
    })

    $('.wx').mouseout(function () {
        $('.follow img').css({
            display: 'none'
        })
    })



})