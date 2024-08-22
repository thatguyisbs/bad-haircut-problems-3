$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        number:1,
        loop:true,
        mouseDrag:false,
        touchDrag:false,
        pullDrag:false,
        freeDrag:false,
        dots:false,
        autoplay:true,
        autoplaySpeed:5000,
        autoplayTimeout:5000,
        slideTransition: 'ease-in-out',
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });
  });
  $(document).ready(function(){
    function play() {
        setInterval(function(){
            var next = $(".slider-image .active").removeClass("active").next(".hero-image");
            if (!next.length) {
                next = $(".slider-image .hero-image:first");
            }
            next.addClass("active");
        }, 8000);
    }
    play();
  });