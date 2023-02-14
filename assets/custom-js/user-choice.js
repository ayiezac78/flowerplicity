$(document).ready(function() {
  $('input[type="checkbox"]').click(function() {
    var inputValue = $(this).attr("value");
    $("." + inputValue).toggle();
    $("#btnUser-signupOwner").toggle();
    $("#btnUser-signup").toggle();
  });
});