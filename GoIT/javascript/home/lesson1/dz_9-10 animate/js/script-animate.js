
$(document).ready(function() {

    function loop() {
        $('.one__toRight').css({left:0});
        $('.one__toRight').animate ({
            left: '+=600',
        }, 5000, 'linear', function() {
            loop();
        });
    }
        
    loop();
 });