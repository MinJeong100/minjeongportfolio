$("document").ready(function () {

    let Fullpage = new fullpage(".fullpage",{
        navigation: true,
        licenseKey : "603D3EBB-D1B84561-B40D98B6-7A87C3D7",
        // 모달 띄울시 fullpage 스크롤 막기
        normalScrollElements: '.window, .window-content',
        
    })
    
    let process_img = [
        "images/process-lego.jpg",
        "images/process-hellinox.jpg",
        "images/process-cswind.jpg",
        "images/process-winepick.jpg"
    ]
    $(".window, .close").click(function(){
        $(".window, .window-content").slideUp();
        $("html, body").css("overflow", "hidden")
    })

    $(".btn-wrap ul .process").click(function(){

        let i = $(".btn-wrap ul .process").index(this);
        
        console.log(process_img[i])
        $(".window").slideDown();
        $(".window-content").slideDown();
        $(".window-content").find("img").attr("src", process_img[i])
    })
        

});