const menu = document.querySelector(".abrir-menu");
const navegacao = document.querySelector("#navegacao");
const telaPequena = window.matchMedia("(max-width: 720px)");

function mostrarMenu(aberto) {
  menu.setAttribute("aria-expanded", String(aberto));
  navegacao.classList.toggle("aberta", aberto);
}

menu.hidden = false;
document.documentElement.classList.add("menu-ativo");
menu.addEventListener("click", () => mostrarMenu(menu.getAttribute("aria-expanded") !== "true"));
navegacao.addEventListener("click", (evento) => {
  if (!telaPequena.matches) return;
  const link = evento.target.closest("a");
  if (!link) return;
  mostrarMenu(false);
  const secao = document.getElementById(link.hash.slice(1));
  if (secao) {
    secao.tabIndex = -1;
    secao.focus({ preventScroll: true });
  }
});
document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
    mostrarMenu(false);
    menu.focus();
  }
});
telaPequena.addEventListener("change", () => mostrarMenu(false));
