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
