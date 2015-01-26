  $(".slideShow > img:gt(0)").hide();

  setInterval(function() {
    $('.slideShow > img:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.slideShow');
  },  2000);
