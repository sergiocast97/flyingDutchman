//import "/Dutchman Files/DBLoaded";

//TODO: Correct homepage for correct user & catch exception if username does not exist

function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var user = userDetails(username);
    //console.log(user);


        //check if username and password is correct
        //if correct - redirected to your homepage
        //if wrong - reload login-page

        if (user.includes(username) && user.includes(password)) {
            alert("Login successfully");
            sessionStorage.setItem("user_id", user[0]);
            console.log(document.getElementById("login").innerHTML = sessionStorage.getItem("user_id"));
            window.location = "home.html";

        } else {
            alert("Login not successful");
            window.location = "login.html";

        }

}