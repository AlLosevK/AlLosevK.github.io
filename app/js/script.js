$('.review-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});
$('.portfolio-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrow: false,
    asNavFor: '.portfolio__descr-slider'
});

$('.portfolio__descr-slider').slick({
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrow: false,
    asNavFor: '.portfolio-slider'
});
