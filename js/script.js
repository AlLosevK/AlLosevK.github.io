$(document).ready(function () {
    $('.container').on('click', function () {

        if ($('.project-link').hasClass("non-active")) {
            $('.attention').fadeIn(10);
        }
    })
})