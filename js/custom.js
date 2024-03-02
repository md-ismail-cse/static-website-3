/*======================================
                Preloader
========================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});
/*======================================
                Wow 
========================================*/
$(function () {
    new WOW().init();
});

/*======================================
                Work
========================================*/
/* Work Slider */
$(function () {
    $("#work-item-box").owlCarousel({
        margin: 15,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left">', '<i class="fa fa-angle-right">'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            481: {
                items: 3
            }
        }
    });
});

/* Magnific popup*/
$(function () {
    $(".work-item-link").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*======================================
            Contact/Footer
========================================*/
$(function () {
    $('#gallery-item-box').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*======================================
            Navigation
========================================*/
// Show / Hide navigation
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("site-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            $("nav").addClass("site-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});

// Smooth scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 60
        }, 1250);
    });
});
// Close mobile menu on click
$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
});