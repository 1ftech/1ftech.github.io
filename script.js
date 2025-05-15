// Dark Mode Toggle
const toggleBtn = document.getElementById("dark-mode-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Project Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll("#projects-list .project");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    projects.forEach(project => {
      if (filter === "all" || project.classList.contains(filter)) {
        project.style.display = "list-item";
      } else {
        project.style.display = "none";
      }
    });
  });
});

