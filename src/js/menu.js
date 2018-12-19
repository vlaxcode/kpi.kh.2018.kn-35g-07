$(function () {
    $(document).on('click', '.menuIcon', function () {
        $('.hiddenMenu').css({
            'width': '100%',
            'visibility': 'visible',
            'opacity': 1,
            'transition': '1s',
            'z-index': 6
        });
    });

    $(document).on('click', 'header .hiddenMenu span.close', function () {
        $('.hiddenMenu').css({'visibility': 'hidden', 'width': 0, 'opacity': 0});
    })
});