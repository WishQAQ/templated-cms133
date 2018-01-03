$(document).ready(function(){
    $('.codepic').hover(function(){$('.code').fadeIn()},function(){$('.code').fadeOut()});
    $('.backup').click(function(){
        $('body,html').animate({scrollTop:0},500)
    });
    $(".backup").hide();
    $(function () {
        $(window).scroll(function(){
            if ($(window).scrollTop()>500){
                $(".backup").fadeIn(1000);
            }else{
                $(".backup").fadeOut(1000);
            }
        });
    });
    var nav_ul = $(".nav li");
    nav_ul.hover(function(){
        $(this).addClass("hover");
        $(this).find("dl").stop(true,true).slideDown();
    },function(){
        $(this).removeClass("hover");
        $(this).find("dl").stop(true,true).slideUp();
    });
    $(".banner").slide({ titCell:".num ul" , mainCell:".banner_pic" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });

    var i= 0,
        con1Ul = $(".con1_class ul"),
        liLeng = con1Ul.find("li").length - 9;
    function classGoTop(){
        if(con1Ul.find("li").length>8){
            i<=liLeng ? i++ : i=0;
            con1Ul.animate({"top":-i*42+"px"},200);
        }
    }
    function classGoBottom(){
        if(con1Ul.find("li").length>8){
            i<=0 ? i=liLeng+1 : i--;
            con1Ul.animate({"top":-i*42+"px"},200);
        }
    }

    $(".class_up").bind("click",classGoTop);
    $(".class_down").bind("click",classGoBottom);



    var picShow = "<div id='picShow'><div class='pic_show_box'><div class='pic_quit'></div><a href='javascript:;' title='上一张' class='lbtn'></a><a href='javascript:;' title='下一张' class='rbtn'></a><img width='593' height='442' alt='' /><p><a href='' id='picLink'></a></p></div></div>";
    $(".zoom").click(function(){
        var _this = $(this),liIndex,picUrl,picShowBod,leng,_val,_href;
        liIndex = _this.parents("li").index();
        picUrl = _this.parents(".con1_img").find("img").attr("src");
        _href = _this.parents("li").find("a").attr("href");
        _this.parents("body").append(picShow);
        picShowBod = $(".pic_show_box");
        picShowBod.find("img").attr("src",picUrl);
        _val = _this.parents("li").find("p").find("a").text();
        $("#picLink").text(_val);
        $("#picLink").attr("href",_href);
        leng = _this.parents(".con1_right").find(".con1_img").length;
        $(".lbtn").click(function(){
            if(liIndex>0){
                picUrl = _this.parents(".con1_right").find(".con1_img").eq(liIndex-1).find("img").attr("src");
                _val = _this.parents(".con1_right").find("li").eq(liIndex-1).find("p").find("a").text();
                _href = _this.parents(".con1_right").find("li").eq(liIndex-1).find("p").find("a").attr("href");
                $("#picLink").text(_val);
                picShowBod.find("img").attr("src",picUrl);
                $("#picLink").attr("href",_href);
                return liIndex--;
            }else{
                picUrl = _this.parents(".con1_right").find(".con1_img").eq(leng-1).find("img").attr("src");
                _val = _this.parents(".con1_right").find("li").eq(leng-1).find("p").find("a").text();
                _href = _this.parents(".con1_right").find("li").eq(leng-1).find("p").find("a").attr("href");
                $("#picLink").text(_val);
                picShowBod.find("img").attr("src",picUrl);
                $("#picLink").attr("href",_href);
                liIndex = leng-1;
                return liIndex;
            }
        });
        $(".rbtn").click(function(){
            if(liIndex<leng-1){
                picUrl = _this.parents(".con1_right").find(".con1_img").eq(liIndex+1).find("img").attr("src");
                _val = _this.parents(".con1_right").find("li").eq(liIndex+1).find("p").find("a").text();
                _href = _this.parents(".con1_right").find("li").eq(liIndex+1).find("p").find("a").attr("href");
                $("#picLink").text(_val);
                $(".pic_show_box").find("img").attr("src",picUrl);
                $("#picLink").attr("href",_href);
                return liIndex++;
            }else{
                picUrl = _this.parents(".con1_right").find(".con1_img").eq(0).find("img").attr("src");
                _val = _this.parents(".con1_right").find("li").eq(0).find("p").find("a").text();
                _href = _this.parents(".con1_right").find("li").eq(0).find("p").find("a").attr("href");
                $("#picLink").text(_val);
                $(".pic_show_box").find("img").attr("src",picUrl);
                $("#picLink").attr("href",_href);
                liIndex = 0;
                return liIndex;
            }
        });
        $(".pic_quit").click(function(){
            $("#picShow").remove();
        });
    });

    /* 通用 */
    $(".vip_address_close").click(function(){
        $(this).parents("li").remove();
    });
    $(".type_choose span").click(function(){
        if($(this).hasClass("type_company")){
            $(".if_company").slideDown();
            $(this).parents(".type_choose").find("span").removeClass("border_color");
            $(this).addClass("border_color");
        }else{
            $(".if_company").slideUp();
            $(this).parents(".type_choose").find("span").removeClass("border_color");
            $(this).addClass("border_color");
        }
    });
    $(".type_choose2 span").click(function(){
        $(this).parents(".type_choose2").find("span").removeClass("border_color");
        $(this).addClass("border_color");
    });
    $(".cart_address").eq(0).show();
    $(".more_address").click(function(){
        $(".cart_address").slideDown();
    });
    $(".cart_del").click(function(){
        $(this).parents("tr").remove();
    });
    $(".product_about_box").eq(0).show();
    $(".product_about_top span").click(function(){
        var _index = $(this).index();
        $(".product_about_top span").removeClass("on");
        $(this).addClass("on");
        $(".product_about_box").hide();
        $(".product_about_box").eq(_index).stop(true,true).show();
    });

    var starPF = $(".star_score span").text();
    $(".star_score_box p").css("width",starPF/5*100 + 2 + "%");
    /* 通用 */
    $(".con1_img").hover(function(){
        $(this).find(".zoom").stop(true,true).fadeIn();
    },function(){
        $(this).find(".zoom").stop(true,true).fadeOut();
    });
});