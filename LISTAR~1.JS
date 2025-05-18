function filtrarCorretores() {
    const termo = document.getElementById("filtroBusca").value.trim().toLowerCase();
    const lista = document.getElementById("listaCorretores");
    lista.innerHTML = "";
    const corretores = JSON.parse(localStorage.getItem("corretores") || "[]");
  
    corretores.forEach((corretor, index) => {
      if (
        corretor.nome.toLowerCase().includes(termo) ||
        corretor.creci.toLowerCase().includes(termo)
      ) {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${corretor.nome}</td>
          <td>${corretor.email}</td>
          <td>${corretor.telefone}</td>
          <td>${corretor.creci}</td>
          <td>${corretor.experiencia} anos</td>
          <td>${corretor.data}</td>
          <td>
            <button onclick="editarCorretor(${index})">✏️ Editar</button>
            <button onclick="excluirCorretor(${index})">🗑️ Excluir</button>
          </td>
        `;
        lista.appendChild(row);
      }
    });
  }
  

  function editarCorretor(index) {
    const corretores = JSON.parse(localStorage.getItem("corretores") || "[]");
    const corretor = corretores[index];
  
    document.getElementById("nome").value = corretor.nome;
    document.getElementById("email").value = corretor.email;
    document.getElementById("telefone").value = corretor.telefone;
    document.getElementById("creci").value = corretor.creci;
    document.getElementById("experiencia").value = corretor.experiencia;
    document.getElementById("indiceEdicao").value = index;
  
    document.getElementById("btnCadastro").textContent = "Atualizar";
  }
  
  function excluirCorretor(index) {
    let corretores = JSON.parse(localStorage.getItem("corretores") || "[]");
    corretores.splice(index, 1);
    localStorage.setItem("corretores", JSON.stringify(corretores));
  
    document.getElementById("mensagemCadastro").textContent = "Corretor excluído com sucesso!";
    document.getElementById("mensagemCadastro").style.color = "red";
  
    listarCorretores();
  }
  
  function limparCorretores() {
    localStorage.removeItem("corretores");
    document.getElementById("mensagemCadastro").textContent = "Todos os corretores foram removidos.";
    document.getElementById("mensagemCadastro").style.color = "red";
  
    listarCorretores();
  }
  
  // Chamar listarCorretores ao carregar a página
  document.addEventListener("DOMContentLoaded", listarCorretores);