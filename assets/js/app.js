//preloader
setTimeout(() => {
  preloader.classList.add("d-none")
  preloader.classList.add("overflow-hidden")
}, 2000)
//big-slider
$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrow: true,
    prevArrow: '.btn-prev',
    nextArrow: '.btn-nxt',
    responsive: [
      
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            autoplay: true,
            speedAutoplay:100,
          }
        }
      ]

  });
 //back to top
 document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("back-to-top");

  // Show the button when the user scrolls down 200px from the top
  window.onscroll = function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
          button.style.display = "block";
      } else {
          button.style.display = "none";
      }
  };

  // Scroll back to the top when the button is clicked
  button.onclick = function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  };
});
//card-slider
$('.card-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 9999,
      settings: "unslick"
    },
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        speedAutoplay: 2000,
        dots: false
      }
    },
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
      }
    },
    {
      breakpoint: 1140,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        dots: false,
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }
  ]
});
//s3-slider
$('.s3-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 9999,
      settings: "unslick"
    },
    {
      breakpoint: 1380,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speedAutoplay: 2000,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 1070,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        autoplay: true,
        speedAutoplay: 2000,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1.3,
        slidesToScroll: 1,
        autoplay: true,
        speedAutoplay: 2000,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speedAutoplay: 2000,
        infinite: true,
        dots: false,
      }
    }
  ]
});
//s7-slider
$('.s8-slick').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 9999,
      settings:"unslick"
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
       autoplay: true,
       speedAutoplay: 2000,
       dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        autoplay: true,
       speedAutoplay: 2000,
       dots: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
       speedAutoplay: 2000,
       dots: false,
      }
    }
  ]
});