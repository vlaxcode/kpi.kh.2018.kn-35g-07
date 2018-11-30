$(function () {
    let count = 0;

    /*show popup*/
    $(document).on('mouseover', '.showPopup', function () {
        $('.product-line').css({'visibility': "visible", "z-index": "2", "opacity": "1"});

    });

    /*hidden popup*/
    $(document).on('mouseout', '.showPopup', function () {
        $('.product-line').css({'visibility': "hidden", 'z-index': '0', 'opacity': "0"});
    });

    /*show popup*/
    $(document).on('mouseover', '.show-sortPopup', function () {
        $('.sort-line').css({'visibility': "visible", "z-index": "2", "opacity": "1"});

    });

    /*hidden popup*/
    $(document).on('mouseout', '.show-sortPopup', function () {
        $('.sort-line').css({'visibility': "hidden", 'z-index': '0', 'opacity': "0"});
    });

    /*label hover*/
    $(document).on("mouseover", '.filterItem label', function () {
        $(this).css('color', '#cccccc');

    });

    /*label out*/
    $(document).on("mouseout", '.filterItem label', function () {
        $(this).css('color', '#999999');
    });

    $(document).on('click', 'a.close', function () {
        $('.popup').css({'visibility': "hidden", 'z-index': "0", "opacity": "0"});

    });

    /*WIDTH > 575 PX */

    /*add filters*/
    if (window.matchMedia('(min-width:575px)').matches) {
        $(document).on("click", '.sort-line .filterItem label', function () {
            $('.sort-line .filterItem label').removeClass('active');
            $(this).addClass('active');
        });
        $(document).on("click", '.product-line .filterItem label', function () {
            $(this).addClass('active');
        });
        $(document).on("click", '.product-line .filterItem label', function () {
            $('.selectedFilters').css({'opacity': '1', 'visibility': 'visible'});
            $('.selectedFilters').removeClass('nonActive');
            $('.selectedFilters').addClass('activeFilter');
            $('.heading').text("");
            $('.product-line label.active').each(function (i, elem) {
                $('.heading').append(`<a href="#">${$(elem).text()}<i class="fal fa-times"></i></a>`);

                /*view count of filters*/
                if ($('.product-line label.active').length > 0) {
                    count = $('.product-line label.active').length;
                    $('.productLine .angle').text(count);
                } else {
                    $('.productLine .angle').text("");
                    $('.productLine .angle').append('<i class="fal fa-angle-up"></i>');
                }
            });

            /*remove one filters*/
            $('.heading a').each(function (i, elem) {
                $(elem).on("click", function () {
                    event.preventDefault();
                    $(this).remove();
                    let myvar = $(this).text();
                    $('.filterItem label').each(function (i, el) {
                        if ($(this).text() == myvar) {
                            $(this).removeClass('active')
                        }
                    });
                    count--;
                    $('.productLine .angle').text(count);
                    if (count < 1) {
                        /*view count of filters*/
                        $('.productLine .angle').text("");
                        $('.productLine .angle').append('<i class="fal fa-angle-up"></i>');
                    }
                    if ($('.heading a').length < 1) {
                        $('.selectedFilters').css({'opacity': '0', 'visibility': 'hidden'});
                        $('.selectedFilters').addClass('nonActive');
                    }
                });
            });

            /*remove all filters*/
            $(document).on('click', 'a.clear', function (event) {
                event.preventDefault();
                $('.heading a').remove();
                $('.product-line .filterItem label').removeClass('active');
                $('.productLine .angle').text("");
                $('.productLine .angle').append('<i class="fal fa-angle-up"></i>');
                $('.selectedFilters').addClass('nonActive');
                $('.selectedFilters').css({'opacity': '0', 'visibility': 'hidden'});
            })
        });
    }


    /*WIDTH < 575 PX*/

    /*for button in popup*/
    if (window.matchMedia('(max-width:575px)').matches) {

        $(document).on("click", '.sort-line .filterItem label', function () {
            $('.sort-line .filterItem label').removeClass('active');
            $(this).addClass('active');
        });

        $(document).on("click", '.product-line .filterItem label', function () {
            $(this).toggleClass('active');
        });

        $(document).on('click', '.btn input', function () {
            $('.popup').css({'visibility': "hidden", 'z-index': '0', 'opacity': "0"});

            $('.heading').text("");
            $('.product-line label.active').each(function (i, elem) {
                $('.heading').append(`<a href="#">${$(elem).text()}<i class="fal fa-times"></i></a>`);
            });

            /*view count of filters*/
            if ($('.product-line label.active').length > 0) {
                count = $('.product-line label.active').length;
                $('.productLine .angle').text(count);
                $('.selectedFilters').css({'opacity': '1', 'visibility': 'visible'});
                $('.selectedFilters').removeClass('nonActive');
                $('.selectedFilters').addClass('activeFilter');
            } else {
                $('.productLine .angle').text("");
                $('.productLine .angle').append('<i class="fal fa-angle-up"></i>');
            }

            /*remove one filters*/
            $('.heading a').each(function (i, elem) {
                $(elem).on("click", function () {
                    event.preventDefault();
                    $(this).remove();
                    let myvar = $(this).text();
                    $('.filterItem label').each(function (i, el) {
                        if ($(this).text() == myvar) {
                            $(this).removeClass('active')
                        }
                    });

                    count--;
                    $('.productLine .angle').text(count);
                    if (count < 1) {
                        /*view count of filters*/
                        $('.productLine .angle').text("");
                        $('.productLine .angle').append('<i class="fal fa-angle-up"></i>');
                    }

                    if ($('.heading a').length < 1) {
                        $('.selectedFilters').css({'opacity': '0', 'visibility': 'hidden'});
                        $('.selectedFilters').addClass('nonActive');
                    }
                });
            });
        });

        /*remove all filters*/
        $(document).on('click', 'a.clear', function (event) {
            event.preventDefault();
            $('.heading a').remove();
            $('.product-line .filterItem label').removeClass('active');
            $('.productLine .angle').text("");
            $('.productLine .angle').append('<i class="fal fa-angle-up"></i>');
            $('.selectedFilters').addClass('nonActive');
            $('.selectedFilters').css({'opacity': '0', 'visibility': 'hidden'});
        });
    }
});