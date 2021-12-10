


$(function(){
    $('#logo_menu').click(function(){
        $(".large").slideToggle("slow");
    })
    $("#close_menu").click(function(){
        $(".large").slideToggle("slow");
    })
})

$(window).resize(function(){
    if(window.innerWidth>=1000){
        $('.large').show();
    }
});