$(".burger").on("click", function(){
  $(".burger").toggleClass("close_btn");
  $(".navBar__links").toggleClass("open_menu");
  $(".logo").toggleClass("hide_logo");
  $("header").toggleClass("header_open")
});
