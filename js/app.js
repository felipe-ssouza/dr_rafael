$(document).ready( () => {

  $(".burger").click(() => {
    $(".menu").animate({
      width: ["toggle", "swing"],
    }, 1000);
  });


  $(window).scroll(() => {
    $(".burger").addClass("shadow", 1000);
  });

});
