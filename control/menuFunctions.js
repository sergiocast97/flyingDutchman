//Function to switch panel
$(function() {

    $('.tabPanel .tabs li').on('click', function() {

        var $panel = $(this).closest('.tabPanel');

        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');


        var panelToShow = $(this).attr('rel');


        $panel.find('.panel.active').slideUp(300, showNextPanel);


        function showNextPanel() {
            $(this).removeClass('active');

            $('#'+panelToShow).slideDown(300, function() {
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
            scrollTop: $($(this).attr('href')).offset().top - 185 //here adjusting the height since tab menu is "fixed on top
        }, 500, 'linear');
    });

});