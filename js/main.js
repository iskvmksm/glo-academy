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
  // Обработка форм
  $('.form').each(function(){
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Your name",
          minlength: "Name must be at least 2 letters long",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Required format name@domain.com"
        },
        phone: {
          required: "Phone is required",
          minlength: "Phone number must be at least 11 characters",
        }
      },
    });
  })
  var options =  {
    // onComplete: function(cep) {
    //   alert('CEP Completed!:' + cep);
    // },
    onKeyPress: function(cep, event, currentField, options){
      console.log('A key was pressed!:', cep, ' event: ', event,
                  'currentField: ', currentField, ' options: ', options);
    },
    onChange: function(cep){
      console.log('cep changed! ', cep);
    },
    onInvalid: function(val, e, f, invalid, options){
      var error = invalid[0];
      console.log ("Digit: ", error.v, " is invalid for the position: ", error.p, ". We expect something like: ", error.e);
    }
  };

  $('.footer__input--callback, .modal__input--callback').mask('+7 (000) 000-00-00', options);
  AOS.init();
});
