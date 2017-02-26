<?php
//导入聚合数据提供的函数
require_once 'lib/juhecurl.php';
//获取从客户端传的数据
$id = $_GET["e_id"];
//$id = 1935;
//echo $id;
//设置文件的编码
header('Content-type:text/html;charset=utf-8');

//配置您申请的appkey
$appkey = "377537587403802d589f78aa3eb3cfb2";

//请求数据的地址
$url = "http://v.juhe.cn/todayOnhistory/queryDetail.php";

//请求数据的参数
$params = array(
    "key" => $appkey,//应用APPKEY(应用详细页查询),
    "e_id"=>$id //id
);

$paramstring = http_build_query($params);

//juhe提供的数据
$content = juhecurl($url,$paramstring);
$result = json_decode($content,true);
//echo $result;
if($result){
    if($result['error_code'] == 0){
        //将数据返回成json数据
        echo json_encode($result);
    }else{
        //打印错误信息
        echo $result['error_code']."：".$result['reason'];
    }
}else{
    echo "数据查询失败";
}