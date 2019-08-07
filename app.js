const express = require('express');
const app = express();

const gamesRoutes = require('API/routes/Games');

const gamesRoutes = require('API/routes/tournament');

app.use('/Games', gamesRoutes);
app.use('/Games', tournamentRoutes);

module.exports = app;
