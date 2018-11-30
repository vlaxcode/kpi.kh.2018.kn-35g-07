$(document).ready(function () {
    $(".catalog h2").animate({top: "25px"}, 1000);
    $(".catalogHidden  h2").animate({top: "0px"}, 1000);
    $('.section-catalogList header').animate({opacity: 1}, 2000)
});

$(document).ready(function () {
    $('.newsItem, .itemNews').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated bounceInUp',
        offset: 100
    });
});


