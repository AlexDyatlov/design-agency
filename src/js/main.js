$(function(){

  let mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 35,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: '1',
        spaceBetween: 35,
      },
      951: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1350: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
    }
  })

  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });

});

  var show = true;
  var countbox = "#counts";
  
  $(window).on("scroll load resize", function(){

    if(!show) return false;

    var w_top = $(window).scrollTop();
    var e_top = $(countbox).offset().top;

    var w_height = $(window).height();
    var d_height = $(document).height();

    var e_height = $(countbox).outerHeight();

    if(w_top + 300 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
      $(".info__box-number").spincrement({
        thousandSeparator: "",
        from: 1,
        duration: 4000
      });

      show = false;

    }

  });







 