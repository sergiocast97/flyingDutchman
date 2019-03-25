$(function(){

    if(sessionStorage.getItem("username") != null ){

        $(".sidenav_login").css('display','none');
        $(".sidenav_user").css('display','block');
        $(".tray-bottom").css("display","block");
        $(".trayPanel").css('display','block');

    } else {

        $(".sidenav_login").css('display','block');
        $(".sidenav_user").css('display','none');
        $(".tray-bottom").css("display","none");
        $(".trayPanel").css('display','none');

    }

});