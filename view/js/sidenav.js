/* Set the width of the side navigation to 250px */
function openNav() {
    $("#mySidenav").css('width','25%');
    $(".dark").css({
        'visibility': 'visible',
        'opacity': '1',
    })
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    $("#mySidenav").css('width','0');
    $(".dark").css({
        'visibility': 'hidden',
        'opacity': '0',
    })
}
