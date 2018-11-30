$(document).ready(function () {
    $(document).on('click','.search', function (event) {
        event.preventDefault();
        $('.field input').toggleClass('active');
        $('.search').toggleClass('gray');
    });
});
