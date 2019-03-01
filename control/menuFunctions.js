$(document).ready(function() {
$("#tabBeers").click(function(e) {
    $('html, body').animate({
        scrollTop: $("#Beers_container").offset().top
    }, 1000);
});

$("#tabCiders").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#Ciders_container").offset().top
    }, 1000);
});

$("#tabSpirits").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#Spirits").offset().top
    }, 1000);
});

$("#tabWines").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#Wines").offset().top
    }, 2000);
});
})

