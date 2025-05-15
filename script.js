// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleDarkMode");
  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });
});
