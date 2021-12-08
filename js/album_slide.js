$(function(){
    $('.prev').click(function(){
            $('#ho-zon-list li:last').prependTo('#ho-zon-list');
            $('#ho-zon-list').css('margin-left',-1804);
            $('#ho-zon-list').stop().animate({marginLeft:0},800)
    });
        
    $('.next').click(function(){
            $('#ho-zon-list').stop().animate({marginLeft:-1804},800, function(){
            $('#ho-zon-list li:first').appendTo('#ho-zon-list');
            $('#ho-zon-list').css({marginLeft:0});
            });

    });

});