// Menu view

$(function() {

    /**
     * Switch Panel function
     */
    $('.tabPanel .tabs li').on('click', function() {

        var $panel = $(this).closest('.tabPanel');

        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');


        var panelToShow = $(this).attr('rel');


        $panel.find('.drinkPanel.active').slideUp(400, showNextPanel);


        function showNextPanel() {
            $(this).removeClass('active');

            $('#'+panelToShow).slideDown(400, function() {
                $(this).addClass('active');
            });
        }
    });


    /**
     * Scroll to div function
     */
    $('.tabCategory').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 185 //here adjusting the height since tab menu is 'fixed' on top
        }, 500, 'swing');
    });


});

