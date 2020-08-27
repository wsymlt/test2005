$(function () {

    $.ajax({
        url: 'http://localhost/server/interface/addwq.php',
        dataType: 'json',
        success: function (res) {
            console.log(res);
        }
    })

    //查询并显示购物车
    function showCart() {
        $.ajax({
            url: '../server/interface/showlist.php',
            dataType: 'json',
            success: function (res) {
                console.log(res);
                $('.cart-container').html('');
                $.each(res.data, function (index, item) {
                    $('.cart-container').append(`<div class="product-box">
                    <div class="product-tit">
                        <ul class="list-header clearfix">
                            <li class="select li1"><input type="checkbox">全选</li>
                            <li class="li2 product-id">${item.product_id}</li>
                            <li class="li3">商品名称</li>
                            <li class="li4">单价</li>
                            <li class="li5">数量</li>
                            <li class="li6">小计</li>
                            <li class="li7">操作</li>
                        </ul>
                    </div>
                    <div class="product-mid clearfix">
                        <div class="li1"><input type="checkbox"></div>
                        <div class="li2"><a href="#"><img src="${item.product_img}" alt=""></a></div>
                        <div class="li3"><span>开放购买活动商品</span>${item.product_name}<em>抢购以支付为准，请尽快付款</em></div>
                        <div class="li4">${item.product_price}</div>
                        <div class="li5">
                            <div>
                                <a href="javascript:void(0);" class="down">－</a>
                                <input type="text" autocomplete="off" class="goods-num" value="${item.product_num}">
                                <a href="javascript:void(0);" class="up">＋</a>
                            </div>
                        </div>
                        <div class="li6"><span>${item.product_price}</span></div>
                        <div class="li7 delProduct">×</div>
                    </div>
                </div>
                <div class="sum-bar">
                    <div class="select-left">
                        <a href="#">继续购物</a>
                        <span>共 <i>1</i> 件商品，已选择 <i>0</i> 件</span>
                    </div>
                    <span>合计：<em>0</em>元</span>
                    <a href="javascript:;" class="btn-a">去结算</a>
                </div>`)
                })
            }
        })
    }
    showCart();


    // 删除商品
    $('.cart-container').on('click', '.delProduct', function () {
        var id = $('.product-id').html();
        $.ajax({
            url: "../server/interface/delwq.php",
            data: {
                id: id
            },
            dataType: 'json',
            succcess: function (res) {
                if (res.code) {
                    showCart()
                }
            }
        })
    })


    // 增加商品
    $('.cart-container').on('click', '.up', function () {
        $.ajax({
            url: '../server/interface/updatewq.php',
            dataType: 'json',
            data: {
                type: 'add',
                id: '01',
            },
            success: function (res) {
                if (res.code) {
                    alert('商品增加成功');
                }
            }
        })
    })


    // 减少商品
    $('.cart-container').on('click', '.down', function () {
        $.ajax({
            url: '../server/interface/updatewq.php',
            dataType: 'json',
            data: {
                type: 'cut',
                id: '01'
            },
            success: function (res) {
                if (res.code) {
                    alert('商品减少成功');
                    reLoad();
                }
            }
        })
    })



    function reLoad() {
        location.reload();
    }

})