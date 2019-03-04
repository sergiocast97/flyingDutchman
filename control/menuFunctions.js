<<<<<<< HEAD
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
=======
$("#tabBeers").click(function() {
    $('html,body').animate({
            scrollTop: $("#Beers").offset().top},
    500, 'linear');
});

$("#tabCiders").click(function() {
    $('html,body').animate({
            scrollTop: $("#Ciders").offset().top},
        500, 'linear');
});

$("#tabSpirits").click(function() {
    $('html,body').animate({
            scrollTop: $("#Spirits").offset().top},
        500, 'linear');
});

$("#tabWines").click(function() {
    $('html,body').animate({
            scrollTop: $("#Wines").offset().top},
        500, 'linear');
});
>>>>>>> 1ce2b36e885c4be204a62b7dcd4ada8d87b86538

