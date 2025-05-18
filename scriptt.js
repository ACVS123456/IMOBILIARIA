function carregarSolicitacoes() {
  listaSolicitacoes.innerHTML = "";
  const solicitacoes = JSON.parse(localStorage.getItem('solicitacoesMarketing')) || [];

  solicitacoes.forEach(({ tipo, detalhes, data }, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${tipo}</td>
      <td>${detalhes.replace(/, /g, '<br>')}</td>
      <td>${data}</td>
      <td style="text-align: center;">
        <button onclick="excluirSolicitacao(${index})" style="cursor:pointer;">🗑️</button>
      </td>
    `;
    listaSolicitacoes.appendChild(row);
  });
}

function excluirSolicitacao(index) {
  if (!confirm("Deseja excluir esta solicitação?")) return;

  const solicitacoes = JSON.parse(localStorage.getItem('solicitacoesMarketing')) || [];
  solicitacoes.splice(index, 1);
  localStorage.setItem('solicitacoesMarketing', JSON.stringify(solicitacoes));
  carregarSolicitacoes();
}
