$(document).ready(function() {
  $('#flexCheckDefaultSigninChoice').click(function() {
    // var inputValue = $(this).attr("value");
    // $("." + inputValue).toggle();
    $("#signinOwner").toggle();
    $("#signinUser").toggle();
  });
});