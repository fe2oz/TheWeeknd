


$(function(){
    $('#logo_menu').click(function(){
        $(".large").slideToggle("slow");
        $("#close_menu").css("display", "block")
    })
    $("#close_menu").click(function(){
        $(".large").slideToggle("slow");
        $(this).css("display", "none")
    })
})

$(window).resize(function(){
    if(window.innerWidth>=1000){
        $('.large').show();
    }
});