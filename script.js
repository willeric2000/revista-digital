document.addEventListener("DOMContentLoaded", () => {

  const toggleBtn = document.createElement("button");
  toggleBtn.classList.add("theme-toggle-btn");
  toggleBtn.setAttribute("aria-label", "Cambiar tema");
  
  toggleBtn.innerHTML = "🌙"; 
  document.body.appendChild(toggleBtn);

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleBtn.innerHTML = "☀️";
  }

  
  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    
    if (currentTheme === "dark") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      toggleBtn.innerHTML = "🌙";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      toggleBtn.innerHTML = "☀️";
    }
  });
});