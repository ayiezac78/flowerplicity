$(document).ready(function() {
  $("#user-edit :input").prop("disabled", true);
  // whiteflower
  $("#wishlistBtn").click(function(){
    $("#addtowishlistToast").toast("show");
  });
  $("#basketBtn").click(function(){
    $("#addtobasketToast").toast("show");
  });
  // magmaflower
  $("#basketbtn-magma").click(function(){
    $("#basketToast-magma").toast("show");
  });
  $("#wishlistbtn-magma").click(function(){
    $("#wishlistToast-magma").toast("show");
  });
});


function editProfile() {
  $("#user-edit :input").prop("disabled", false);
}

function updateBtn() {
  $("#user-edit :input").prop("disabled", true);
  popAlert();
}

function popAlert(){
  var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function(toastEl) {
        return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show())
}