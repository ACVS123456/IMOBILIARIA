function salvarOuCadastrarImovel() {
  const indiceEdicao = document.getElementById('indiceEdicaoImovel').value;
  const titulo = document.getElementById('titulo').value.trim();
  const imagem = document.getElementById('imagem').value.trim();
  const video = document.getElementById('video').value.trim();
  const descricao = document.getElementById('descricao').value.trim();

  if (!titulo || !imagem || !video || !descricao) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  const imoveis = JSON.parse(localStorage.getItem("imoveisDestaque") || "[]");

  if (indiceEdicao === "") {
    // Cadastrar novo
    imoveis.push({ titulo, imagem, video, descricao });
    alert("Imóvel cadastrado com sucesso!");
  } else {
    // Editar existente
    imoveis[indiceEdicao] = { titulo, imagem, video, descricao };
    alert("Imóvel editado com sucesso!");
  }

  localStorage.setItem("imoveisDestaque", JSON.stringify(imoveis));
  renderizarImoveis();
  cancelarEdicaoImovel();
}
