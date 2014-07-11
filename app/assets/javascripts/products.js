// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function() {

  // AJAX Search
  $("#search-form").submit(function(event) {
    var searchValue = $("#search").val();;
    event.preventDefault();
    $.get("/products/search?search=" + searchValue).done(function(data) {
      $("#products").html(data);
    }).error(function() {
      alert("error!");
    });
  });

  // Infinate Scroll
  if ($('.pagination').length) {
    $(window).scroll(function() {
      var url = $('.pagination span.next').children().attr('href');
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        $('.pagination').text("Fetching more products...");
        return $.getScript(url);
      };
    });
  };

  // Loading Indicator
  $(function() {
   $("#new_review")
      .on('ajax:beforeSend', function() { // set this code to happen just before the ajax request is made
        $("input[type='submit']") // make changes to the submit button
          .val('Saving...') // change the text on the button
          .attr('disabled', 'disabled'); // disable the button
      })
      .on('ajax:success', function() {
        $("input[type='submit']")
          .val('Success!');
      })
      .on('ajax:error', function(xhr, status, error) {
        console.log(error);
        $("input[type='submit']")
          .val('Could not post!');
      })
      .on('ajax:complete', function() {
        $("input[type='submit']")
          .val('Create Review')
          .removeAttr('disabled');
      });
    });

});
