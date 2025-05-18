const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Conectar ao MongoDB Atlas
mongoose.connect('mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/chatbotDB')
  .then(() => console.log('🟢 Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar:', err));

// Modelo de Mensagem
const Mensagem = mongoose.model('Mensagem', new mongoose.Schema({
  mensagemUsuario: String,
  respostaBot: String,
  data: { type: Date, default: Date.now }
}));

// Função simples de resposta automática
function gerarRespostaAutomatica(texto) {
  const textoLower = texto.toLowerCase();

  if (textoLower.includes('senha')) return '🔐 Você pode alterar sua senha no perfil.';
  if (textoLower.includes('contrato')) return '📄 Veja seus contratos na aba "Meus Contratos".';
  if (textoLower.includes('humano')) return '👤 Um atendente irá falar com você em breve.';

  const respostas = [
    '🤖 Ainda estou aprendendo. Pode repetir?',
    'Desculpe, não entendi. Reformule por favor.',
    'Interessante! Me diga mais sobre isso.'
  ];
  return respostas[Math.floor(Math.random() * respostas.length)];
}

// Rota de mensagem
app.post('/mensagem', async (req, res) => {
  const { texto } = req.body;

  const similar = await Mensagem.findOne({ mensagemUsuario: new RegExp(texto, 'i') });

  let resposta;
  if (similar) {
    resposta = similar.respostaBot;
  } else {
    resposta = gerarRespostaAutomatica(texto);
    await new Mensagem({ mensagemUsuario: texto, respostaBot: resposta }).save();
  }

  res.send({ resposta });
});

// Iniciar servidor
app.listen(3000, () => {
  console.log('🚀 Servidor rodando em http://localhost:3000');
});
