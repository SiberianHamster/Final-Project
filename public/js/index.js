  $(".slideShow > img:gt(0)").hide();

  setInterval(function() {
    $('.slideShow > img:first')
      .fadeOut(2000,function(){fadeMeBack()})},5000)

  var fadeMeBack = function() {
    $('.slideShow > img:first')
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('.slideShow');
    }
