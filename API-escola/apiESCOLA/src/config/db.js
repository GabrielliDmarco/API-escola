const mongoose = require('mongoose');
require('dotenv').config(); // Para carregar as variáveis de ambiente do arquivo .env

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Erro ao conectar ao MongoDB: ${error.message}`);
    process.exit(1); // Encerra a aplicação se a conexão falhar
  }
};

module.exports = connectDB;