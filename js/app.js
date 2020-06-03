$(document).ready( () => {
  $(".burger").click(() => {
    $(".menu").animate({
      width: ["toggle", "swing"],
      opacity: "toggle"
    }, 900);
  });
});
