  $(".slideShow > img:gt(0)").hide();

  setInterval(function() {
    $('.slideShow > img:first')
      .fadeOut(1000);
    },  2000);

  setInterval(function() {
    $('.slideShow > img:first')
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.slideShow');
    }, 2000);

