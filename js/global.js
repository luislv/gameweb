//更多数据
function listAjax (data){
    //列表数据函数
    $.each(data,function(i,item){
        var content = '<li class="gameConList-item pt30 pl15 pr15 pb30 bor-l bor-t fl"><a href="#"><img class="fl" src="' + item.small_img + '" width="100" height="100" alt="游戏图标"/><div class="gameConList-itemCaption"><h3 class="fs24 typo-18gray">' + item.title + '</h3><p class="fs14 mt10 typo-84gray">' + item.info + '</p></div></a></li>';
        $(".gameCon-list").append(content);
    });
}
$(function(){
    //焦点
    var mySwiper = new Swiper('.swiper-container', {
        width: '1220',
        height: '450',
        pagination: '.pagination',
        loop: true,
        grabCursor: true,
        paginationClickable: true,
        autoplay: 3000
    });
    $('.arrow-left').on('click', function(e){
        e.preventDefault()
        mySwiper.swipePrev()
    })
    $('.arrow-right').on('click', function(e){
        e.preventDefault()
        mySwiper.swipeNext()
    })
    //导航
    $(".nav li").on("click",function(){
        $(".nav li").find("a").removeClass("active");
        $(this).find("a").addClass("active");
    });
    //列表高亮
    $(".toolCon-image li").hover(function(){
        $(".toolCon-image li").find(".toolCon-imageCaption").show();
        $(".toolCon-image li").find(".toolCon-imageCover").hide();
        $(this).find(".toolCon-imageCaption").hide();
        $(this).find(".toolCon-imageCover").show();
    }, function() {
        $(this).find(".toolCon-imageCaption").show();
        $(this).find(".toolCon-imageCover").hide();
    });
    //点击加载更多
    $(".gameCon-seeMore").on("click",function(){
        var url = "data.json";
        $.ajax({
            type: "POST",
            url: url,
            data:"",
            dataType: "json",
            success: function(data){
                listAjax(data);
            },
            error:function(){
                alert(数据加载失败);
            }
        });
    });
    // 隐藏右侧浮窗
    $(".closeBtn").on("click", function() {
        $(this).parent().parent().hide();
    });
});
