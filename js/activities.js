$(function() {
  var infoRecovery = localStorage.getItem("clientInfo");
  console.log(infoRecovery);
  if (infoRecovery) {
      var infoRecString = JSON.parse(infoRecovery);
      $("#inName").val(infoRecString["inName"]);
      $("#inEmail").val(infoRecString["clientEmail"]);
      $("#inRegion").val(infoRecString["region"]);
      $("#inSeason").val(infoRecString["season"]);
      $("#inDuration").val(infoRecString["duration"]);
      $("#inGroup").val(infoRecString["groupSize"]);
  }

  var $submitClicked = $("#submit_btn");
  var $downloadClicked = $("#download_btn");
  $downloadClicked.hide();

  var currentClient = [];

  function Client(name, email, region, season, duration, groupSize) {
    this.name = name;
    this.email = email;
    this.region = region;
    this.season = season;
    this.duration = duration;
    this.groupSize = groupSize;
  }

  Client.prototype.getPrice = function() {
    var nepalBase = 3500
    var baliBase = 2700
    var thailandBase = 2250
    var customerPrice
    console.log(this.region);
    switch(this.region){
      case "Nepal":
        customerPrice = nepalBase;
        break;

      case "Bali":
        customerPrice = baliBase;
        break;

      case "Thailand":
        customerPrice = thailandBase;
        break;

      default:
        alert("You broke the code somehow!")
        break;
    }
     return "<p class='price'>Your estimated price for this package is: $" + customerPrice + "</p>";
    }

  function getInfo() {
    var $name = $('#inName').val();
    var $email = $('#inEmail').val();
    var $region = $('#inRegion').val();
    var $season = $('#inSeason').val();
    var $duration = $('#inDuration').val();
    var $groupSize = $('#inGroup').val();
    var nameBuilder = $region + $season + $duration + $groupSize + ".pdf";

    var client = new Client ($name, $email, $region, $season, $duration, $groupSize);


    $downloadClicked.html("<button id='download_btn'><a href='../pdf/" + nameBuilder + "'download='MyTrip.pdf'>Click here to Download</button>");
    $downloadClicked.show();

  $(".price").html("");
   $(client.getPrice()).insertAfter($("#download_btn"));



    currentClient.push(client);
  }


  $submitClicked.on("click", getInfo);

  $(".userData").blur(function(){
    console.log("I did a blur");
      var infoRecovery = {};
      $(".userData").each(function(){
        var inputId = $(this).attr("id")
        console.log(inputId);
        infoRecovery[inputId] = $("#"+inputId).val();
        console.log($("#"+inputId).val())
      })
  })
      //

      //


      // infoRecovery["clientName"] = $('#inName').val();
      // infoRecovery["clientEmail"] = $('#inEmail').val();
      // infoRecovery["region"] = $('#inRegion').val();
      // infoRecovery["season"] = $('#inSeason').val();
      // infoRecovery["duration"] =  $('#inDuration').val();
      // infoRecovery["groupSize"] = $('#inGroup').val();

      // var infoRecString = JSON.stringify(infoRecovery);
      console.log(infoRecovery);

      localStorage.setItem("clientInfo", infoRecovery);
  // })
});
