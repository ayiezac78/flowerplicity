$(document).ready(function(){
  $('#flexCheckDefaultShowPass').on('click', function(){
     var passInput=$("#passInput");
     if(passInput.attr('type')==='password')
       {
         passInput.attr('type','text');
     }else{
        passInput.attr('type','password');
     }
 })
})