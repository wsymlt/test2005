// // 注册功能的实现
// $(function () { // 入口函数
//     $('.sub').click(function () {
//         $.ajax({
//             method: 'post',
//             url: '../server/regist.php',
//             data: {
//                 username: $('#un').val(),
//                 password: $('#pw').val()
//             },
//             dataType: 'json',
//             success: function (data) {
//                 console.log(data)
//                 if (data.code == 1) {
//                     location.href = '../html/login.html';
//                 } else {
//                     alert(data.msg);
//                 }
//             }
//         })
//     })
// })

console.log(1111)
$('#submit').click(function () {
    $.ajax({
        method: 'post',
        url: '../server/regist.php',
        data: {
            username: $('#un').val(),
            password: $('#pw').val()
        },
        dataType: 'json',
        success: function (data) {
            console.log(data);
            if (data.code == 1) {
                // location.href = '../html/login.html';
                setTimeout(timeOut, 2000);
            } else {
                alert(data.msg);
            }
        }
    })
})

function timeOut() {
    location.href = '../pages/login.html';
}