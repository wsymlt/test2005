<?php
    // // 1 获取前端传递的数据
    // $username = $_POST['username'];
    // $password = $_POST['password'];
    // // 密码加密
    // // $password = md5($password);
    // // 2 连接数据库
    // $conn = mysqli_connect('localhost','root','root','music');
    // // 3 书写sql语句
    // $sql = "SELECT * FROM `user` WHERE `username` = '$username' AND `password` = '$password'";
    // // 4 操作数据库
    // $result = mysqli_query($conn, $sql);
    // // 5 解析结果
    // $data = mysqli_fetch_assoc($result);
    // if ($data) {
    //     $arr = array('code'=>1,'data'=>array('username'=>$username));
    // } else {
    //     $arr = array('code'=>0,'msg'=>'用户或密码错误');
    // };

    // // 6 返回json格式的数据
    // echo json_encode($arr);




    // 1 获取前端传递来的数据
    $username = $_POST['username'];
    $password = $_POST['password'];

    // 2 连接数据库
    $conn = mysqli_connect('localhost','root','root','login');

    // 3 书写sql语句
    $sql = "SELECT * FROM `info` WHERE `username`='$username' AND `password`='$password'";

    // 4 执行sql语句
    $result = mysqli_query($conn, $sql);

    // 5 解析结果
    $data = mysqli_fetch_assoc($result);
    if ($data) {
        $arr = array('code'=>1,'data'=>array('username'=>$username));
    } else {
        $arr = array('code'=>0,'msg'=>'用户名或密码错误');
    }
    // 6 返回结果给前端
    echo json_encode($arr);

?>