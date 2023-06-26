document.addEventListener("DOMContentLoaded", function() {
    var slideIndex = 0;
    showSlides();
  
    function showSlides() {
      var slides = document.getElementsByName("img")
  
      // Print the count of slides
      console.log("Number of slides:", slides.length);
  
      // Hide all slides
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      // Increment slide index
      slideIndex++;
  
      // Reset slide index if it exceeds the number of slides
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
  
      // Display the current slide
      slides[slideIndex - 1].style.display = "block";
  
      // Set the time interval between slide transitions (in milliseconds)
      setTimeout(showSlides, 7000); // Change slide every 2 seconds
    }
  });
  