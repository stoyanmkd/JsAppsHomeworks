$(document).ready(function(){
    var counter = 1;
    var currentImage = $('.gallery-content .slide:nth-of-type(' + counter + ')');
    $('.gallery-trigger:nth-of-type(1)').css( '53bacc');
    var target;
    currentImage.fadeIn('slow');
    var timingRun = setInterval(function() { galleryTiming(); },5000);

    // Catch the click trigger event
    $('.gallery-trigger').click(function(){
        $('.gallery-trigger').css('background-color', 'rgba(255, 255, 255, 0)');
        currentImage.fadeOut('slow');
        target = $('.gallery-trigger').index(this) + 1;
        $('.gallery-trigger:nth-of-type('+ target + ')').css('background-color','#53bacc');
        currentImage = $('.gallery-content .slide:nth-of-type(' + target + ')');
        setTimeout(function() {
            currentImage.fadeIn('slow');
            counter = target + 1;
        }, 500);
        resetTiming();
    });

    $('.left').click(function(){
        var previous = Number;
        if(counter < 2){
            previous = 4;
        } else {
            previous = counter - 1;
        }

        $('.gallery-trigger').css('background-color', 'rgba(255, 255, 255, 0)');
        $('.gallery-trigger:nth-of-type('+ previous + ')').css('background-color','#53bacc');

        currentImage.fadeOut('slow');
        currentImage = $('.gallery-content .slide:nth-of-type(' + previous + ')');
        setTimeout(function() {
            currentImage.fadeIn('slow');
            counter = previous;
        }, 500);
        resetTiming();
    });

    $('.right').click(function(){
        var next = Number;
        if(counter > 3){
            next = 1;
        } else {
            next = counter + 1;
        }

        $('.gallery-trigger').css('background-color', 'rgba(255, 255, 255, 0)');
        $('.gallery-trigger:nth-of-type('+ next + ')').css('background-color','#53bacc');

        currentImage.fadeOut('slow');
        currentImage = $('.gallery-content .slide:nth-of-type(' + next + ')');
        setTimeout(function() {
            currentImage.fadeIn('slow');
            counter = next;
        }, 500);
        resetTiming();
    });

    // Change slide on period of 5 secs
    function galleryTiming() {

        if(counter > 3) {
            currentImage.fadeOut('slow');
            setTimeout(function(){
                $('.gallery-trigger').css('background-color', 'rgba(255, 255, 255, 0)')}, 250);
            currentImage = $('.gallery-content .slide:nth-of-type(1)');
            setTimeout(function() {
                currentImage.fadeIn('slow');
                counter = 1;
                setTimeout(function(){
                    $('.gallery-trigger:nth-of-type('+ counter + ')').css('background-color', '#53bacc');
                }, 250);
            }, 500);
        } else {
            counter++;
            currentImage.fadeOut('slow');
            setTimeout(function(){
                $('.gallery-trigger').css('background-color', 'rgba(255, 255, 255, 0)');}, 250);
            currentImage = $('.gallery-content .slide:nth-of-type(' + counter + ')');
            setTimeout(function() {
                currentImage.fadeIn('slow');
                setTimeout(function(){
                    $('.gallery-trigger:nth-of-type('+ counter + ')').css('background-color', '#53bacc');
                }, 250);
            }, 500);
        }
    }

    // Resets the timing with new 5 secs after clicking on trigger
    function resetTiming() {
        clearInterval(timingRun);
        timingRun = setInterval(function() { galleryTiming(); },5000);
    }
});