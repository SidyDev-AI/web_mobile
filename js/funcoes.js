const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".component-section");

function showSection(target, link) {
  // Esconde todas as seções
  sections.forEach(sec => sec.classList.remove("show"));

  // Mostra a selecionada
  setTimeout(() => {
    const section = document.getElementById(target);
    section.classList.add("show");
    // rolagem automática opcional:
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 50);

  // Atualiza menu ativo
  links.forEach(l => l.classList.remove("active"));
  link.classList.add("active");
}

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    showSection(link.getAttribute("data-target"), link);
  });
});

// Ao carregar, mostra a primeira seção
if (links.length > 0) {
  const firstLink = links[0];
  const firstTarget = firstLink.getAttribute("data-target");
  firstLink.classList.add("active");
  document.getElementById(firstTarget).classList.add("show");
}