
// When logging in, the username is stored in the browser, we use that
// to load the users information for the homepage


/**
 * Get the user's first name
 */
function getFirstName(){
    var currentUser = sessionStorage.getItem("username");
    console.log(currentUser);

    var loadUserDetails = userDetails(currentUser);
    var firstName = loadUserDetails[2];
    console.log(firstName);
    return firstName;

}

/**
 * Get the user's surname
 */
function getLastName(){
    var currentUser = sessionStorage.getItem("username");
    console.log(currentUser);

    var loadUserDetails = userDetails(currentUser);
    var lastName = loadUserDetails[3];
    console.log(lastName);
    return lastName;

}

/**
 * Get user's balance
 */
function getBalance(){
    var currentUser = sessionStorage.getItem("username");
    console.log(currentUser);

    var loadUserDetails = userDetails(currentUser);
    var balance = loadUserDetails[6];
    console.log(balance);
    return balance;

}