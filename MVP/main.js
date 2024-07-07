const swiper = new Swiper('.swiper-container', {

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  // Button in top
  let btn = document.querySelector(".button_in-top");

  function magic() {
    if (window.scrollY > 1000) {
      btn.style.opacity = "1";
    } else {
      btn.style.opacity = "0";
    }
  }
  btn.onlckick = function () {
    window.scrollTo(0, 0);
  };

  window.onscroll = magic;