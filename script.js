const toggle = document.getElementById("toggle-mode");
toggle.onclick = () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};
