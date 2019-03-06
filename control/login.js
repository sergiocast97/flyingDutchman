//import "/Dutchman Files/DBLoaded";

//TODO: Fix "DB is not defined in loader.js" and correct homepage for correct user

function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

   // userDetails()
   // {
        //check if username and password is correct
        //if correct - redirected to your homepage
        //if wrong - reload login-page

        if (username == DB.users.username && password == DB.users.password) {
            alert("Login successfully");
            sessionStorage.setItem("user_id", DB.users.user_id);
            console.log(document.getElementById("login").innerHTML = sessionStorage.getItem("user_id"));
            window.location = "home.html";

        } else {
            alert("Login not successful");
            window.location = "login.html";

        }
   // }
}