/***************************************************************************************************************
||||||||||||||||||||||||||||       MASTER jQuery Function FOR Aristo Chemcials &amp; Aromatics       |||||||||||||||||||||||||||||||||
****************************************************************************************************************
||||||||||||||||||||||||||||              TABLE OF CONTENT                  ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************
****************************************************************************************************************

1. revolutionSliderActiver
2. selectMenu
3. stickyHeader
4. fleetGallery
5. typed
6. mobileNavToggler
7. gMap
8. accrodion

****************************************************************************************************************
||||||||||||||||||||||||||||            End TABLE OF CONTENT                ||||||||||||||||||||||||||||||||||||
****************************************************************************************************************/


"use strict"; // Start of use strict

// 1. revolution slider
function revolutionSliderActiver() {
    if ($('.rev_slider_wrapper #slider1').length) {
        jQuery("#slider1").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 5000,
            navigation: {
                arrows: { enable: true }
            },
            gridwidth: 1170,
            gridheight: 726
        });
    };
    if ($('.rev_slider_wrapper #slider2').length) {
        jQuery("#slider2").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 5000,
            navigation: {
                arrows: { enable: true }
            },
            gridwidth: 1170,
            gridheight: 726
        });
    };
}

$('.pro-sliders').owlCarousel({
    loop: true,
    margin: 30,
    items: 4,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        481: {
            items: 2
        },
        700: {
            items: 3
        },
        992: {
            items: 3,
        }
    }
});


$('.testimonial-slider').owlCarousel({
    loop: true,
    //margin:10,
    //nav:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


$('.testimonial-sliders').owlCarousel({
    loop: false,
    margin: 30,
    items: 2,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        1200: {
            items: 2
        }
    }
})


$('.client-slider').owlCarousel({
    loop: true,
    margin: 27,
    nav: false,
    dots: false,
    autoWidth: true,
    autoplay: true,
    responsive: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            autoWidth: false
        },
        480: {
            items: 2,
            autoWidth: false
        },
        600: {
            items: 3,
            autoWidth: false
        },
        1000: {
            items: 6,
            autoWidth: false
        }
    }
})

// 4. select menu
function selectMenu() {
    if ($('.select-menu').length) {
        $('.select-menu').selectmenu();
    };
}

// 9. sticky header
function stickyHeader() {
    if ($('.stricky').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').removeClass('fadeIn animated');
            $('.stricky').addClass('stricky-fixed fadeInDown animated');
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed fadeInDown animated');
            $('.stricky').addClass('slideIn animated');
        }
    };
}
// 10. gallery
function fleetGallery() {
    if ($('.fleet-gallery').length) {
        $('.fleet-gallery').mixItUp();
    };
}
// 11. typed plugin
function typed() {
    if ($(".typed").length) {
        $(".typed").typed({
            stringsElement: $('.typed-strings'),
            typeSpeed: 200,
            backDelay: 1500,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function() { null; },
            resetCallback: function() { newTyped(); }
        });
    };
}
// 12. Mobile Navigation
function mobileNavToggler() {
    if ($('.nav-holder').length) {
        $('.nav-holder .nav-header button').on('click', function() {
            $('.nav-holder .nav-footer').slideToggle();
            return false;
        });
        $('.nav-holder li.has-submenu').children('a').append(function() {
            return '<button class="dropdown-expander"><i class="fa fa-chevron-down"></i></button>';
        });
        $('.nav-holder .nav-footer .dropdown-expander').on('click', function() {
            $(this).parent().parent().children('.submenu').slideToggle();
            console.log($(this).parents('li'));
            return false;
        });

    }
}
/*----------------------------------------------------*/
/*  Google Map
/*----------------------------------------------------*/
// Google Map
function gMap() {
    if ($('.google-map').length) {
        $('.google-map').each(function() {
            // getting options from html 
            var mapName = $(this).attr('id');
            var mapLat = $(this).data('map-lat');
            var mapLng = $(this).data('map-lng');
            var iconPath = $(this).data('icon-path');
            var mapZoom = $(this).data('map-zoom');
            var mapTitle = $(this).data('map-title');

            // if zoom not defined the zoom value will be 15;
            if (!mapZoom) {
                var mapZoom = 15;
            };
            // init map
            var map;
            map = new GMaps({
                div: '#' + mapName,
                scrollwheel: false,
                lat: mapLat,
                lng: mapLng,
                zoom: mapZoom
            });
            // if icon path setted then show marker
            if (iconPath) {
                map.addMarker({
                    icon: iconPath,
                    lat: mapLat,
                    lng: mapLng,
                    title: mapTitle
                });
            }
        });
    };
}

function accrodion() {
    if ($('.accrodion-grp').length) {

        $('.accrodion-grp').each(function() {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            Self.find('.accrodion').each(function() {
                $(this).find('.accrodion-title').on('click', function() {
                    if ($(this).parent().hasClass('active') === false) {
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.' + accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().addClass('active');
                        $(this).parent().find('.accrodion-content').slideDown();
                    };
                });
            });
        });

    };
}

// instance of fuction while Document ready event	
jQuery(document).on('ready', function() {
    (function($) {
        revolutionSliderActiver();
        selectMenu();
        gMap();
        typed();
        accrodion();
        mobileNavToggler();
    })(jQuery);
});

// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function() {
    (function($) {
        stickyHeader();
    })(jQuery);
});
