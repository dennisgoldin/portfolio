$(function () {
  'use strict';

  $(".smooth-scroll").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;
    // console.log(hash);
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (700) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 100
    }, 700, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      // window.location.hash = hash;
    });
  });
});  // end of $document.ready()
