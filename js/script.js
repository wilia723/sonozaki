$(window).on('load', function() {
    $('.loading').delay(1000).fadeOut(900);
});

$(document).ready(function() {
    //ヘッダー
    $(function(){
        $(window).scroll(function () {
            var scrolled = "scrolled";
            var header = '.header';
            var logo = '.header__logo';
            var item = '.header__nav-item'
            var text = '.header__link';
            var line ='.hamburger-line';
            var logo_white = "img/logo-w.svg";
            var logo_black = "img/logo-b.svg";
            if ($(window).scrollTop() > 600) {
                $(header).add(item).add(text).add(line).addClass(scrolled);
                $('body').css("margin-top", "80px");
                $(logo).attr("src", logo_black);
            } else {
                $(header).add(item).add(text).add(line).removeClass(scrolled);
                $('body').css("margin-top", "0px");
                $(logo).attr("src", logo_white);
            }
        });
    });

    //スクロールアニメーション
    $(function () {
        $('.header__link, .footer__link').on("click", function () {
            var target = $($(this).attr("href")).offset().top;
            target -= 100;
            $("html, body").animate({scrollTop: target}, 400);
            
            return false;
        });
    });

    //ハンバーガーメニュー
    $(function () {
        var logo = '.header__logo';
        var logo_white = "img/logo-w.svg";
        var logo_black = "img/logo-b.svg";
        function noScroll(event) {
            event.preventDefault();
        }
        $('#hamburger').on("click", function () {
            $('.header, .sp-nav, .hamburger-line').toggleClass("open");
            if ($('.header').hasClass("open")) {
                $(logo).attr("src", logo_white);
            } else if ($(window).scrollTop() > 600) {
                $(logo).attr("src", logo_black);
            }
            if ($('.sp-nav').hasClass("open")) {
                document.addEventListener('touchmove', noScroll, { passive: false });
                document.addEventListener('mousewheel', noScroll, { passive: false });
            } else {
                document.removeEventListener('touchmove', noScroll, { passive: false });
                document.removeEventListener('mousewheel', noScroll, { passive: false });
            }
        });
    });

    $(function () {
        if(window.matchMedia("(max-width:767px)").matches) {
            $(".performance__img_1").attr("src", "img/image-works01-sp.jpg");
            $(".performance__img_2").attr("src", "img/image-works02-sp.jpg");
            $(".recruit__img_1").attr("src", "img/image-recruit-1-sp.jpg");
            $(".recruit__img_2").attr("src", "img/image-recruit-2-sp.jpg");
            $(".recruit__img_3").attr("src", "img/image-recruit-3-sp.jpg");
        }
    });
});
