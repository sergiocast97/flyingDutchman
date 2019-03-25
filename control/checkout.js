
function payCredit(amount){
    var username = sessionStorage.getItem("username");
    var credit = getBalance();
    var newCredit = credit - amount;

    if (newCredit >= 0){
        console.log(newCredit);
        changeBalance(username, newCredit);
        console.log("payment successfull");
    } else {
        alert("Not enough credit, choose another payment");
    }
}

function getAmount(){
    var amount = localStorage.getItem('paymentAmount');
    console.log(amount);
    return (amount + "kr");
}











$(function(){

    /**
     * Add the amount in the checkout
     */
    /*
    $(".payment-quantity").append( localStorage["paymentAmount"] + "Kr");
    */
    /**
     * When clicking the card option
     * the card form appears
     */
    $('.card').click(function(){

        $('#credit-field').hide();
        $('.credit').css('background-color','#EEE');

        $('#card-field').css('display','flex');
        $('.card').css('background-color','#DDD');

    });

    /**
     * When clicking the credit option
     * the credit form appears
     */
    $('.credit').click(function(){

        $('#card-field').hide();
        $('.card').css('background-color','#EEE');

        $('#credit-field').css('display','flex');
        $('.credit').css('background-color','#DDD');

    });

    /**
     * When clicking the back button
     * Amount resets and goes back to menu
     */
    $('.back-btn').click(function(){

        //clean data in localStorage
        localStorage.clear();
        location.href = 'menu';

    });

});