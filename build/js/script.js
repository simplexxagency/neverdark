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
        // console.log(percentage);

        if (percentage >= 1) {
            $heroFade.css('opacity', '1');
            $heroDesc.css('opacity', '0');
        } else if (windowBottom >= elementTop) {

            // $heroDesc.css('opacity', 1 - percentage);
            if (percentage < 0.45) {
                $heroDesc.css('opacity', '1').css('transition', 'all ease 2s');
                $('.hero__bottom').css('opacity', '1').css('transition', 'all ease 2s');
                $('.hero__img').css('transform', 'scale(1)').css('transition', 'all ease 2s');
                $('.hero__bottom-mouse').css('z-index', '1');
            }
            if (percentage > 0.45) {
                $('.hero__bottom').css('opacity', 1 - percentage).css('transition', 'all ease 2s');
                // $heroDesc.css('opacity', '1');
                $heroDesc.css('opacity', 1 - percentage).css('transition', 'all ease 2s');
                $('.hero__img').css('transform', 'scale(1.4)').css('transition', 'all ease 2s');
            }
            // if ( percentage < 0.5 ) {
            //     $('.hero__bottom-mouse').css('z-index', '1');
            // }
            if (percentage > 0.55) {
                $heroDesc.css('opacity', '0').css('transition', 'all ease 1s');
                $('.hero__bottom').css('opacity', '0').css('transition', 'all ease 1s');
                $('.hero__bottom-mouse').css('z-index', '0');
            }
            if (percentage < 0.7) {
                $heroFade.css('opacity', '0').css('transition', 'all ease 1s');
            }
            if (percentage > 0.7) {
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

    $('.header__menu-btn').on('click', function () {
        if (!($btn.hasClass('active'))) {
            $btn.addClass('active');
            $navMenu.addClass('active');
            $('body').addClass('active');
        } else {
            $btn.removeClass('active');
            $navMenu.removeClass('active');
            $('body').removeClass('active');
        }

    });

    $('.header__item-mobile a').on('click', function () {
        $('.header__menu-line').removeClass('active');
        $('.header__menu-mobile').removeClass('active');
        $('body').removeClass('active');
    });

    // Slick in section Example
    $('.example__slider').slick({
        dots: false,
        arrows: true,
        // mobileFirst: true,
        swipe: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: false,
        nextArrow: $('.example__arrow-right'),
        prevArrow: $('.example__arrow-left'),
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // Slick in section Example
    $('.example__slider-second').slick({
        dots: false,
        arrows: true,
        // mobileFirst: true,
        swipe: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: false,
        nextArrow: $('.example__arrow-rightsecond'),
        prevArrow: $('.example__arrow-leftsecond'),
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // Slick for section Gallery
    var $status = $('.gallery__number');
    var $slickElement = $('.gallery__slider');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
    });

    $slickElement.slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: $('.gallery__arrow-right'),
        prevArrow: $('.gallery__arrow-left'),
    });

    // Subscribe pop-up
    $('.js-subscribe-modal').on('click', function () {
        $('body').addClass('active');
        $('.pop-up-subscribe').removeClass('passive');
    });

    $('.cover, .wrapper-close-pop-up').on('click', function () {
        $('body').removeClass('active');
        $(this).closest('.pop-up-mark').addClass('passive');
    });

    // Form Mask
    jQuery(function ($) {
        $('.phone').mask('+99 (999) 999-99-99');

    });

    // Smooth scroll
    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 1000);
        $('body'). removeClass('active');
        return false;
    });
});