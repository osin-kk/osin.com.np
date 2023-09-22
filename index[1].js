
// Smooth Scrolling for Navigation
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("#fixed-nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Placeholder logic for Project Showcase
  const prevButton = document.getElementById("prev-project");
  const nextButton = document.getElementById("next-project");

  prevButton.addEventListener("click", function() {
    // Logic for showing the previous project
    console.log("Previous button clicked");
  });

  nextButton.addEventListener("click", function() {
    // Logic for showing the next project
    console.log("Next button clicked");
  });
});
