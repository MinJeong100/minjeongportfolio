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

});