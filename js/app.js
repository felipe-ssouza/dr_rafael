$(document).ready( () => {

  /**
  IMAGENS DELIVERY
  **/

  $.each($(".webp-jpg"), (index, imagem) => {
    Modernizr.on("webp", (suporte)=>{
      if(suporte) {
        $(imagem).attr("src", $(imagem).attr("data-webp"));
      }
      else {
        $(imagem).attr("src", $(imagem).attr("data-jpg"));
      }
    });
  });

  /**************/


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
    prevArrow: $('.l-arrow'),
    nextArrow: $('.r-arrow'),
  });

  $(".depoimentos").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    nextArrow: $('.arrow-plus'),
    prevArrow: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $("#categorias-especialidades .categorias").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});
