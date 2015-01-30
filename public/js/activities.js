$(function() {
  var infoRecovery = localStorage.getItem("clientInfo");

  if (infoRecovery) {
    var infoRecString = JSON.parse(infoRecovery);
    $("#inName").val(infoRecString["clientName"]);
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
    var thailandBase = 2200
    var customerPrice
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
    if (this.season == "Spring"){
      customerPrice = customerPrice * 1.15
    };
    if (this.duration == "3weeks"){
      customerPrice = customerPrice * 1.25
    };
    if (this.groupSize == "3to6"){
      customerPrice = customerPrice * 1.25
    };
    customerPrice = (Math.floor(customerPrice / 100)) * 100;
    return "<p class='price'>Your estimated price for this package is: $" + customerPrice + " per person.</p>";
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
    var infoRecovery = {};

    infoRecovery["clientName"] = $('#inName').val();
    infoRecovery["clientEmail"] = $('#inEmail').val();
    infoRecovery["region"] = $('#inRegion').val();
    infoRecovery["season"] = $('#inSeason').val();
    infoRecovery["duration"] =  $('#inDuration').val();
    infoRecovery["groupSize"] = $('#inGroup').val();

    var infoRecString = JSON.stringify(infoRecovery);

    localStorage.setItem("clientInfo", infoRecString);
  })
});
