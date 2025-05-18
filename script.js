document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector("section:nth-child(2)");
    const listaImoveis = ["Apartamento no Centro", "Casa com Quintal", "Cobertura Luxuosa"];
  
    listaImoveis.forEach((imovel) => {
      const p = document.createElement("p");
      p.textContent = imovel;
      section.appendChild(p);
    });
  });
  
  