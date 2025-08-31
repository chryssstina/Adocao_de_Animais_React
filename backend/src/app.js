const express = require('express');
const app = express();

app.use(express.json()); //middleware para passar e receber requisições no corpo do json


const userRoutes = require('./routes/userRoute');
const animalRoutes = require('./routes/animalRoute');
const adoptionRoutes = require('./routes/adoptionRoute');
const favoriteRoutes = require('./routes/favoriteRoute');
const authRoutes = require('./routes/authRoute');

// endpoints
app.use('/api/user', userRoutes);
app.use('/api/animal', animalRoutes);
app.use('/api', adoptionRoutes);
app.use(favoriteRoutes); //passando a rota mais detalhada em favoriteRoutes
app.use("/api/auth", authRoutes);

// apenas teste
app.get('/', (req, res) => {
    res.send('Rodando a API da ONG!')
});

module.exports = app;