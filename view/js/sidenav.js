/* Set the width of the side navigation to 250px */
function openNav() {
    $("#mySidenav").css('width','25%');
    $(".navOpener").css('right','25%').attr('onclick','closeNav()');
    $(".dark").css({
        'visibility': 'visible',
        'opacity': '1',
    })
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    $("#mySidenav").css('width','0');
    $(".navOpener").css('right','0').attr('onclick','openNav()');
    $(".dark").css({
        'visibility': 'hidden',
        'opacity': '0',
    })
}
