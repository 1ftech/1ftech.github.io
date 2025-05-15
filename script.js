// Dark mode toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleDarkMode");
  const body = document.body;

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    // Save preference
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
  });

  // Load saved mode
  if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
  }
});
