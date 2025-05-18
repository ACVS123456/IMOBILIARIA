// Estrutura básica de um imóvel
/*
imovel = {
  id: string, // id único
  titulo: string,
  descricao: string,
  endereco: string,
  preco: number
}
*/

// Recuperar lista do localStorage ou criar vazia
function getImoveis() {
  return JSON.parse(localStorage.getItem('imoveis')) || [];
}

function salvarImoveis(imoveis) {
  localStorage.setItem('imoveis', JSON.stringify(imoveis));
}

// Adicionar novo imóvel
function adicionarImovel(imovel) {
    const imoveis = getImoveis();
    imoveis.push(imovel);
    salvarImoveis(imoveis);
    alert('Imóvel adicionado com sucesso!');
  }
  
  // Visualizar imóvel pelo ID
  function visualizarImovel(id) {
    const imoveis = getImoveis();
    const imovel = imoveis.find(i => i.id === id);
    if (!imovel) {
      alert('Imóvel não encontrado!');
      return null;
    }
    return imovel;
  }
  
  // Visualizar todos os imóveis cadastrados
  function visualizarImoveisCadastrados() {
    return getImoveis();
  }
  
  // Remover imóvel pelo ID
  function removerImovel(id) {
    let imoveis = getImoveis();
    imoveis = imoveis.filter(imovel => imovel.id !== id);
    salvarImoveis(imoveis);
    alert('Imóvel removido com sucesso!');
  }
  
  // Editar imóvel pelo ID (novos dados passados)
  function editarImovel(id, novosDados) {
    const imoveis = getImoveis();
    const index = imoveis.findIndex(i => i.id === id);
    if (index < 0) {
      alert('Imóvel não encontrado!');
      return;
    }
    imoveis[index] = { ...imoveis[index], ...novosDados };
    salvarImoveis(imoveis);
    alert('Imóvel editado com sucesso!');
  }

  // Exemplo para adicionar imóvel
const novoImovel = {
    id: '123',
    titulo: 'Apartamento no Centro',
    descricao: '2 quartos, 1 suíte, próximo ao metrô',
    endereco: 'Rua A, 123',
    preco: 250000
  };
  adicionarImovel(novoImovel);
  
  // Exemplo para visualizar imóvel
  console.log(visualizarImovel('123'));
  
  // Exemplo para listar todos os imóveis na página
  console.log(visualizarImoveisCadastrados());
  
  // Exemplo para remover imóvel
  removerImovel('123');
  
  // Exemplo para editar imóvel
  editarImovel('123', { preco: 270000 });

  document.getElementById("form-avaliacao").addEventListener("submit", function(e) {
    e.preventDefault();
    const imovel = document.getElementById("imovel").value.trim();
    const comentario = document.getElementById("comentario").value.trim();

    if (imovel && comentario) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${imovel}:</strong> ${comentario}`;
        document.getElementById("lista-avaliacoes").appendChild(li);
        this.reset();
    }
});
