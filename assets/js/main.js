// simple little enhancement
document.addEventListener("DOMContentLoaded", () => {
  const build = document.getElementById("build-label");
  if (build) {
    const today = new Date();
    const formatted = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    build.textContent = `Draft build · ${formatted}`;
  }
});
