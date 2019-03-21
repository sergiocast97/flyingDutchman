/* Set the width of the side navigation to 250px */
function openNav() {
    $("#mySidenav").css('width','30%');
    $("navOpener").css('display','none');
    $(".dark").css({
        'visibility': 'visible',
        'opacity': '1',
    })
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    $("#mySidenav").css('width','0');
    $("navOpener").css('display','block');
    $(".dark").css({
        'visibility': 'hidden',
        'opacity': '0',
    })
}
