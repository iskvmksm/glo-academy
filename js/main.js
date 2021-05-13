const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
   keyboard: {
    enabled: true,
    onlyInViewport: false,
   }
});
ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
      center: [55.833057, 37.484996],
      zoom: 15});
    var myGeoObject = new ymaps.GeoObject({});
    myMap.geoObjects
    .add(myGeoObject)
    .add(new ymaps.Placemark([55.833057, 37.484996]))
  
  }
