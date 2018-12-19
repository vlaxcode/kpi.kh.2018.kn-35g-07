$(document).ready(function () {
    $(document).on('click', '.section-catalogList .main .newsItem .size a', function () {
        event.preventDefault();
        $('.section-catalogList .main .newsItem .size a').removeClass('active');
        $(this).addClass('active');
    })
});