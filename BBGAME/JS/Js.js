$(function () {
    var $outbox=$(".outbox");
    var $start=$("#start");
    var key;
    var count=0;
    var $msgbox=$(".msg");
    var $name=$("#name");
    var $dialogue=$("#dialogue");
    var yjsp="野兽";
    var mur="三浦";
    var kmr="木村";
    var ss="葛城莲";
    var px="朴秀";
    var udk="一般通过UDK";
    var wxy="我修院";
    var yy="远野";
    var img=1;
    var speed=110;
    var gif=0;$start.click(function () {
        $(this).parents(".start").fadeOut(1000);
        $(".zz").fadeIn(1000,function () {
            $outbox.css({background:"url(https://keepcodeing.github.io/InfectedZer-S/BBGAME/BackGround/1.jpg) no-repeat 0 0",
                backgroundSize:"1200px 600px"});
        }).fadeOut(1500);
        $(".outbox span").fadeOut(1000);
        keydown();
    });
    $("#sound").click(function () {
        $("#music").slideDown(100);
        setTimeout(function () {
            $("#music").slideUp(100);
        },7000);
    });
    $("#textspeed").click(function () {
        var s;
        s=prompt("请输入秒速!(建议在0.1秒到0.3秒)","");
        s=Number(s);
        if(isNaN(s)){
            alert("请输入有效数字!");
        }else {
            speed=1000*s;
        }
        if(speed==0){
            speed=110;
        }
    });
    $("#backgroud").click(function () {
        var bg;
        bg=prompt("请输入有效颜色如：white","blue");
        if(isNaN(bg)){
            $("html body").css({background:bg});
            alert("如果页面颜色未发生改变则说明你输入的颜色不存在！");
        }else if(bg==null){
            bg="black";
        }else {
            alert("请输入有效颜色！");
        }

    });
    function keydown() {
        $("html body").keydown(function (e) {
            key=e.keyCode;
            switch (key){
                case 13:
                    count++;
                    switch (count){
                        case 1:
                            SetText(yjsp,"今天真是累啊...");
                            break;
                        case 2:
                            SetText(mur,"就是啊！");
                            break;
                        case 3:
                            SetText(kmr,"累死了（小声）");
                            break;
                        case 4:
                            GC(1);
                            SetText(mur,"真是累坏了啊！");
                            break;
                        case 5:
                            GC(1);
                            SetText(yjsp,"社团活动什么的都不想搞了啦！");
                            break;
                        case 6:
                            SetText(mur,"就是啊，我也不想搞了啦...");
                            break;
                        case 7:
                            GC(1);
                            SetText(yjsp,"你脱的好快啊！");
                            break;
                        case 8:
                            SetText(mur,"我都汗湿了嘛...");
                            break;
                        case 9:
                            GC(1);
                            SetText(yjsp,"等下我啦...");
                            break;
                        case 10:
                            GC(1);
                            SetText(mur,"木村搞快、啦...");
                            break;
                        case 11:
                            SetText(kmr,"......");
                            break;
                        case 12:
                            GC(1);
                            SetText(mur,"（其实做个池沼也不错啊...真爽啊！）");
                            break;
                        case 13:
                            SetText(mur,"啊，对了！今天这么累正好可以看下剧场" +
                                "爽一下，等下就和木村一起看好了...");
                            break;
                        case 14:
                            GC(1);
                            SetText(yjsp,"FOO↑，啤酒，啤酒！");
                            break;
                        case 15:
                            SetText(mur,"冰好了吗？");
                            break;
                        case 16:
                            SetText(yjsp,"放心吧，超冰的啦！");
                            break;
                        case 17:
                            GC(1);
                            SetText(yjsp,"我说三浦你晚上饿不饿啊？");
                            break;
                        case 18:
                            SetText(mur,"饿啊");
                            break;
                        case 19:
                            SetText(yjsp,"我听说这附近有一家不错的面条摊子呢，不去" +
                                "吃一发吗？");
                            break;
                        case 20:
                            SetText(mur,"好意思馁（难听）");
                            break;
                        case 21:
                            SetText(yjsp,"那我们等下就去吧！");
                            break;
                        case 22:
                            GC(1);
                            SetText(mur,"Sonanoka!");
                            break;
                        case 23:
                            GC(1);
                            SetText(mur,"啊，对了...");
                            break;
                        case 24:
                            GC(1);
                            SetText(mur,"喂，木村，你丫刚刚在我们洗澡的时候偷偷" +
                                "看了吧！（指bb剧场）");
                            break;
                        case 25:
                            GC(1);
                            SetText(kmr,"不，我没看");
                            break;
                        case 26:
                            SetText(mur,"你这个骗子，你绝对看了...");
                            break;
                        case 27:
                            // SetBackGround();
                            SetText(kmr,"我有什么偷看的必要吗？");
                            break;
                        case 28:
                            GC(1);
                            SetText(yjsp,"我说那个木村啊...");
                            break;
                        case 29:
                            GC(1);
                            SetText(yjsp,"你刚刚（忘词）脱了之后，好像半天都没过来啊!");
                            break;
                        case 30:
                            GC(1);
                            SetText(mur,"就是啊！");
                            break;
                        case 31:
                            GC(1);
                            SetText(mur,"你这么想看我就让你看个够咯！（指剧场）");
                            break;
                        case 32:
                            GC(1);
                            play("soundset");
                            pause("music");
                            SetText(mur,"......");
                            break;
                        case 33:
                            SetText(kmr,"......");
                            break;
                        case 34:
                            GC(1);
                            SetText(mur,"盯——");
                            break;
                        case 35:
                            GC(1);
                            SetText(yjsp,"真是搞不懂啊（悟空）");
                            break;
                        case 36:
                            SetText(yjsp,"对了，其实我是有个收藏夹的，不来看一发吗？");
                            play("music");
                            pause("soundset");
                            GC(1);
                            break;
                        case 37:
                            SetText(mur,"我这么想看就让我看个够咯！");
                            break;
                        case 38:
                            GC(1);
                            SetText("屑运营","（噔噔咚）");
                            replay("ddd","new1");
                            pause("music");
                            break;
                        case 39:
                            GC(2);
                            SetText(yjsp,"好时代，过去了...");
                            break;
                        case 40:
                            //GC(2);
                            SetText(yjsp,".......");
                            break;
                        case 41:
                            SetText(yjsp,"这种情况只能找那个男人了吧....");
                            GC(2);
                            pause("new1");
                            play("music");
                            break;
                        case 42:
                            GC(1);
                            SetText(mur,"那个男人，不会是....");
                            break;
                        case 43:
                            GC(2);
                            SetText(yjsp,"没错，就是他...");
                            break;
                        case 44:
                            SetText(mur,"所以说到底是谁啊！");
                            GC(1);
                            break;
                        case 45:
                            GC(1);
                            SetText(yjsp,"是虐待叔叔啊，你这池沼！（直球）");
                            break;
                        case 46:
                            GC(1);
                            SetText(yjsp,"1145141919810...（拨号中）");
                            break;
                        case 47:
                            //GC(2);
                            SetText("电话另一端","喂？我对go教不感兴趣，请不要再打给我了！");
                            break;
                        case 48:
                            GC(2);
                            SetText(yjsp,"等等啊欧吉桑！我是野兽啊！");
                            break;
                        case 49:
                            SetText("电话另一端","什么欧吉桑，要叫欧尼桑才对吧！");
                            break;
                        case 50:
                            SetText(yjsp,".....");
                            break;
                        case 51:
                            SetText(yjsp,"和往常一样答非所问呢....");
                            break;
                        case 52:
                            SetText(yjsp,"我明白了，我会再续费一年的大会员的....");
                            break;
                        case 53:
                            GC(2);
                            SetText(ss,"叔叔我啊，最喜欢你这种听话的孩子了！");
                            break;
                        case 54:
                            SetText(ss,"有什么需要我帮忙的就直说吧，反正又是脱粪忘了带纸这种事吧！");
                            break;
                        case 55:
                            GC(1);
                            SetText(yjsp,"这种...脱粪忘了带纸什么的...这种...我在后辈前的形象，已经坏掉了啊!");
                            break;
                        case 56:
                            $(".zz").stop(true,true).fadeIn(300,function () {
                                $outbox.css({background:"url(https://keepcodeing.github.io/InfectedZer-S/BBGAME/BackGround/"+28+".png) no-repeat 0 0",
                                    backgroundSize:"1200px 600px"});
                            }).fadeOut(500);
                            SetText(ss,"这种事怎么都无所谓吧，快说你要拜托我做什么！");
                            break;
                        case 57:
                            SetText(yjsp,"这次的委托可能比较沉重，但是我相信作为下北泽第一剑圣的你可以办到...");
                            break;
                        case 58:
                            SetText(yjsp,"调查“真夏夜的淫梦”消失的原因（指屑站搜索）");
                            break;
                        case 59:
                            GC(1);
                            SetText(ss,"调查这方面可不是我的长项，至少和樱井豪比是这样...（此go非彼go）");
                            break;
                        case 60:
                            SetText(ss,"我的长项是虐待呢，不过既然你委托了我想必也是有你的原因的...");
                            break;
                        case 61:
                            GC(2);
                            SetText(ss,"欧尼桑我啊也很喜欢“真夏夜的淫梦”的，这回我可是真的要生气了...");
                            break;
                        case 62:
                            GC(2);
                            SetText(mur,"就是啊！刚刚还想给木村看剧场的...");
                            break;
                        case 63:
                            GC(2);
                            SetText(kmr,"我们也一起去调查吧（小声）");
                            break;
                        case 64:
                            GC(2);
                            SetText(yjsp,"那么吃完拉面就去吧...");
                            break;
                        case 65:
                            GC(1);
                            SetText("....","114514秒过去了....");
                            break;
                        case 66:
                            GC(1);
                            manpos({id:"mrmur", height:190, width:200, left:750, bottom:114});
                            manpos({id:"smokeyjsp",left:900,bottom:106});
                            manpos({id:"standkmr",left:600,bottom:70,width:130});
                            manpos({id:"standss",left:20,bottom:85,width:130});
                            SetText(yjsp,"明明说是调查为什么搜不到“真夏夜的淫梦”了为什么要带我们来这个地方？");
                            break;
                        case 67:
                            SetText(mur,"就是啊!");
                            break;
                        case 68:
                            SetText(ss,"好了，还有谁要提问？");
                            break;
                        case 69:
                            SetText(kmr,".....");
                            break;
                        case 70:
                            SetText(ss,"当然是来找屏蔽了关键词的人啊，你们这两个蠢货！");
                            break;
                        case 71:
                            SetText("野兽&三浦","原来是人为的啊（池沼）");
                            break;
                        case 72:
                            SetText(ss,"我看你们两个真的是什么都不懂哦...");
                            break;
                        case 73:
                            removeman("smokeyjsp");
                            removeman("mrmur");
                            manpos({id:"foolmur",left:750,bottom:114,width:200,height:190});
                            manpos({id:"sityjsp",left:980,bottom:61,width:200});
                            SetText(ss,"(迫真科普中）");
                            break;
                        case 74:
                            SetText(yjsp,"原来是这样啊....");
                            break;
                        case 75:
                            SetText(mur,"就是啊！（还是没搞懂）");
                            break;
                        case 76:
                            SetText(ss,"都给我打起精神，罪魁祸首可是个被打都能笑出来的史诗级硬汉啊！");
                            break;
                        case 77:
                            SetText(kmr,"这么说他很难对付吧...");
                            break;
                        case 78:
                            SetText(ss,"......");
                            break;
                        case 79:
                            SetText(ss,"那是好几年前的事了...");
                            break;
                        case 80:
                            SetText(ss,"他曾经一手创建了“逸站”并且做出了“绝不收观众一分钱”的承诺...");
                            break;
                        case 81:
                            SetText(ss,"“逸站”你们应该知道吧...曾经是下北泽最大的“弹幕网网站”呢...（大嘘）");
                            break;
                        case 82:
                            SetText(mur,"就是啊!但是为什么突然间倒闭了呢...");
                            break;
                        case 83:
                            SetText(ss,"是啊，为什么呢？...");
                            break;
                        case 84:
                            removeman("sityjsp");
                            manpos({id:"mryjsp",left:980,bottom:114,height:190,width:200});
                            SetText(yjsp,"啊啊，肚子突然痛起来了...");
                            break;
                        case 85:
                            removeman("standkmr");
                            manpos({id:"readkmr",left:540,bottom:110,height:200,width:180});
                            SetText(kmr,"边吃拉面边喝啤酒闹肚子了吗...");
                            break;
                        case 86:
                            removeman("standss");
                            manpos({id:"suress",left:0,bottom:120,height:240,width:140});
                            SetText(ss,"你这家伙...快去快回啊！");
                            break;
                        case 87:
                            removeman("mryjsp");
                            $("#man").append("<img src='https://keepcodeing.github.io/InfectedZer-S/BBGAME/Character/gcyjsp.gif' id='gcyjsp'>");
                            $("#gcyjsp").css({
                                left:980,
                                bottom:100,
                                height:200
                            });
                            SetText(yjsp,"啊啊...憋不住了啊！");
                            break;
                        case 88:
                            SetText(yjsp,"（啪叽噗）");
                            break;
                        case 89:
                            removeman("gcyjsp");
                            removeman("readkmr");
                            removeman("suress");
                            removeman("foolmur");
                            manpos({id:"jwss",left:20,bottom:85,width:130});
                            manpos({id:"jwkmr",left:200,bottom:70,width:130});
                            manpos({id:"jwmur",left:350,bottom:114,height:190,width:200});
                            manpos({id:"happyyjsp",left:980,bottom:114,height:190,width:150});
                            manpos({id:"shit",left:700,bottom:114,height:90,width:165});
                            replay("ddd","new2");
                            pause("music");
                            SetText("葛城&木村&三浦","（绝望）");
                            break;
                        case 90:
                            SetText(ss,"你...你这家伙....");
                            break;
                        case 91:
                            SetText(mur,"在快来了之前好歹说一声啊....");
                            break;
                        case 92:
                            SetText(kmr,"先辈...你还吃了什么...真是恶臭不堪啊！");
                            break;
                        case 93:
                            removeman("happyyjsp");
                            manpos({id:"wkyjsp",left:925,bottom:114,height:190,width:235});
                            SetText(yjsp,"非常抱歉，我什么都会做的（悟空）");
                            break;
                        case 94:
                            SetText(ss,"够了！我无法忍受你的行为！");
                            break;
                        case 95:
                            SetText(yjsp,"我再充一年大会员，好吗？");
                            break;
                        case 96:
                            removeman("wkyjsp");
                            removeman("jwss");
                            manpos({id:"sityjsp",left:980,bottom:61,width:200});
                            manpos({id:"suress",left:0,bottom:120,height:240,width:140});
                            pause("new2");
                            play("music");
                            SetText(ss,"哎呦卧槽，这是好的！");
                            break;
                        case 97:
                            SetText("三浦&木村","......");
                            break;
                        case 98:
                            SetText(mur,"喂，野兽，作为赔偿你就请我们一碗阿久井餐厅的特色意面吧！");
                            break;
                        case 99:
                            SetText(yjsp,"阿久井餐厅...这个很贵啊....");
                            break;
                        case 100:
                            removeman("jwkmr");
                            removeman("jwmur");
                            manpos({id:"standkmr",left:200,bottom:70,width:130});
                            manpos({id:"foolmur",left:350,bottom:114,height:190,width:200});
                            SetText(yjsp,"你们不要把这件事说出去啊，不然我的名声就毁了");
                            break;
                        case 101:
                            SetText(mur,"就是啊!");
                            break;
                        case 102:
                            SetText(kmr,"（先辈的名声本来就不好吧）");
                            break;
                        case 103:
                            removeman("sityjsp");
                            manpos({id:"mryjsp",left:980,bottom:114,height:190,width:200});
                            SetText(yjsp,"拜托了...");
                            break;
                        case 104:
                            removeman("mryjsp");
                            manpos({id:"cjyjsp",left:990,bottom:114,height:190,width:210});
                            manpos({id:"gspx",left:700,bottom:450,height:150,width:150});
                            animate({
                                id:"gspx",
                                ms:4000,
                                lastbottom:"114",
                                stops:1500
                            });
                            SetText(yjsp,"fa?!");
                            break;
                        case 105:
                            removeman("suress");
                            removeman("standkmr");
                            manpos({id:"standss",left:20,bottom:85,width:130});
                            manpos({id:"jwkmr",left:200,bottom:70,width:130});
                            SetText("葛城&三浦&木村","!");
                            break;
                        case 106:
                            SetText("神必人","是新鲜的大便...");
                            break;
                        case 107:
                            animate({
                                op:0.5,
                                ms:1500,
                                stops:0,
                                id:"shit"
                            });
                            SetText("神必人","新鲜的大便要进到嘴里来了，味蕾要坏了！...");
                            break;
                        case 108:
                            removeman("foolmur");
                            manpos({id:"jwmur",left:350,bottom:114,height:190,width:200});
                            SetText(mur,"这家伙....");
                            break;
                        case 109:
                            SetText(kmr,"是个神经...");
                            break;
                        case 110:
                            removeman("cjyjsp");
                            manpos({id:"mryjsp",left:980,bottom:114,height:190,width:200});
                            animate({
                                op:0,
                                ms:1500,
                                stops:0,
                                id:"shit"
                            });
                            SetText("神必人","哇，good爽啊！");
                            break;
                        case 111:
                            SetText(yjsp,"我的大便好吃吗？...");
                            break;
                        case 112:
                            SetText("神必人","非常的新鲜，非常的美味！");
                            break;
                        case 113:
                            removeman("standss");
                            removeman("gspx");
                            manpos({id:"qjpx",left:700,bottom:114,height:150,width:150});
                            manpos({id:"suress",left:0,bottom:120,height:240,width:140});
                            SetText(ss,"喂，你们几个离他远点，他就是这次事件的元凶朴秀！");
                            break;
                        case 114:
                            removeman("mryjsp");
                            manpos({id:"happyyjsp",left:980,bottom:114,height:190,width:150});
                            SetText("木村&三浦","这家伙喜欢吃屎啊...");
                            animate({
                                id:"jwkmr",
                                lastleft:140,
                                stop:0,
                                ms:1000
                            });
                            animate({
                                id:"jwmur",
                                lastleft:250,
                                stop:0,
                                ms:1000
                            });
                            animate({
                                id:"happyyjsp",
                                lastleft:1050,
                                stop:0,
                                ms:300
                            });
                            break;
                        case 115:
                            SetText(yjsp,"女孩子的大便是草莓味的哦...");
                            break;
                        case 116:
                            SetText(mur,"喂，野兽，这都什么时候了还在在意这个啊！");
                            break;
                        case 117:
                            SetText(mur,"该考虑怎么对付这家伙了啊！（智将）");
                            break;
                        case 118:
                            removeman("suress");
                            manpos({id:"byss",left:20,bottom:110,height:280,width:120});
                            SetText(ss,"好久不见了，朴秀...");
                            break;
                        case 119:
                            removeman("jwkmr");
                            removeman("jwmur");
                            removeman("happyyjsp");
                            manpos({id:"mrmur",left:240,bottom:114,height:190,width:200});
                            manpos({id:"standkmr",left:150,bottom:114,width:130});
                            manpos({id:"cjyjsp",left:990,bottom:114,height:190,width:210});
                            SetText(kmr,"难道你们认识吗...");
                            break;
                        case 120:
                            SetText(mur,"就是啊！");
                            break;
                        case 121:
                            SetText(ss,"嘛，往事不提也罢...");
                            break;
                        case 122:
                            SetText(ss,"“真夏夜的淫梦”消失的原因就是因为这家伙...");
                            break;
                        case 123:
                            SetText(ss,"之前提到的“关键词屏蔽”其实就是这家伙搞的鬼...");
                            break;
                        case 124:
                            SetText(ss,"虽然他的智商还没有三岁小孩高还一直以为自己是大小姐...");
                            break;
                        case 125:
                            removeman("mrmur");
                            removeman("standkmr");
                            manpos({id:"foolmur",left:240,bottom:114,height:190,width:200});
                            manpos({id:"jwkmr",left:150,bottom:114,width:130});
                            SetText(ss,"但是拖他的福，整个下北泽地区的大粪都差不多被他吃光了...");
                            break;
                        case 126:
                            SetText(ss,"而由于“真夏夜的淫梦”基础组成就是“大粪”，所以才会搜索不到...（量 子 纠 缠）");
                            break;
                        case 127:
                            SetText(ss,"真是没办法啊...你们可以撤了，我来对付这家伙...");
                            break;
                        case 128:
                            SetText(kmr,"葛城先生，你一个人能对付的了他吗？...");
                            break;
                        case 129:
                            SetText(ss,"可不要小瞧下北泽第一剑圣了啊!");
                            break;
                        case 130:
                            removeman("cjyjsp");
                            manpos({id:"sityjsp",left:1020,bottom:114,height:190,width:180});
                            SetText(yjsp,"我明白了，三浦先辈，木村，我们先撤了吧...");
                            break;
                        case 131:
                            removeman("byss");
                            removeman("foolmur");
                            removeman("sityjsp");
                            removeman("jwkmr");
                            manpos({id:"mrmur",left:240,bottom:114,height:190,width:200});
                            manpos({id:"standss",left:20,bottom:85,width:130});
                            manpos({id:"standkmr",left:150,bottom:114,width:130});
                            manpos({id:"smokeyjsp2",left:850,bottom:114,height:300,width:400});
                            $("#smokeyjsp2").animate({
                                left:"+1300px"
                            },300);
                            $("#standkmr").animate({
                                left:"-500px"
                            },700);
                            $("#mrmur").animate({
                                left:"-500px"
                            },900);
                            break;
                        case 132:
                            SetText(ss,"好了，现在就只有你我了...");
                            break;
                        case 133:
                            removeman("qjpx");
                            manpos({id:"gspx2",left:700,bottom:114,height:150,width:150});
                            SetText(px,"你说你马呢？看看啤酒？");
                            pause("music");
                            replay("BGM","new3");
                            break;
                        case 134:
                            SetText(ss,"叔叔我啊，最喜欢你这种叛逆的小孩了！");
                            break;
                        case 135:
                            removeman("standss");
                            manpos({id:"sjss",left:100,bottom:120,height:240,width:200});
                            SetText(ss,"Do't stop shooting it!（L4D2饼干）");
                            break;
                        case 136:
                            removeman("gspx2");
                            manpos({id:"booldpx",left:700,bottom:114,height:150,width:150});
                            SetText(px,"亚达，亚达....");
                            break;
                        case 137:
                            SetText(px,"要死了，要死了！...");
                            break;
                        case 138:
                            removeman("booldpx");
                            manpos({id:"booldpx2",left:700,bottom:114,height:150,width:150});
                            break;
                        case 139:
                            SetText(px,"（逃跑）");
                            animate({
                                id:"booldpx2",
                                lastleft:1300,
                                ms:500,
                                stops:0
                            });
                            break;
                        case 140:
                            removeman("sjss");
                            manpos({id:"zjss",left:100,bottom:120,height:240,width:200});
                            SetText(ss,"你可是彻底激怒了叔叔我啊！（全怒）");
                            animate({
                                id:"zjss",
                                lastleft:1300,
                                stop:1,
                                ms:1000
                            });
                            break;
                        case 141:
                            udkanimate();
                            pause("new3");
                            replay("wndss","new4");
                            SetText(udk,"果然还是爱丽丝做的布朗尼好吃啊");
                            break;
                        case 142:
                            SetText(udk,"面团口感湿润而且不发粘，有种清爽的甜味。");
                            break;
                        case 143:
                            SetText(udk,"可可是用van houten做的吗？（诉讼确认）");
                            break;
                        case 144:
                            SetText(udk,"这里不是博丽神社吗？");
                            break;
                        case 145:
                            removeman("udk1");
                            manpos({id:"udk2",left:650,bottom:114,height:100,width:140});
                            SetText(udk,"（去神社的路）啊啊啊啊啊啊啊啊啊！！忘记了啊啊~~！");
                            break;
                        case 146:
                            manpos({id:"wxy",left:-300,height:150,width:300,bottom:200});
                            animate({id:"wxy",lastleft:0,lastbottom:450,stops:1,ms:2000});
                            SetText(wxy,"义宜死，吾亦死");
                            break;
                        case 147:
                            SetText(wxy,"身为美食家却因为这家伙而面临着被饿死的危机，不可饶恕！");
                            break;
                        case 148:
                            SetText(wxy,"屑运营，爆破吧！");
                            break;
                        case 149:
                            SetText(udk,"诶！？啊、等……（金发小女孩真可怜）");
                            removeman("udk2");
                            manpos({id:"udk3",left:650,bottom:114,height:100,width:100});
                            break;
                        case 150:
                            animate({id:"wxy",lastleft:700,lastbottom:300,stops:1,ms:100});
                            removeman("wxy");
                            removeman("udk3");
                            GC(2);
                            SetText(wxy,"好时代，来临吧！");
                            pause("new4");
                            break;
                        case 151:
                            replay("ss2","new5");
                            GC(1);
                            SetText("...","另一边，朴秀已经暂时摆脱了葛城莲的追击...");
                            break;
                        case 152:
                            GC(1);
                            SetText(px,"今天真是累啊，快点回家玩FGO吧...");
                            break;
                        case 153:
                            GC(1);
                            SetText("...","或许是智商过于低下，不幸被埋伏好的葛城袭击..");
                            break;
                        case 154:
                            GC(1);
                            SetText(ss,"这该死的家伙到底盈了多少利才会这么重啊！");
                            break;
                        case 155:
                            GC(1);
                            SetText(ss,"看我怎么教训你...");
                            break;
                        case 156:
                            GC(1);
                            SetText("","");
                            break;
                        case 157:
                            GC(1);
                            SetText(ss,"还是一脸欠打的样...");
                            break;
                        case 158:
                            GC(1);
                            SetText(px,"这里是葛城家？糟了...");
                            break;
                        case 159:
                            GC(1);
                            SetText(px,"总之先配合下他好了...");
                            break;
                        case 160:
                            GC(1);
                            SetText(ss,"你醒了..先去客厅喝口水吧，关于盈利的事情我要听你说清楚...");
                            break;
                        case 161:
                            GC(1);
                            SetText(ss,"（看看这欠打的模样，我的虐待之魂要迸发出来了）");
                            break;
                        case 162:
                            SetText(ss,"（想来他也不会老实交待）");
                            break;
                        case 163:
                            GC(1);
                            SetText(ss,"你这该死的家伙到底背着我盈了多少利！");
                            break;
                        case 164:
                            SetText(ss,"快如实交待！");
                            break;
                        case 165:
                            SetText(px,"（你说你马呢，我这样怎么说啊）");
                            break;
                        case 166:
                            GC(1);
                            SetText(ss,"（这也不是第一次被打还能笑出来了，看来还要加大力度）");
                            break;
                        case 167:
                            GC(1);
                            SetText(ss,"你这家伙不仅背着我盈利，还偷偷挂脚本刷游戏了吧!");
                            break;
                        case 168:
                            GC(1);
                            SetText(px,"（可恶，怎么这都被发现了）");
                            break;
                        case 169:
                            GC(1);
                            SetText(px,"你个栽种，我做这些都是为了你好...");
                            break;
                        case 170:
                            GC(1);
                            SetText(px,"我不做这些那些用户早就把眼光都放在最近大规模视频下架上了...");
                            break;
                        case 171:
                            GC(1);
                            SetText(ss,"你真是个Hape，你会做个锤子运营...");
                            break;
                        case 172:
                            GC(1);
                            SetText(ss,"当初说什么“绝不收用户一分钱”做得到吗？");
                            break;
                        case 173:
                            SetText(ss,"如果不是我搞了“大会员”制度、各种各样的线下活动，你还拿什么盈利！");
                            break;
                        case 174:
                            SetText(ss,"不想倒闭就给我好好听话！");
                            break;
                        case 175:
                            SetText(ss,"如果不是我接管了运营你还拿什么守护最好的屑站？");
                            break;
                        case 176:
                            SetText(px,"总之今天这场戏演完了，那几个家伙的要求你打算怎么办？");
                            break;
                        case 177:
                            GC(1);
                            SetText(ss,"才充两个大会员就想解禁“真夏夜的淫梦”？充98亿个吧！");
                            break;
                        case 178:
                            GC(1);
                            SetText(ss,"不过答应他们的另一部分我还是很乐意的...");
                            break;
                        case 179:
                            GC(1);
                            SetText(px,"戏都演完了你这家伙也该适可而止了啊...");
                            break;
                        case 180:
                            GC(1);
                            SetText(ss,"真当自己大小姐？这是叔叔我守护屑站的一份决心懂吗？");
                            break;
                        case 181:
                            GC(1);
                            SetText(ss,"你就在阳台给我待七天吧，杀鸡儆猴...");
                            break;
                        case 182:
                            pause("new5");
                            play("music");
                            GC(1);
                            SetText("yjsp","......");
                            break;
                        case 183:
                            SetText(yy,"先辈..“真夏夜的淫梦”还是搜索不到呢...");
                            break;
                        case 184:
                            SetText(mur,"就是啊！");
                            break;
                        case 185:
                            SetText(yjsp,"是啊，最近发生了很多事情呢...");
                            break;
                        case 186:
                            SetText(yjsp,"（忘词）...");
                            break;
                        case 187:
                            SetText(yjsp,"我说那个木村，你肯定记得最近发生了什么吧！");
                            break;
                        case 188:
                            SetText(mur,"我也这么认为...");
                            break;
                        case 189:
                            SetText(kmr,"那个...既然你们这么想听那我就说说好了...");
                            break;
                        case 190:
                            SetText(kmr,"叔叔运营的“盈利盈利”本社被自称是“下北泽第一美食家”的家伙爆破了，不过经过整改现在已经满血复活了...");
                            break;
                        case 191:
                            SetText(kmr,"而叔叔口中的史诗级硬汉在被叔叔使用“盈利封印”后到现在都没有任何动态...");
                            break;
                        case 192:
                            SetText(kmr,"而“真夏夜的淫梦”目前任然处于无法被搜索的状态...");
                            break;
                        case 193:
                            SetText(yjsp,"好时代，什么时候才能来临呢？");
                            break;
                        case 194:
                            SetText(yjsp,"啊，对了，其实我家是有个屋顶的，不去吗？");
                            break;
                        case 195:
                            SetText(yy,"好意思馁！");
                            break;
                        case 196:
                            SetText("yjsp","那马上就去吧，今天也是好天气呢（池沼）");
                            break;
                        case 197:
                            SetText("木村&三浦","......");
                            break;
                        case 198:
                            GC(1);
                            SetText("...","那么叔叔和朴秀的真实身份又是什么呢？");
                            break;
                        case 199:
                            SetText("...","是徐秀和葛睿啦，你这酒鬼！");
                            break;
                        case 200:
                            SetText("...","END");
                            pause("music");
                            replay("end","new6");
                            end();
                            break;
                    }
                    break;
                case 27:
                    $('#myModal').modal({show:true,
                        keyboard:false
                    });
                    break;
            }
        });
    }
    function SetText(name,text) {
        var len=text.length;
        var timer;
        var textout=0;
        var temp;
        $msgbox.fadeIn(900);
        $msgbox.children("span").fadeIn(1000);
        $name.text(name);
        timer=setInterval(function () {
            temp=text.substr(0,textout);
            $dialogue.text(temp);
            textout++;
            if(textout===len+1){
                textout=0;
                clearInterval(timer);
            }
            $("html body").keydown(function (e) {
                key=e.keyCode;
                if(key===13){
                    $dialogue.text(text);
                    clearInterval(timer);
                }
            });
        },speed);
    }
    function SetBackGround() {
        img++;
        $outbox.css({background:"url(https://keepcodeing.github.io/InfectedZer-S/BBGAME/BackGround/"+img+".jpg) no-repeat 0 0",
            backgroundSize:"1200px 600px"});
    }
    function play(name) {
        document.getElementById(name).play();
    }
    function pause(name) {
        document.getElementById(name).pause();
    }
    function replay(name,id) {
        $("html body").append("<audio autoplay=\"autoplay\" id="+id+" style=\"display: none\">\n" +
            "        <source src=\"./Sound/"+name+".mp3\" type=\"audio/mp3\">\n" +
            "    </audio>");
    }
    function GifSet() {
        gif++;
        $outbox.css({background:"url(./BackGround/"+gif+".gif) no-repeat 0 0",
            backgroundSize:"1200px 600px"});
    }
    function GC(wl) {
        $(".zz").stop(true,true).fadeIn(300,function () {
            if(wl===1)
                SetBackGround();
            else if(wl===2)
                GifSet();
        }).fadeOut(500);
    }
    function manpos(info) {
        if (info.height===undefined){
            info.height=300;
        }
        if(info.width===undefined){
            info.width=400;
        }
        if(info.bottom===undefined){
            info.bottom=200;
        }
        if(info.left===undefined){
            info.left=200;
        }
        $("#man").append("<img src='https://keepcodeing.github.io/InfectedZer-S/BBGAME/Character/"+info.id+".png' id="+info.id+">");//https://keepcodeing.github.io/InfectedZer-S/BBGAME/Character/1.jpg
        $("#"+info.id).css({
            left:info.left,
            bottom:info.bottom,
            height:info.height,
            width:info.width,
        });
    }
    function removeman(id){
        $("#"+id).remove();
    }
    function animate(info){
        var $obj=$("#"+info.id);
        if(info.lastleft===undefined){
            info.lastleft=$obj.css("left");
        }
        if (info.op===undefined){
            info.op=$obj.css("opacity");
        }
        if(info.lastbottom===undefined){
            info.lastbottom=$obj.css("bottom");
        }
        if(info.ms===undefined){
            info.ms=1500;
        }
        if(info.stops===undefined){
            info.stops=2000;
        }
        // $("html body").keydown(function (e) {
        //     key=e.keyCode;
        //     if(key===13){
        //         // $obj.animate({
        //         //     bottom:"+"+info.lastbottom+"px",
        //         //     left:"+"+info.lastleft+"px",
        //         //     opacity:"+"+info.op
        //         // },info.ms);
        //         //当用户取消悬停之后判断用户是否取消后续动画
        //         // temp++;
        //         //如果用户取消悬停动画
        //         // if(temp===2){
        //         //     $("html body").keydown(function (e) {
        //         //         key=e.keyCode;
        //         //         //如果按下回车则直接完成后续动画
        //         //         if(key===13){
        //         //             $obj.stop(true,true);
        //         //             temp=0;
        //         //         }
        //         //     });
        //         // }
        //
        //     }
        // });
        setTimeout(function () {
            $obj.animate({
                bottom:"+"+info.lastbottom+"px",
                left:"+"+info.lastleft+"px",
                opacity:"+"+info.op
            },info.ms);
        },info.stops);
    }
    function udkanimate() {
        var leftset=1100;
        manpos({id:"udk1",left:1100,bottom:114,height:100,width:100});
        for(var a=1;a<=10;a++){
            if(a%2!==0){
                animate({
                    id:"udk1",
                    lastbottom:200,
                    ms:1000,
                    stops:1,
                    lastleft:leftset
                });
                leftset-=50;
            }else{
                animate({
                    id:"udk1",
                    lastbottom:114,
                    ms:1000,
                    stops:1,
                    lastleft:leftset
                });
                leftset-=50;
            }
        }
    }
    function end() {
        var $msgbox=$(".msg");
        var $end=$("#end");
        $msgbox.fadeOut(3000);
        $end.fadeIn(1500,function () {
            animate({id:"end",lastbottom:0,ms:25000,stops:1});
        });
    }
});
