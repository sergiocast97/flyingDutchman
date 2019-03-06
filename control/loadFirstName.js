
//When we log in, the username is stored in the browser, we use that
// to load the users information for the homepage

function getFirstName(){
    var currentUser = sessionStorage.getItem("username");
    console.log(currentUser);

    var loadUserDetails = userDetails(currentUser);
    var firstName = loadUserDetails[2];
    console.log(firstName);
    return firstName;

}