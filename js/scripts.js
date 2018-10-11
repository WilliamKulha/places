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
    //Set variables to hold all form inputs.
    let place = $('#place').val();
    let landmarks = $('#landmarks').val();
    let tOY = $('#toy').val();
    let memories = $('#notes').val();
    let rating = $('#rating').val();
    //Instantiate a new Destination object, passing it all the values stored in the variables.
    let newDestination = new Destination(place, landmarks, tOY, memories, rating);
    //Add each new Destination to the list, showing only its name.
    $('#destinations_list').append('<li><span class="entry">' + newDestination.location + '</span></li>')
    //Make it so that whichever entry was clicked last is shown in the expanded view.
    $('.entry').last().click(function() {
      $('#show-entry').slideDown();
      $('#show-entry h2').text(newDestination.location.toUpperCase());
      $('.expand_landmarks').text(newDestination.landmark);
      $('.expand_toy').text(newDestination.timeofyear);
      $('.expand_notes').text(newDestination.notes);
      $('.expand_rating').text(newDestination.rating);
    });
    //Make all the form entries blank.
    $('#place').val('');
    $('#landmarks').val('');
    $('#toy').val('');
    $('#notes').val('');
    $('#rating').val('');
  });
});
