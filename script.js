const btnModo = document.getElementById("btn-modo");

btnModo.addEventListener("click", () => {
  document.body.classList.toggle("modo-noche");

  if (document.body.classList.contains("modo-noche")) {
    btnModo.innerHTML = "☀️ Modo Día";
  } else {
    btnModo.innerHTML = "🌙 Modo Noche";
  }
});
