const app = require('./app');

// o número da porta pode ser passado no .env ou na 3000
const portaServidor = process.env.portaServidor || 3000;

app.listen(portaServidor, () => {
    console.log(`Servidor rodando na porta ${portaServidor}`);
})