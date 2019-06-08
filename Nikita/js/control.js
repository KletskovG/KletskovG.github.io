$(function(){

    "use srict";

    $('.title_box').click(function(){

        $(this).toggleClass('open');
        $(this).next('.list_link').toggleClass('open');

    });

    $('#slider_price').slider({
        max: 1000,
        min: 0,
        range: true,
        values: [100,900],
        slide: function( event, ui ) {
            $('input[name="minPrice"]').val( '$' + ui.values[0] );
            $('input[name="maxPrice"]').val( '$' + ui.values[1] );
        }
    });

    $('input[name="minPrice"]').val( '$' +
    $('#slider_price').slider('values',0) );
    $('input[name="maxPrice"]').val( '$' +
    $('#slider_price').slider('values',1) );

});

