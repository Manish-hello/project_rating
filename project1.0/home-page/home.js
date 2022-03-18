   // owl carousel script start
    $('.js-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    stagePadding:7,
    margin:8,
    animateOut:'fadeOut',
    animateIn:'fadeIn',
    nav:false,
    autoplayHoverPause:true,
    items:3,
    responsive:{
    0:{
    items:1,
    nav:false,
    loop:true
    },
    600:{
    items:2,
    nav:false,
    loop:true
    },
    1000:{
    items:3,
    nav:false,
    loop:true
    }
    }
    });
    // owl carousel script end

    //popular teacher section start
    $('.post-container').owlCarousel({
      pagination:false,
      loop:true,
      margin:7,
      autoplay:true,
      autoplayTimeout:5000,
      responsive:{
         0:{
            items:1
         },
         600:{
            items:2
         },
         1000:{
            items:4
         }
      }
    })
    //popular teacher section end