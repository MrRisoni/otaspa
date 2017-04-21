const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const io = require('socket.io')(http);

app.use(bodyParser.json());
app.use("/node_modules", express.static('node_modules'));


io.on('connection', function (socket) {
    console.log('a user connected ');
});



app.post('/pricechange', function (req, res) {
    // make call to gds
    io.emit('notify', {
        changed: true
    });
    res.sendStatus(201);

});


http.listen(3500, function (req, res) {
    console.log('Server listening on port number', port);
});


