const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const Keycloak = require('keycloak-connect');
require('dotenv').config();

const app = express();

const memoryStore = new session.MemoryStore();

const keycloak = new Keycloak({
  store: memoryStore
});

app.use(bodyParser.json());

app.use(session({
  secret: 'mySecret',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}));

app.use(keycloak.middleware({
  logout: '/logout',
  admin: '/'
}));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connexion à MongoDB réussie');
  })
  .catch((err) => {
    console.error('Erreur de connexion à MongoDB', err);
  });

const universiteRoutes = require('./universiteRoutes');
app.use('/api', universiteRoutes); 

app.get('/public', (req, res) => {
  res.json({ message: 'Route publique accessible sans authentification' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API Gateway lancée sur le port ${PORT}`);
});
