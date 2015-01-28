var $submitClicked = $("#submit_btn");
var $downloadClicked = $("#download_btn");
$downloadClicked.hide();

var currentClient = [];

function getInfo() {
  var $name = $('#inName').val();
  var $email = $('#inEmail').val();
  var $region = $('#inRegion').val();
  var $season = $('#inSeason').val();
  var $duration = $('#inDuration').val();
  var $groupSize = $('#inGroup').val();
  var nameBuilder = $region + $season + $duration + $groupSize + ".pdf";
  console.log(nameBuilder);


  $downloadClicked.html("<button id='download_btn'><a href='../pdf/" + nameBuilder + "'download='MyTrip.pdf'>Click here to Download</button>");
  $downloadClicked.show();

  var client = new Client ($name, $email, $region, $season, $duration, $groupSize);

  currentClient.push(client);
}


function Client(name, email, region, season, duration, groupSize) {
  this.name = name;
  this.email = email;
  this.region = region;
  this.season = season;
  this.duration = duration;
  this.groupSize = groupSize;
}

$submitClicked.on("click", getInfo);
