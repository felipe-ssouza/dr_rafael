$(document).ready( () => {
  //burger menu
  $(".burger").click(() => {
    $(".menu").animate({
      width: ["toggle", "swing"],
    }, 600);
  });

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
