var $submitClicked = $("#submit_btn");
var $downloadClicked = $("#download_btn");

var currentClient = [];

function getInfo() {
var $name = $('#inName').val();
var $email = $('#inEmail').val();
var $region = $('#inRegion').val();
var $season = $('#inSeason').val();
var $duration = $('#inDuration').val();
var $groupSize = $('#inGroup').val();



var client = new Client ($name, $email, $region, $season, $duration, $groupSize);

currentClient.push(client);

console.log(currentClient[0].name);
console.log(currentClient[0].email);
console.log(currentClient[0].region);
console.log(currentClient[0].season);
console.log(currentClient[0].duration);
console.log(currentClient[0].groupSize);
}


$submitClicked.on("click", getInfo);
$downloadClicked.on("click", downloadMe);


function Client(name, email, region, season, duration, groupSize) {
  this.name = name;
  this.email = email;
  this.region = region;
  this.season = season;
  this.duration = duration;
  this.groupSize = groupSize;
}


function downloadMe(){
  //need to then get the some information from the output of the logic function and change the dom
}


