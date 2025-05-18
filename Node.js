// pseudo-código back-end
app.post('/mensagem', async (req, res) => {
  const { texto } = req.body;

  const historico = await Conversas.find({ mensagemUsuario: new RegExp(texto, 'i') });

  if (historico.length > 0) {
    return res.send({ resposta: historico[0].respostaBot });
  }

  // Se não encontrar no banco, usar resposta padrão
  const resposta = gerarRespostaAutomatica(texto);

  // Salva nova interação
  await Conversas.insertOne({
    mensagemUsuario: texto,
    respostaBot: resposta,
    data: new Date()
  });

  res.send({ resposta });
});
