
$(document).ready(function(){

  $("#heightchart").submit(function(event) {
    var userHeight = parseInt($("#height").val());
    event.preventDefault();
    $(".rideoptions").hide();

    if (userHeight >= 6){
      $("#YouSure").show();

    } else if
    (userHeight <= 5){

      $("#Yikes, #EzMode").show();
    } else
      $("#EzMode").show();
    });
  });
