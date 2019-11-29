'use strict';

$(document).ready(function () {

    // Scroll line in section Plan
    $(window).scroll(function () {
        let $heroBox = $('#hero-container');
        let $heroDesc = $('.hero__desc');
        let $heroFade = $('.hero__fade');
        let windowBottom = $(this).scrollTop() + $(this).height();
        let elementTop = $heroBox.offset().top;
        let percentage = (windowBottom - elementTop) / $heroBox.height();

        if (percentage >= 1) {
            $heroFade.css('opacity', '1');
            $heroDesc.css('opacity', '0');
        } else if (windowBottom >= elementTop) {

            $heroFade.css('opacity',percentage);
            $heroDesc.css('opacity', 1 - percentage);
            console.log(percentage);
        } else {
            $heroFade.css('opacity', '0');
            $heroDesc.css('opacity', '1');
        }
    });
});