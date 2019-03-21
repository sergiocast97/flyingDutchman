$(function(){

    if(sessionStorage.getItem("username") != null ){

        $(".sidenav_login").css('display','none');
        $(".sidenav_user").css('display','block');

    } else {

        $(".sidenav_login").css('display','block');
        $(".sidenav_user").css('display','none');

    }

});