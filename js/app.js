$(document).ready( () => {
  $(".burger").click(() => {
    $(".menu li").fadeToggle(2000);
    $(".menu").animate({
      width: "toggle",
      opacity: "toggle"
    }, 900);
  });
});
