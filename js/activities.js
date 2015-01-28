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
