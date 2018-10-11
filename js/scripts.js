//Business Logic

//Constructor for contacts
function Destination(location, pointOfInterest, timeofyear, note, rating) {
  this.location = location;
  this.landmark = pointOfInterest;
  this.timeofyear = timeofyear;
  this.notes = note;
  this.rating = rating;
}

$(document).ready(function() {
  $('#destination_form').submit(function(event) {
    event.preventDefault();

    let place = $('#place').val();
    let landmarks = $('#landmarks').val();
    let tOY = $('#toy').val();
    let memories = $('#notes').val();
    let rating = $('#rating').val();

    let newDestination = new Destination(place, landmarks, tOY, memories, rating);
    $('#destinations_list').append('<li><span class="entry">' + newDestination.location + '</span></li>')
    console.log(newDestination);

  });
});
