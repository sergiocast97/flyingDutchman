// When logging in, the username is stored in the browser, we use that
// to load the users information for the homepage


/**
 * Get the user's first name
 */
function getFirstName(){
    var currentUser = sessionStorage.getItem("username");

    var loadUserDetails = userDetails(currentUser);
    var firstName = loadUserDetails[2];
    return firstName;

}

/**
 * Get the user's surname
 */
function getLastName(){
    var currentUser = sessionStorage.getItem("username");

    var loadUserDetails = userDetails(currentUser);
    var lastName = loadUserDetails[3];
    return lastName;

}

/**
 * Get user's balance
 */
function getBalance(){
    var currentUser = sessionStorage.getItem("username");

    var loadUserDetails = userDetails(currentUser);
    var balance = loadUserDetails[6];
    return balance;

}

/**
 * Get user's profile picture
 */
function getPicture(){
    var currentUser = sessionStorage.getItem("username");

    var loadUserDetails = userDetails(currentUser);
    var picture = loadUserDetails[666];
    return picture;

}

/**
 * Load the user data on Homepage
 */
$(function() {

    $('#name').append(getFirstName() + " " + getLastName());
    $('#balance').append(getBalance() + "Kr");
    $("#userPic").attr("src", getPicture());

});