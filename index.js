// Toggle navigation menu on small screens
const toggleMenu = document.querySelector('.toggle-menu');
const navigation = document.querySelector('nav');

toggleMenu.addEventListener('click', () => {
  navigation.classList.toggle('show');
});

// Smooth scrolling to page sections
const links = document.querySelectorAll('nav a');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(event) {
  event.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

// Animate project sections on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const scrollY = window.scrollY;

    if (scrollY > sectionTop + sectionHeight - window.innerHeight) {
      section.classList.add('animate');
    } else {
      section.classList.remove('animate');
    }
  }
});
