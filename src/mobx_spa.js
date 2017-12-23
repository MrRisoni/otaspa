const express = require('express');
const path = require('path');

const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4800;

const Sequelize = require('sequelize');
const cors = require('cors');

const models = require('./models');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/api/countries', (req, res) => {
    models.CountryModel.findAll(
        { order: [
                ['name', 'ASC']
            ]
        }).then(result => {
        res.send(result);
    });

});

// All remaining requests return the React app, so it can handle routing.
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});