const express = require('express');
const cors = require('cors');

const app = express();

// habilita CORS para o frontend em http://localhost:5173
app.use(cors({
    origin: "http://localhost:5173"
}));

// se quiser liberar para qualquer origem durante o desenvolvimento, use:
// app.use(cors());

app.use(express.json()); // middleware para trabalhar com JSON

// rotas
const userRoutes = require('./routes/userRoute');
const animalRoutes = require('./routes/animalRoute');
const adoptionRoutes = require('./routes/adoptionRoute');
const favoriteRoutes = require('./routes/favoriteRoute');
const authRoutes = require('./routes/authRoute');

// endpoints
app.use('/api/user', userRoutes);
app.use('/api/animal', animalRoutes);
app.use('/api', adoptionRoutes);
app.use(favoriteRoutes);
app.use("/api/auth", authRoutes);

// apenas teste
app.get('/', (req, res) => {
    res.send('Rodando a API da ONG!');
});

module.exports = app;
