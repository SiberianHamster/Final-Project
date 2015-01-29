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
console.log(client.array);
client.classify();
currentClient.push(client);
console.log(currentClient[0].array);
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
  this.array = region +" "+ season +" "+ duration +" "+ groupSize;
  this.classify = function(){
    console.log("before loop, i'm here");
    // for (i = 0; i<currentClient.length; i++){
      console.log("first checkpoint");
      switch(this.array){
       case "Nepal Spring 2weeks 3to6":
       console.log("Nepal");
       break;
       default:
       console.log("broken");
       break;

      }
    // }
  }
}


function downloadMe(){
  //need to then get the some information from the output of the logic function and change the dom
}


