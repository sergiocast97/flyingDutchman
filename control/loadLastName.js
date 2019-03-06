
//When we log in, the username is stored in the browser, we use that
// to load the users information for the homepage


function getLastName(){
    var currentUser = sessionStorage.getItem("username");
    console.log(currentUser);

    var loadUserDetails = userDetails(currentUser);
    var lastName = loadUserDetails[3];
    console.log(lastName);
    return lastName;

}