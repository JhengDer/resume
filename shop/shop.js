
$('#search-btn').click(function () { 
    $('.search-form').toggleClass('active');
    $('.navbar').removeClass('active');
    $('.shopping-cart').removeClass('active');
    $('.form-login').removeClass('active');
});
$('#cart-btn').click(function(){
    $('.shopping-cart').toggleClass('active');
    $('.search-form').removeClass('active');
    $('.navbar').removeClass('active');
    $('.form-login').removeClass('active');
})
$('#login-btn').click(function(){
    $('.form-login').toggleClass('active');
    $('.navbar').removeClass('active');
    $('.search-form').removeClass('active');
    $('.shopping-cart').removeClass('active');
})
$('#menu-btn').click(function(){
    $('.navbar').toggleClass('active');
    $('.search-form').removeClass('active');
    $('.shopping-cart').removeClass('active');
    $('.form-login').removeClass('active');
})
window.onscroll=()=>{
    $('.navbar').removeClass('active');
    $('.search-form').removeClass('active');
    $('.shopping-cart').removeClass('active');
    $('.form-login').removeClass('active');
}
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    // autoplay:{
    //     delay:7500,
    //     disableOnInteraction:false
    // },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1020: {
        slidesPerView: 3
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    // loop: true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1020: {
        slidesPerView: 3
      },
    },
  });

//   var swiper = new Swiper(".product-slider", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     centeredSlides: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });