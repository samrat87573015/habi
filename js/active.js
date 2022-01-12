(function($) {


    // loading
    $('#loading').preloadinator({
        minTime: 2000,

    });

    //   mobile menu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
    });


    // 02. Info Bar Js

    $(document).ready(function() {
        $(".header-bar").click(function() {
            $(".info-area-contant").toggleClass("show");
        });

        $(".colsed-btn").click(function() {
            $(".info-area-contant").toggleClass("closed");
        });

    });

    //portfolio active
    var $grid = $('.portfolio-active').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1,
        }
    })

    //active protfilio menu
    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    $('.portfolio-menu').on('click', 'button', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });



    // progressBar
    $(document).ready(function() {
        $(window).on("scroll", function() {
            $(".progress").each(function(index, progress) {
                var progressBar = $(progress).find(".progress-bar");
                var progressPercent = parseInt($(progressBar).attr("data-progress"));
                if ($(window).scrollTop() > $(progress).offset().top - 400) {
                    $(progressBar)
                        .css("width", progressPercent + "%")
                        .text(progressPercent + "%");
                }
            });
        });
    });


    //our team carousel
    $('.our-teme-active').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })


    //counter area
    jQuery(document).ready(function($) {
        $('.counter').counterUp({
            delay: 100,
            time: 1000,
            loop: false,


        });


    });


    //client review carousel
    $('.review-active').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    //aos animation
    AOS.init({
        offset: 120,
        duration: 2500,
        once: true,
    });



})(jQuery);