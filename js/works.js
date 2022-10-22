$("document").ready(function () {
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        console.log(pos)
        if(pos >= 150){
            $(".header").addClass("on")
            $(".header h1").find("img").attr("src", "images/logo-c97189.png")
        }else{
            $(".header").removeClass("on")
            $(".header h1").find("img").attr("src", "images/logo-c97189.png")
        }
    })

    let over_img = [
        "images/works-logo.jpg",
        "images/work-package02.jpg",
        "images/work-event03.jpg",
        "images/work-detail02.jpg",
    ]

    let out_img = [
        "images/works-logo.jpg",
        "images/works-package.jpg",
        "images/work-event01.jpg",
        "images/work-detail.jpg",
    ]

    $(".works-wrap .list li").mouseover(function () { 
        let i = $(this).index();
        $(".works-wrap .list li").eq(i).find("img").attr("src", over_img[i])
    }).mouseout(function(){
        let i = $(this).index();
        $(".works-wrap .list li").eq(i).find("img").attr("src", out_img[i])
    })

    let detail_img = [
        "images/detail-logo.jpg",
        "images/detail-package.jpg",
        "images/detail-eventpage.jpg",
        "images/detail-product-detail.jpg",
    ]

    $(".works-wrap .list li").click(function(){

        let i = $(".works-wrap .list li").index(this);

        $(".window").slideDown();
        $(".window-content").slideDown();
        $(".window-content").find("img").attr("src", detail_img[i])
        $("html, body").css("overflow", "hidden")
        if(i === 3){
            $(".window-content").css("width", "860px");
        }else{
            $(".window-content").css("width", "1000px");
        }
    })

    $(".window, .close").click(function(){
        $(".window, .window-content").slideUp();
        $("html, body").css("overflow", "visible")
    })


});