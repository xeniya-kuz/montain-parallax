$(document).ready(function () {
    $(window).scroll(function (event) {
        var scroll = $(this).scrollTop();
        var width = $(this).outerWidth();
        var height = $('.content').outerHeight();
        var height_b1 = $('.montain-parallax').outerHeight();
        var percent = scroll / height * 100;
        var percent_b1 = scroll / height_b1 * 100;
        var opacity = 1 - 1 / 100 * percent_b1;

        var zoom_1 = 1 + (width / 10000 * percent_b1);

        $('.montain-parallax__fog').css('transform', 'scale(' + zoom_1 + ')');
        $('.montain-parallax__fog').css('opacity', opacity);

        var zoom_2 = 1 + (width / 500000 * percent);
        $('.montain-parallax__montain_1').css('transform', 'scale(' + zoom_2 + ')');

        var hr = width / 2000 * percent_b1;
        var zoom_3 = 1 + (width * 0.000005 * percent_b1);
        $('.montain-parallax__montain_2').css('transform', 'translate3d(' + hr + 'px,0,0) scale(' + zoom_3 + ')');

        var hr_2 = width / 1500 * percent_b1;
        var zoom_4 = 1 + (width * 0.00001 * percent_b1);
        $('.montain-parallax__montain_3').css('transform', 'translate3d(' + hr_2 + 'px,0,0) scale(' + zoom_4 + ')');
    })
});