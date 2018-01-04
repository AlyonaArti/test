$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        center:true,
        autoplay:true,
        autoplayTimeout:4000,
        animateOut: 'fadeOut',
        mouseDrag:false,
        responsive:{
            0:{
                items:1
            },
        }
    });
    $('#modal').on('click', function() {
        $('.modal').fadeIn('slow', function() {})
    });
    $('#close').on('click', function() {
        $('.modal').fadeOut('slow', function() {})
    });
    setTimeout(function() {
        $('.preloaderContainer').css('visibility', 'hidden');
    }, 2000);
})