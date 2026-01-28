function toggleProjects() {
  const menu = document.getElementById("projectMenu");
  menu.classList.toggle("hidden");
}

function openProject(url) {
  window.open(url, "_blank");
}
