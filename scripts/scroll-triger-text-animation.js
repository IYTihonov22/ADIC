// Set the duration of the animation
var animationDuration = .75;

// Define a scrollObject function
var scrollObject = function () {

  // Register the ScrollTrigger plugin (again)
  gsap.registerPlugin(ScrollTrigger);
  
  // Iterate over each element with the class "revealUp"
  gsap.utils.toArray(".revealUp").forEach(function (elem) {
    // Create a ScrollTrigger for each element
    ScrollTrigger.create({
      trigger: elem, // Set the trigger element
      markers: false, // Disable the ScrollTrigger markers

      // When the element enters the viewport
      onEnter: function () {
        
        // Apply animation using GSAP fromTo method
        gsap.fromTo(
          elem,
          { y: 100, autoAlpha: 0 }, // Initial state (offset and transparency)
          {
            duration: animationDuration, // Set the animation duration
            y: 0, // Final offset (move to original position)
            autoAlpha: 1, // Fully opaque
            ease: "cubic", // Use cubic easing function
            overwrite: "auto" // Allow automatic overwriting
          } 
        );
      },
    });
  });

  // Turn off the "scroll" event listener
  $(window).off("scroll");
};

// Scroll to the top of the page before unloading
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// Listen for the "scroll" event on the window
$(window).on("scroll", function () {
  scrollObject(); // Call the scrollObject function
});
