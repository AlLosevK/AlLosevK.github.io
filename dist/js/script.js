$('.review-slider').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true
});
$('.portfolio-slider').slick({
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    asNavFor: '.portfolio__descr-slider',
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: '.dots'
});

$('.portfolio__descr-slider').slick({
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    asNavFor: '.portfolio-slider',
    dots: false,
    draggable: false
});
