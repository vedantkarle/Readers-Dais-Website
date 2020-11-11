$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 650) {
      $(".nav").css("background", "black");
    } else {
      $(".nav").css("background", "transparent");
    }
  });
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;
  document.querySelector("#form").addEventListener("submit", function () {
    name = "";
    email = "";
    message = "";
  });

  AOS.init({
    offset: 400,
    duration: 1000,
    once: true,
  });
});
