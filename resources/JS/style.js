var mySwiper = new Swiper('.swiper-container', {
  // 
  direction: 'vertical',
  loop: true,

  // 
  pagination: {
    el: '.swiper-pagination',
  },

  // 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // 
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})



$("i").click(function () {
  $("ul").toggleClass("open");
});

/*GALERIA DO RODAPÉ*/ 

