// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the project container
  const projectContainer = document.querySelector(".project-container");

  // Define the project URL
  const projectUrl = "osin.com.np/newp.html";

  // Create a link element for the project
  const projectLink = document.createElement("a");
  projectLink.href = projectUrl;
  projectLink.textContent = "View Project"; // Change the text as needed

  // Append the link element to the project container
  projectContainer.appendChild(projectLink);
});
