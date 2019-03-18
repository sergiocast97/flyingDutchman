/*
 * Internationalization
 * File used for language switching
 * 
*/

// Default language
$(function(){
        
    // Get the language from the hmtl tag
    let lang = $(document.documentElement).attr('lang');
    //alert("Language: " + lang);

    // Change the opacity
    $(".translate").css('opacity','0.5');
    $("#" + lang).css('opacity','1');

    // Take every translatable element (with lang class)
    $('.lang').each(function(index, element){

        // Deal with inputs
        let attr = $(this).attr('placeholder');
        if (typeof attr !== typeof undefined && attr !== false) {
            // The placeholder is populated, instead of the text
            $(this).attr('placeholder', language_list[lang][$(this).attr('key')]);
        } else{
            // Use the right resource
            $(this).text(language_list[lang][$(this).attr('key')]);
        }

    });
});

// Language Selection
$(function(){

    // When clicking element with translate class
    $('.translate').click(function(){

        // Select the language by id
        let lang = $(this).attr('id');
        //alert("Language: " + lang);

        // Change the opacity
        $(".translate").css('opacity','0.5');
        $(this).css('opacity','1');

        // Take every translatable element (with lang class)
        $('.lang').each(function(index, element){

            // Deal with inputs
            let attr = $(this).attr('placeholder');
            if (typeof attr !== typeof undefined && attr !== false) {
                // The placeholder is populated, instead of the text
                $(this).attr('placeholder', language_list[lang][$(this).attr('key')]);
            } else{
                // Use the right resource
                $(this).text(language_list[lang][$(this).attr('key')]);
            }
            
        });

    });

});