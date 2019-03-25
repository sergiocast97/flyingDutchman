
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
    
    // Getting all the user details
    let username = document.getElementById("username").value;
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let userId = Math.max(1000, 1001); // Get highest ID

    // Adding user to database
    DB.users.push({
        user_id         : userId,
        credentials     : "0",
        password        : password,
        username        : username,
        first_name      : name,
        last_name       : surname,
        email           : email,
        phone           : "-",
    });

    // Adding credit to user
    DB.account.push({
        user_id         : userId,
        creditSEK       : "0",
    });

    login();

}