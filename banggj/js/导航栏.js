window.onload = function() {
    $(".btn").click(function(){
        $(".nav").slideToggle();
    })
    $(window).resize(function(){
        if ($(window).width() > 600) {
            $('.header .nav').show();
        } else{
            $('.header .nav').hide();
        }
    })
}