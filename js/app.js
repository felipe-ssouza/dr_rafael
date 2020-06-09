$(document).ready( () => {
  //menu
  $(".burger").click(() => {
    $(".menu").toggleClass("menu-active");
    
    // $(".menu").animate({
    //   width: "toggle"
    // }, 600);
  });

  //line burger efeito
  $(".burger").click(()=>{
    $(".line").toggleClass("efeito");
  });

  //shadow burger
  $(window).scroll(()=>{
    // if($(window).scrollTop() == 0) {
    //   $(".burger").removeClass("shadow");
    // } else {
    //   $(".burger").addClass("shadow");
    // }
  });


});
