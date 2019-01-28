
function Destinations() {
  this.places = [],
  this.currentId = 0
}

Destinations.prototype.assignId = function() {
  ++Destinations.currentId;
  return this.currentId;
};

Destinations.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
};

Destinations.prototype.removePlace = function(id) {
  for(let i=0; i<Destinations.places.length; ++i) {
    if(Destinations.places[i]) {
      if(Destinations.places[i].id === id) {
        delete Destinations.places[i];
        return true;
      }
    }
  }
  return false;
};


function Place(name, location, landmarks, time, notes) {
  this.name = name,
  this.location = location,
  this.landmarks = landmarks,
  this.time = time,
  this.notes = notes
}

$(document).ready(function() {

  var destinations = new Destinations();
  var russia = new Place("Siberia, Russia", "location", "landmarks", "time", "notes");
  var korea = new Place("Pyongyang, N. Korea", "location", "landmarks", "time", "notes");
  var antarctica = new Place("Pot station, Antarctica", "location", "landmarks", "time", "notes");
  var canada = new Place("BC, Canada", "location", "landmarks", "time", "notes");
  var spain = new Place("Barcelona, Spain", "location", "landmarks", "time", "notes");
  destinations.addPlace(russia);
  destinations.addPlace(korea);
  destinations.addPlace(antarctica);
  destinations.addPlace(canada);
  destinations.addPlace(spain);

  destinations.places.forEach(function(p) {
    $("ol").append("<li class='item'>" + p.name + "</li>");
  });
  $(".item").click(function() {
    var selectedName = $(this).text();    //get the name
    for(var i=0; i<destinations.places.length; ++i) {
      if(destinations.places[i].name === selectedName) {
        var p = destinations.places[i];
        var text = "name: " + p.name + "\nlocation: " + p.location + "\nlandmarks: " + p.landmarks + "\ntime: " + p.time + "\nnotes: " + p.notes;
        $("#details").text(text);
      }
    }
  });
});
