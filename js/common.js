$("document").ready(function () {

    $("html *").attr("data-dark", "false")


    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        console.log(pos)
        if(pos >= 100){
            $(".header").addClass("on")
            $(".header h1").find("img").attr("src", "images/logo-c97189.png")
        }else{
            $(".header").removeClass("on")
            $(".header h1").find("img").attr("src", "images/logo.png")
        }
    })

    $(".m-btn").click(function(){
        $(".m-btn").toggleClass("on")
        $(".m-nav").toggleClass("on")
    })

    // 모달창
    $(".window, .close").click(function(){
        $(".window, .window-content").slideUp();
        $("html, body").css("overflow", "visible")
    })

    // 모바일 햄버거 메뉴 해상도 640이상이면 없어지기
    function Resize(){
        if($(window).width() > 640){
            $(".m-nav, .m-btn").removeClass("on")
        }
    }
    Resize();
    $(window).resize(function(){
        Resize()
    })
    //  다크모드

    const dark_mode = localStorage.getItem("dark_mode");
    console.log(dark_mode)

    if(!dark_mode){
        $("html *").attr("data-dark", "false");
        $(".dark-btn i").eq(0).removeClass("fa-sun").addClass("fa-moon");
    }else{
        $("html *").attr("data-dark", "true");
        $(".dark-btn i").eq(0).removeClass("fa-moon").addClass("fa-sun");
    }

    $(".dark-btn").click(function(e){

        if($("html *").attr("data-dark") == "true"){
            $("html *").attr("data-dark", "false");
            localStorage.removeItem("dark_mode")
            $(this).find("span").text("다크 모드로 보기")
            $(this).css("width", "150px");

        }else{
            $("html *").attr("data-dark", "true");
            localStorage.setItem("dark_mode", "fa-moon")
            $(this).find("span").text("라이트 모드로 보기");
            $(this).css("width", "165px");
        }
        $(this).find("i").toggleClass("fa-sun fa-moon");
    })
    
    $(".go-top").click(function(){
        $("html, body").stop().animate({
            scrollTop: 0
        },1000)
    })


    AOS.init();
    
});