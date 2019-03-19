$(function(){

    $('.card').click(function(){

        $('#credit-field').hide();
        $('.credit').css('background-color','#EEE');
        
        $('#card-field').css('display','flex');
        $('.card').css('background-color','#DDD');

    });

    $('.credit').click(function(){

        $('#card-field').hide();
        $('.card').css('background-color','#EEE');
        
        $('#credit-field').css('display','flex');
        $('.credit').css('background-color','#DDD');
        
    });

});