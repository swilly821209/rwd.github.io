$(document).ready(function() {
   $('.showmenu').on('click',  function(e){
      e.preventDefault();
      $('body').toggleClass('menu-show');
  });
  $('.heart').click(function (e) { 
     e.preventDefault();
     $(this).toggleClass('color');
  });
  
 
});