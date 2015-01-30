$(function() {
  var codeentered = false;
  var karray = [38,38,40,40,37,39,37,39,66,65];
  $(document).keydown(function(event){
    var i = ($("#kcode div").length);
    if(event.which == karray[i]){
      $("#kcode").append("<div class='konamic'></div>");
      if(($("#kcode div").length) == 10){
        codeentered = true;
        $(".container").append('<img src="../imgs/toastie.jpg"/>');
      };
    }
    else{
      $(".konamic").remove();
    }
  });
});
