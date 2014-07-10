// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function() {
  $("#search-form").submit(function(event) {
    var searchValue = $("#search").val();;
    event.preventDefault();
    $.get("/products/search?search=" + searchValue).done(function(data) {
      $("#products").html(data);
    }).error(function() {
      alert("error!");
    });
  });
});
