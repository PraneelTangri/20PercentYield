$(document).ready(function() {
    $("#nav-btn").click(function(){
        $("nav").toggleClass("slideOpen");
        $(".logo-section").toggleClass("nav-open");
    })

    var logoScrolled=false;
    var codeScrolled=false;
    var signalScrolled=false;
    $(".logo-waypoint").waypoint(function(direction){
        if(!logoScrolled){
            const x = $(".logo-section").offset();
            $("html, body").animate({
                scrollTop: x.top
              }, 1000)
            logoScrolled=true;
        }
        $(".logo-section").removeClass("invisible")
        $(".logo-section .left").addClass('animate__animated animate__bounceInLeft')
        $(".logo-section .right").addClass('animate__animated animate__bounceInRight')
    })
    $(".code-waypoint").waypoint(function(direction){
        if(!codeScrolled){
            const x = $(".code-section").offset();
            $("html, body").animate({
                scrollTop: x.top
              }, 1000)
            codeScrolled=true;
        }
        $(".code-section").removeClass("invisible")
        $(".code-section .left").addClass('animate__animated animate__bounceInLeft animate__slow')
        $(".code-section .right").addClass('animate__animated animate__bounceInRight animate__slow')
    })
    $(".signal-waypoint").waypoint(function(direction){
        if(!signalScrolled){
            const x = $(".signal-section").offset();
            $("html, body").animate({
                scrollTop: x.top
              }, 1000)
            signalScrolled=true;
        }
        $(".signal-section").removeClass("invisible")
        $(".signal-section").addClass('animate__animated animate__fadeInDown')
    })
});