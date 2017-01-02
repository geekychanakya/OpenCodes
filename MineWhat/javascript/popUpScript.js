/*--- The main function ---*/

  $(document).ready(function(){
      $('#popUpFixed').addClass('popup-box-show');
      
      /*--- to animate the pop-up ---*/
      if($(window).width() < 1400){
            $('#popUpFixed').animate({left: '-55%'}, 1500);
      }
      else if($(window).width() > 1400 && $(window).width() < 1580){
            $('#popUpFixed').animate({left: '-57%'}, 1500);
      }
      else if($(window).width() > 1580 && $(window).width() < 1780){
            $('#popUpFixed').animate({left: '-59%'}, 1500);
      }
      else{
            $('#popUpFixed').animate({left: '-60%'}, 1500);
      }
      /*--- to animate the pop-up ends ---*/
      
      /*--- to hide the pop up ---*/
      $("#removeClass").click(function () {
          $('#popUpFixed').removeClass('popup-box-show');
      });
      /*--- to hide the pop up ends ---*/
  });

/*--- The main function ends ---*/