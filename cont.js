const mongoose = require('mongoose');

const ConversaSchema = new mongoose.Schema({
  usuario: String,
  bot: String,
  criado_em: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Conversa', ConversaSchema);
