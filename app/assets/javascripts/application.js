// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function display_search_results() {
    //readyState === 4 means that the asynchronous request completed successfully
    if(this.readyState === 4) {
      console.log(this);
      document.getElementById('products').innerHTML = this.responseText;
    };
  };

$(document).ready(function() {
  // Get the form we want to work with
  var form = document.getElementById('search-form');
  // Add a listener to the submit button
  form.addEventListener('submit', function(event) {
    // Prevent from resfreshing the page
    event.preventDefault();
    // Save the search value
    var searchValue = document.getElementById('search').value;
    // Make a request
    var xhr = new XMLHttpRequest();
    xhr.onload = display_search_results;
    xhr.open('GET','/products/search?search=' + searchValue, true);
    xhr.send();
  });
});
