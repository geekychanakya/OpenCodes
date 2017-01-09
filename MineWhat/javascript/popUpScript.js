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
      
      /*--- fetch the data from JSON ---*/
      $.getJSON( "resources/products.json", function( data ) {
          var dataCount = Math.floor(Math.random() * data.length) + 0 ;
          $(".theHeaderText").append("<p>Are you looking for '<strong>"+ data[dataCount].keyName +"</strong>' ?</p>");
          $.each( data[dataCount].products, function( key, val ) {
              var thisImage = "<img src='"+ val.imageSrc +"' alt='"+ val.altTag +"'>";
              $(".image"+(key+1)).append(thisImage);               
          });
          $(".theBottomLabel1").append("<label>"+ data[dataCount].title1 +"</label>"+
                        "<br/><span>See more</span>");
          $(".theBottomLabel2").append("<label>"+ data[dataCount].title2 +"</label>"+
                        "<br/><span>See more</span>");
      });
      
      
      /*--- This timeout script because there were a few issues while working with getJSON -------*/
      setTimeout(function(){
          /*--- Assign CSS according to width and height ---*/
          $('.popup-body').find('img').each(function() {
              var imgClass = (this.width / this.height > 1) ? 'wide' : 'tall';
              $(this).addClass(imgClass);
              if(imgClass === 'wide'){
                $(this).parent().addClass('popup-section');
              }
          });
      },500);
      /*--- This script because there were a few issues while working with getJSON -------*/
  });


/*--- The main function ends ---*/