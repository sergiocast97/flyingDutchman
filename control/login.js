
//TODO: catch exception if username does not exist

/**
 * Login the user into the application
 */
function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var user = userDetails(username);


        //check if username and password is correct
        //if correct - redirected to your homepage
        //if wrong - reload login-page

        if (user.includes(username) && user.includes(password)) {
            sessionStorage.setItem("username", user[1]);
            window.location = "menu";

        } else {
            alert("Login not successful");
            window.location = "login";

        }

}

/**
 * Log the user out
 */
function logout(){
    // Doesn't work
    sessionStorage.clear();
    window.location = "menu";
}

/**
 * Register a new user on the databse
 */
function register(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var user = userDetails(username);


        // Check if users exists, if not, create new user

        if (user.includes(username) && user.includes(password)) {
            sessionStorage.setItem("username", user[1]);
            window.location = "menu";

        } else {
            alert("Login not successful");
            window.location = "register";

        }

}