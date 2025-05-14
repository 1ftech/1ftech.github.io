// Dark Mode Toggle Functionality
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

// Project Filter Functionality
function filterProjects(category) {
  const projects = document.querySelectorAll('#projects-list li');
  projects.forEach(project => {
    if (category === 'All' || project.textContent.toLowerCase().includes(category.toLowerCase())) {
      project.style.display = 'list-item';
    } else {
      project.style.display = 'none';
    }
  });
}

