$(document).ready(function () {
    $('.carousel_wrapper').slick({
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/chevron%20left%20solid.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/chevron%20right%20solid.png" alt=""></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    dots: true,
                }
            },
        ]


    });


});

