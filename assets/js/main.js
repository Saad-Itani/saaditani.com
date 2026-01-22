// Theme toggle functionality
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  // Check for saved theme preference or default to light
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    html.setAttribute("data-theme", "dark");
  }

  // Toggle theme on click
  if (toggle) {
    toggle.addEventListener("click", () => {
      const currentTheme = html.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      html.setAttribute("data-theme", newTheme === "dark" ? "dark" : "");
      localStorage.setItem("theme", newTheme);
    });
  }
});
