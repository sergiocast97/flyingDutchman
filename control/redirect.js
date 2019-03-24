// Check the current location
//alert($(location).attr("pathname").split('/')[2]);




switch( $(location).attr("pathname").split('/')[2] ){

    case "register":
    case "register.hmtl":
    case "login" :
    case "login.html":
        // If user is logged, redirect to menu
        if(sessionStorage.getItem("username") != null ){
            //alert("There's a user here");
            window.location.replace("menu");
        }
    break;

    case "checkout" :
    case "checkout.html" :
        // If user is not logged, redirect to login
        if(sessionStorage.getItem("username") == null ){
            //alert("There's a user here");
            window.location.replace("login");
        }
    break;

    // On the menu, no redirections
    case "menu.html":
    case "menu" : /* Do nothing */ ; break;

    // Make the menu the main page
    default: window.location.replace("menu");

}


