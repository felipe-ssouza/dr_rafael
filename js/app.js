$(document).ready( () => {
  //menu
  $(".burger").click(() => {
    $(".menu").animate({
      width: "toggle"
    }, 600);
  });

  //line burger efeito
  $(".burger").hover(()=>{
    $(".line").toggleClass("efeito");
  });

  //shadow burger
  $(window).scroll(()=>{
    if($(window).scrollTop() == 0) {
      $(".burger").removeClass("shadow");
    } else {
      $(".burger").addClass("shadow");
    }
  });

});
