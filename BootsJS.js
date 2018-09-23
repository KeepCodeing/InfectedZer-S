window.onload=function () {
    // 我说你小子偷看了我生成访问人数的方法了吧?
    function random() {
        var timeup=Math.random()*60+5000;
        var pl=Math.random()*1000+100;
        var up;
        var timer=setInterval(function () {
            up=Math.random()*100+3;
            // console.log(Math.floor(pl+up));
            $("#rad").text("当前正有："+Math.floor(pl+up)+"人访问此页面");
        },timeup);
    }random();
    // //加入收藏夹，兼容多种浏览器
    // function AddFavorite(sURL, sTitle)
    // {
    //     try{window.external.addFavorite(sURL, sTitle);}
    //     catch (e)
    //     {
    //         try{window.sidebar.addPanel(sTitle, sURL, "");}
    //         catch (e){alert("加入收藏失败，请使用Ctrl+D进行添加");}
    //     }
    // }
    // $("#fov").click(function () {
    //     AddFavorite(window.location,document.title);
    // });
    //监听历史按钮点击
    $("#History1").click(function () {
        $(this).modal(options);
    });
    //break和believe按钮点击弹出消息框
    $("#breakalert").click(function () {
        $(this).popover("toggle");
        $(this).next("div").css({
            color:"black"
        });
    });
//    believealert
    $("#believealert").click(function () {
        $(this).popover("toggle");
        $(this).next("div").css({
            color:"black"
        });
    });
    //加入收藏提示
    $("#fov").click(function () {
        $(this).popover("toggle");
        $(this).next("div").css({
            color:"black"
        });
    })；
     var mouth=new Date().getMonth();
        console.log(mouth);
        $("#mouth").html(mouth+"月...漫无止境");
        $("#mouthtext").html("while(new Date.getMonth=="+mouth+"){<br>\n" +
            "                        document.write(\"这是一个没有目的的循环...\");<br>\n" +
            "                        }");
};
