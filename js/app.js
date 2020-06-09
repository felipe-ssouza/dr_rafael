$(document).ready( () => {
  //menu
  $(".burger").click(() => {
    $(".menu").toggleClass("menu-active");
    $(".menu").preppend("<div class='menu-container-active'></div>");

  });

  //line burger efeito
  $(".burger").click(()=>{
    $(".line").toggleClass("stretch");
  });


  //CAROUSEL HOME
  $("#carousel .slider").slick({
    slidesToShow: 1,
    slidesToSroll: 1,
    autoplay: false,
    infinite: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: "linear",
    prevArrow: $('.l-arrow'),
    nextArrow: $('.r-arrow'),
  });

});
