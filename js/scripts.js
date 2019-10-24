
$(document).ready(function(){

  $("#heightchart").submit(function(event) {
    var userHeight = parseInt($("#height").val());
    event.preventDefault();
    $(".hidden").hide();

    if (userHeight >= 6){
      $("#YouSure").show();

    } else if
    (userHeight <= 5 && userHeight>=4){

      $("#Yikes, #EzMode").show();
    } else (userHeight <= 3)
      $("#EzMode").show();
    });
  });
