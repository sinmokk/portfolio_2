
  const progressLine = document.querySelector('.autoplay-progress svg')
  const mainSwiper = new Swiper(".main-swiper1", {
      loop: true,
      autoplay: {
          delay: 5500,
          disableOnInteraction: false,
      },
      pagination: {
          el: ".main-swiper1 .swiper-pagination",
          clickable: false,
          type: "custom",
          renderCustom: function(swiper, current, total) {
              return (
                  '<span class="current">' + 0 + (current) + '</span>' + '<span class="total">' + 0 + (total) + '</span>'
              );
          }
      },
      navigation: {
          nextEl: ".main-swiper1 .swiper-button-next",
          prevEl: ".main-swiper1 .swiper-button-prev",
      },
      on: {
          autoplayTimeLeft(s, time, progress) {
              progressLine.style.setProperty("--progress", 1 - progress)
          }
      }
  });

  //section1 swiper
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
  // slidesPerView: "auto",
  centeredSlides: true,
    spaceBetween: 30,
    loop : true,
    loopAdditionalSlides : 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

  
var swiper5 = new Swiper(".sss", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   
    slidesPerView:"auto",
    spaceBetween: 50,   
    loop: true,  
    centeredSlides:true,  
    speed: 1000, 

  
    effect: "coverflow",
    coverflowEffect: {
      rotate: 50,
      stretch: -100, 
      depth: 400, 
      modifier:1, 
      slideShadows: false 
  
    }
  
  });

 

 

