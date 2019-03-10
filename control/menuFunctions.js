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

=======
//Function to switch panel
>>>>>>> 067b9c628b49cbafd8012c6d7a8e956784431769
$(function() {


    $('.tabPanel .tabs li').on('click', function() {

        var $panel = $(this).closest('.tabPanel');

        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');


        var panelToShow = $(this).attr('rel');


<<<<<<< HEAD
        $panel.find('.panel.active').slideUp(300, swing, showNextPanel);
=======
        $panel.find('.panel.active').slideUp(400, showNextPanel);
>>>>>>> 067b9c628b49cbafd8012c6d7a8e956784431769


        function showNextPanel() {
            $(this).removeClass('active');

            $('#'+panelToShow).slideDown(400, function() {
                $(this).addClass('active');
            });
        }
    });


});


//Scroll to div function
$(function () {
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 185 //here adjusting the height since tab menu is 'fixed' on top
        }, 500, 'linear');
    });

});

