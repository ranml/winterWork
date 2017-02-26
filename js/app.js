
var url = "http://localhost/juhe/event.php";
/**
 * 输入时间后的数据查询
 */
$('.input-box input[type=date]').focusout(function(){
    //隐藏警告框
    $(".warning").hide();
    var val = $(this).val();
    var date = new Date(val);
    var day = date.getDate();
    var mouth = date.getMonth()+1;

    //传递的参数
    var dataStr ="date="+mouth+'/'+day;
    ajaxReq(url, dataStr, bindData);

});
/**
 * 使用ajax请求数据
 * @param url 请求数据的url
 * @param dataStr 请求数据的参数，如：date=2/1
 * @param callback 回调函数，数据请求成功后的操作
 */
function ajaxReq(url, dataStr, callback){
    $.ajax({
        url: url,
        dataType: "json",
        type: "GET",
        data: dataStr,
        success: callback,
        error: function(HMLHttpRequest, textStatus, errorThrown){
//            var d = HMLHttpRequest.responseText;
            console.log("失败", HMLHttpRequest);
            console.log( errorThrown)
        }
    });
}

/**
 * 绑定数据
 * @param data
 */
function  bindData(data){
    var html = "";
    var res = data.result;
    for(var i=0; i<res.length; i++){
        var d = res[i];
        html += '<li class="list-con clearFix">';
        html += '<h2>';
        html += '<span>【'+ d.day+'】</span>';
        html += '<a href="content.html?e_id='+d.e_id+'" target="_blank">'+ d.title+'</a>';
        html += '</h2>';
        html += '<div class="date">';
        html += '<i></i><span>'+d.date+'</span>';
        html += '</div>';
        html += '</li>';
    }
    $(".list ul").html(html);
}