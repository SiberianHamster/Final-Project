var $submitClicked = $("submit_btn");


var currentClient = [];

function getInfo() {
var $name = $('inName').val();
var $email = $('inEmail').val();
var $region = $('inRegion').val();
var $season = $('inSeason').val();
var $duration = $('inDuration').val();
var $groupSize = $('inGroup').val();


var client = new Client ($name, $email, $region, $season, $duration, $groupSize);
currentClient.push(client);
}


$submitClicked.on("click", getInfo);
console.log(currentClient);


function Client(name, email, region, season, duration, groupSize) {
  this.name = name;
  this.email = email;
  this.region = region;
  this.season = season;
  this.duration = duration;
  this.groupSize = groupSize;
}



