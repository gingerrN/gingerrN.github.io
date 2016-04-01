

$(function() {
    renderImg(false);

    $('#search__button').submit( function(e) {
        e.preventDefault();

        renderImg(true);

        $('.ideas__holiday').html('');
        $('.searchPartners__value').val('');

    });


        function renderImg(ifSubmit) {
        var size = 'tb';
        var myRequest = $(".searchPartners__value").val();
        var my_url = 'http://api.pixplorer.co.uk/image?word='+ myRequest +'&amount=7&size='+ size;
        $.ajax({
            type: 'GET',
            url: my_url,
            dataType: 'json',
            success: function (data){
               /* $('.text .counter').html(data.counter);*/

                $.each(data.images, function(index, value){

                    $('<div>').attr({ 'class': 'grid-item' }).appendTo('.ideas__holiday');

                    $('<img>').attr({ 'src': value.imageurl}).appendTo('.grid-item:last-child');

                    $('<p>').attr({ 'class': 'holiday__text' }).text(value.word).appendTo('.grid-item:last-child');
                });

                //image layout
                var $grid = $('.grid').imagesLoaded( function() {
                // init Masonry after all images have loaded

                if (ifSubmit){
                    $grid.masonry('reloadItems'); //must run only on submit;
                }
               
                $grid.masonry({
                      itemSelector: '.grid-item',
                      columnWidth: 200
                  });
                });
            }
        });
    }


});
