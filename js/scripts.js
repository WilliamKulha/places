//Business Logic

//Constructor for contacts
function Destination(location, landmarks, timeofyear, notes, rating) {
  this.location = location;
  this.landmark = landmarks;
  this.timeofyear = timeofyear;
  this.notes = notes;
  this.rating = rating;
}

$(document).ready(function() {
  $('#destination_form').submit(function(event) {
    event.preventDefault();

    let place = $('#place').val();
    let landmarks = $('#landmarks').val();
    let tOY = $('#toy').val();
    let note = $('#notes').val();
    let rating = $('#rating').val();

    let newDestination = new Destination(place, landmarks, tOY, note, rating);
    console.log(newDestination.information());

  })
})
