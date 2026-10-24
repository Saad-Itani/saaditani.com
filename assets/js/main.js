// Theme toggle functionality
// (the saved theme is applied by the inline script in <head>, before first paint)
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  // Toggle theme on click
  if (toggle) {
    toggle.addEventListener("click", () => {
      const currentTheme = html.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      html.setAttribute("data-theme", newTheme === "dark" ? "dark" : "");
      localStorage.setItem("theme", newTheme);
    });
  }

  // Section switching: show the section named in the url hash, default to about
  const sections = document.querySelectorAll("[data-section]");
  const navLinks = document.querySelectorAll(".nav-link");

  const showSection = () => {
    const name = location.hash.slice(1);
    const exists = Array.from(sections).some((s) => s.dataset.section === name);
    const current = exists ? name : "about";

    sections.forEach((s) => s.classList.toggle("active", s.dataset.section === current));
    navLinks.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${current}`));
  };

  showSection();
  window.addEventListener("hashchange", showSection);
});
