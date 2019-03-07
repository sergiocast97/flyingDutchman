
//TODO: catch exception if username does not exist

function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var user = userDetails(username);


        //check if username and password is correct
        //if correct - redirected to your homepage
        //if wrong - reload login-page

        if (user.includes(username) && user.includes(password)) {
            sessionStorage.setItem("username", user[1]);
            window.location = "home";

        } else {
            alert("Login not successful");
            window.location = "login";

        }

}