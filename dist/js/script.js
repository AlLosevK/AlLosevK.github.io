$('.review-slider').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    adaptiveHeight: true
});

$('.portfolio-slider').slick({
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    asNavFor: '.portfolio__descr-slider',
    autoplay: true,
    autoplaySpeed: 2000
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

$(document).ready(function (){
  $(".dots__item").on("click", function(){
    var data_number = $(this).attr('data-number')
    $(".portfolio-slider").slick('slickGoTo', data_number)
  });
});

$(document).ready(function (){
  $(".main-content__btn.main-content__btn-mob").on("click", function(){
    $(".main-content__background-mob, .main-content__form").addClass("is-active");
  });
  $(".main-content__background-mob").on("click", function(){
    $(".main-content__background-mob, .main-content__form").removeClass("is-active");
  });
});

$(document).ready(function(){
  var maxH = 0;
  $(".review-item").each(function () {
    var h_block = parseInt($(this).height());
    if(h_block > maxH) {
      maxH = h_block;
    };
  });
  $(".review-item").height(maxH);
});

$(document).ready(function(){
  var maxH = 0;
  $(".portfolio-item").each(function () {
    var h_block = parseInt($(this).height());
    if(h_block > maxH) {
      maxH = h_block;
    };
  });
  $(".portfolio-item").height(maxH);
});
