$(document).ready(function() {
  const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
     keyboard: {
      enabled: true,
      onlyInViewport: false,
     }
  });
  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
     keyboard: {
      enabled: true,
      onlyInViewport: false,
     }
  });
  $('.newsletter').parallax({imageSrc: 'img/newsletter-bg.jpg'});
  
  var menuButton = document.querySelector(".menu-button")
  menuButton.addEventListener('click', function(){
    console.log('Клик по кнопке меню');
    document.querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom--visible");
  })
  
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $(".modal__close");
  closeModalButton.on("click", closeModal);
  modalButton.on('click', openModal);

  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
  var elements = $('.modal__dialog, .modal__overlay');

  $(document).on('keydown', function(e){
    if(e.which === 27){ // key = esc (27)
        elements.removeClass('modal__dialog--visible');
        elements.removeClass('modal__overlay--visible');
        var home = $.Event("keydown", {keyCode: 36}); //
        $(document).trigger(home);
        e.preventDefault();
        return false;
      }
  });

$('.close-modal').click(function(){
    elements.removeClass('active');
});
});