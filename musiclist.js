$(function () {
    var $iframe=$("iframe");
    var wlsong=0;
    var songlist=[849971,5299097,41643517,496902074,573480,27876224,22784587,33316286,28341409,28341366];
    $iframe.attr("src","//music.163.com/outchain/player?type=2&id="+songlist[0]+"&auto=0&height=66");
    //切换歌曲
    $(".next").click(function () {
        wlsong++;
        $iframe.attr("src","//music.163.com/outchain/player?type=2&id="+songlist[wlsong]+"&auto=0&height=66");
        if(wlsong>=songlist.length){
            wlsong=0;
            $iframe.attr("src","//music.163.com/outchain/player?type=2&id="+songlist[wlsong]+"&auto=0&height=66");
        }
    });
    $(".previous").click(function () {
        wlsong--;
        if(wlsong<0){
            wlsong=songlist.length-1;
            $iframe.attr("src","//music.163.com/outchain/player?type=2&id="+songlist[wlsong]+"&auto=0&height=66");
        }
        $iframe.attr("src","//music.163.com/outchain/player?type=2&id="+songlist[wlsong]+"&auto=0&height=66");
    });
});