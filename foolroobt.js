$(function () {
    var who="人";
    var texttemp=[];
    var $text=$(".text");
    $(".send_bt").click(function () {
        //1.当发送按钮被点击时获取输入框文本
        if($text.val().length==0){
            //未输入内容提示
            alert("尚未输入内容！");
        }else{
            who="人";
            console.log($text.val());
            //动态生成消息列表
            $(".outbox").append("<ul class=\"outul\">\n" +
                "        <li class=\"msgli\">\n" +
                "            <span class=\"headimg\"><span class=\"who\">"+who+"</span></span>\n" +
                "            <div class=\"msg\"><div>"+$text.val()+"</div></div>\n" +
                "        </li>\n" +
                "    </ul>");
            //当用户点击时生成“人”字头像
            chat();//调用方法传递消息
            //清空文本框

            $text.val("");

        }
        function chat() {
            var xhr=new XMLHttpRequest();
            xhr.open("post","http://www.tuling123.com/openapi/api");
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.onload = function () {
                var textret;
                who="机";
                textret=JSON.parse(xhr.responseText);
                //动态添加机器人回复
                $(".outbox").append("<ul class=\"outul\">\n" +
                    "        <li class=\"roobtmsg\">\n" +
                    "            <span class=\"roobthead\"><span class=\"who\">"+who+"</span></span>\n" +
                    "            <div class=\"roobt\"><div>"+textret.text+"</div></div>\n" +
                    "        </li>\n" +
                    "    </ul>");
            };
            xhr.send("key=bc90a1650d034a05b847e66bde8525b4&info="+$text.val());

        }
    });
});
