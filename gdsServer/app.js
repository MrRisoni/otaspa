const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/node_modules', express.static('node_modules'));



app.post('/lookup', function (req, res) {

    res.sendStatus(201);

});


http.listen(3500, function (req, res) {
    console.log('Server listening on port number', port);
});


