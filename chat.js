function adicionarMensagem(mensagem, autor = 'Você') {
  const chat = document.getElementById('chat-messages');
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('chat-mensagem'); // Mantendo possibilidade de estilo
  msgDiv.innerHTML = `<strong>${autor}:</strong> ${mensagem}`;
  chat.appendChild(msgDiv);
  chat.scrollTop = chat.scrollHeight;
}

function gerarRespostaAutomatica(texto) {
  texto = texto.toLowerCase();
  if (texto.includes('oi') || texto.includes('olá') || texto.includes('bom dia')) {
    return 'Olá! 😊 Como posso te ajudar hoje?';
  }
  if (texto.includes('senha')) {
    return '🔐 Para alterar sua senha, acesse seu perfil e clique em "Alterar Senha".';
  }
  if (texto.includes('contrato')) {
    return '📄 Seus contratos estão disponíveis na aba "Meus Contratos".';
  }
  if (texto.includes('aluguel') || texto.includes('boleto')) {
    return '💰 Você pode acessar seus boletos na área financeira da plataforma.';
  }
  if (texto.includes('falar com humano') || texto.includes('atendente')) {
    return '👩💼 Um atendente humano entrará em contato em breve. Enquanto isso, posso te ajudar com mais alguma coisa?';
  }
  if (texto.includes('obrigado') || texto.includes('valeu')) {
    return '😊 Estamos aqui para ajudar sempre que precisar!';
  }

  const respostasPadrao = [
    'Hmm... Não entendi muito bem. Pode reformular?',
    'Desculpe, não consegui entender sua pergunta. Tente novamente?',
    'Pode me dar mais detalhes, por favor?',
    'Você pode ser mais específico para que eu possa ajudar melhor?'
  ];
  return respostasPadrao[Math.floor(Math.random() * respostasPadrao.length)];
}

function enviarMensagem(event) {
  event.preventDefault();
  const input = document.getElementById('chat-input');
  const texto = input.value.trim();
  if (!texto) return;

  adicionarMensagem(texto, 'Você');
  input.value = '';

  const chat = document.getElementById('chat-messages');

  // Remover digitando anterior se houver
  const existente = document.getElementById('digitando');
  if (existente) existente.remove();

  const digitando = document.createElement('div');
  digitando.id = 'digitando';
  digitando.textContent = 'Atendente 🤖 está digitando...';
  chat.appendChild(digitando);
  chat.scrollTop = chat.scrollHeight;

  setTimeout(() => {
    digitando.remove();
    const resposta = gerarRespostaAutomatica(texto);
    adicionarMensagem(resposta, 'Atendente 🤖');
  }, 1500);
}

document.addEventListener('DOMContentLoaded', () => {
  ['form-promocao', 'form-contato'].forEach(restaurarFormulario);

  ['form-promocao', 'form-contato'].forEach(id => {
    const form = document.getElementById(id);
    if (form) {
      form.addEventListener('input', () => salvarFormulario(id));
    }
  });

  const chatForm = document.getElementById('chat-form');
  if (chatForm) {
    chatForm.addEventListener('submit', enviarMensagem);
  }

  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function () {
      const answer = this.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });
});
