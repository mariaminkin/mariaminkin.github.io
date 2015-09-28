/*global $*/

(function(){
    'use strict';

    function updateUrlHash(href) {
        if (href === '#page-top') {
            window.history.pushState({}, '', ' ');
        } else {
            window.history.pushState({}, '', href);
        }
    }


    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        var copy = $('.copyright');

        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');

            // window.location.h = $anchor.attr('href');
            event.preventDefault();

            if (window.history &&  window.history.pushState) {
                updateUrlHash($anchor.attr('href'));
            }
        });

        // make scrollspy change the url hash according to the current section
        $(window).on('activate.bs.scrollspy', function (e) {
            var href = $("a[href^='#']", e.target).attr("href");

            updateUrlHash(href);
        });

        copy.html(copy.html() + ' ' + (new Date()).getFullYear());

        // setTimeout(function(){
        //     $('a.hire-me').attr('href', 'mailto:email');
        // }, 1000)

        var _0x31a3=["\x68\x72\x65\x66","\x6D\x61\x69\x6C\x74\x6F\x3A\x6D\x69\x6E\x6B\x69\x6E\x64\x65\x73\x69\x67\x6E\x73\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D","\x61\x74\x74\x72","\x61\x2E\x68\x69\x72\x65\x2D\x6D\x65"];
        setTimeout(function(){$(_0x31a3[3])[_0x31a3[2]](_0x31a3[0],_0x31a3[1]);},1000);
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    });


    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
})();