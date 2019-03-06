function getFirstName(){
    var currentUser = sessionStorage.getItem("username");
    console.log(currentUser);

    var loadUserDetails = userDetails(currentUser);
    var firstName = loadUserDetails[2];
    console.log(firstName);
    return firstName;

}