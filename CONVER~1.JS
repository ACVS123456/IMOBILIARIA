const mysql = require('mysql2/promise');

// Criação da conexão
const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sua_senha',
  database: 'chatbot'
});

// Inserção e resposta
app.post('/mensagem', async (req, res) => {
  const { mensagem } = req.body;
  const resposta = gerarRespostaAutomatica(mensagem);

  await db.execute(
    'INSERT INTO conversas (usuario, bot) VALUES (?, ?)',
    [mensagem, resposta]
  );

  res.json({ resposta });
});
