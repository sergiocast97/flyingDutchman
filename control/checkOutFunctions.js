$(document).ready(function() {

    $('.method').on('click', function() {
      $('.method').removeClass('blue-border');
      $(this).addClass('blue-border');
    });


  })


var $cardInput = $('.input-fields input');

$('.next-btn').on('click', function(e) {

  $cardInput.removeClass('warning');
 
  $cardInput.each(function() {    
     var $this = $(this);
     if (!$this.val()) {
       $this.addClass('warning');
     }
  })

  /*$('input:radio[name=payment]:checked'==true));  "input[name='payment']"*/
  $("input:radio[name=payment]").on('click', function(){
    var selectMethod = $("input:radio[name=payment]:checked").val();
    alert(selectMethod);

    if(selectMethod == 'card'){
      $(".input-fields-1").
      $(".input-fields-2").css("visibility","hidden");
   }
   else if(selectMethod = 'credit'){
       $(".input-fields-1").css("visibility","hidden");
       $(".input-fields-2").css("visibility","visible");
   }
   else{
       $(".input-fields-1").css("visibility","hidden");
       $(".input-fields-2").css("visibility","hidden");
   }
    /*
  var selectedMethod = $(this).attr("id");
  if(selectMethod == 'card'){
     $(".input-fields-1").css("visibility","visible");
     $(".input-fields-2").css("visibility","hidden");
  }
  else if(selectMethod = 'credit'){
      $(".input-fields-1").css("visibility","visible");
      $(".input-fields-2").css("visibility","hidden");
  }
  else{
      $(".input-fields-1").css("visibility","hidden");
      $(".input-fields-2").css("visibility","hidden");
  }*/
  /*$(".input-fields").toggle(this.value === "false" && this.checked);*/
 });


});


   