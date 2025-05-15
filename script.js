// === DARK MODE TOGGLE ===
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  // Load dark mode preference
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    // Save preference
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});

// === SMOOTH SCROLL NAVIGATION ===
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// === PROJECT LINKS ===
// Make sure your anchor tags for projects have target="_blank" and valid hrefs
// Example in HTML:
// <a href="https://github.com/yourname/project1" target="_blank">Project 1</a>

// === FUTURE FEATURE PLACEHOLDER ===
// You can add interactive features like filtering projects, modals, etc.
// For example:
// document.querySelector('#filter-button').addEventListener('click', () => {
//   // filter logic here
// });
