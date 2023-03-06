const body = document.querySelector("#body");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function animateHeading(heading) {
  let iterations = 0;
  const interval = setInterval(() => {
    heading.innerText = heading.innerText.split("").map((letter, index) => {
      if(index < iterations) {
        return heading.dataset.value[index];
      }
      return letters[Math.floor(Math.random() * 26)];
    }).join("");
    
    if(iterations >= heading.dataset.value.length) {
      clearInterval(interval);
    }
    iterations += 1;
  }, 90);
}

body.addEventListener("mouseover", function(event) {
  if (event.target.matches("h1, h2, h3")) {
    animateHeading(event.target);
  }
});
