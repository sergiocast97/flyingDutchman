function getLastName(){
    var currentUser = sessionStorage.getItem("username");
    console.log(currentUser);

    var loadUserDetails = userDetails(currentUser);
    var lastName = loadUserDetails[3];
    console.log(lastName);
    return lastName;

}