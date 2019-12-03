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
            
            // $heroDesc.css('opacity', 1 - percentage);
            if ( percentage < 0.3) {
                $heroDesc.css('opacity', '1').css('transition', 'all ease 2s');
                $('.hero__bottom').css('opacity', '1').css('transition', 'all ease 2s');
                $('.hero__img').css('transform', 'scale(1)').css('transition', 'all ease 2s');
            }
            if ( percentage > 0.3) {
                $('.hero__bottom').css('opacity', 1 - percentage).css('transition', 'all ease 2s');
                // $heroDesc.css('opacity', '1');
                $heroDesc.css('opacity', 1 - percentage).css('transition', 'all ease 2s');
                $('.hero__img').css('transform', 'scale(1.2)').css('transition', 'all ease 2s');
            } 
            if ( percentage < 0.5 ) {
                $('.hero__bottom-mouse').css('z-index', '1');
            }
            if ( percentage > 0.5 ) {
                $heroDesc.css('opacity', '0').css('transition', 'all ease 1s');
                $('.hero__bottom').css('opacity', '0').css('transition', 'all ease 1s');
                $('.hero__bottom-mouse').css('z-index', '0');
            } 
            if (percentage < 0.6) {
                $heroFade.css('opacity', '0').css('transition', 'all ease 1s');
            }
            if (percentage > 0.6) {
                $heroFade.css('opacity', percentage);
                // $('.hero__fade-line').height((1 - (1 - percentage))*200);
            }
            if (percentage > 0.95) {
                $('header').css('position', 'fixed');
            } else {
                $('header').css('position', 'relative');
            }
            // console.log(percentage);
        } else {
            $heroFade.css('opacity', '0');
            $heroDesc.css('opacity', '1');
        }
    });

    // Menu in Header
    let $btn = $('.header__menu-line');
    let $navMenu = $('.header__menu-mobile');

    $('.header__menu-btn, .header__item-mobile').on('click', function () {
        if (!($btn.hasClass('active'))) {
            $btn.addClass('active');
            $navMenu.addClass('active');
            $('body').toggleClass('active');
        } else {
            $btn.removeClass('active');
            $navMenu.removeClass('active');
            $('body').toggleClass('active');
        }

    });
});