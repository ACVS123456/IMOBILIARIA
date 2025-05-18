// Exibir resultado da solicitação
document.getElementById('form-promocao').addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = document.getElementById('nome-proprietario').value;
  const email = document.getElementById('email-proprietario').value;
  const detalhes = document.getElementById('detalhes-imovel').value;

  document.getElementById('res-nome').textContent = nome;
  document.getElementById('res-email').textContent = email;
  document.getElementById('res-detalhes').textContent = detalhes;

  document.getElementById('resultado-promocao').style.display = 'block';

  // Opcional: limpar os campos
  // e.target.reset();

  // Salvar dados no localStorage novamente
  salvarFormulario('form-promocao');
});
