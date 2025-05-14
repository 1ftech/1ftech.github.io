// Toggle dark mode
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Filter projects by search term
document.getElementById('projectSearch').addEventListener('input', function() {
  const search = this.value.toLowerCase();
  const projects = document.querySelectorAll('#projectList li');

  projects.forEach(project => {
    const text = project.textContent.toLowerCase();
    project.style.display = text.includes(search) ? 'list-item' : 'none';
  });
});


