const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const _ = require('lodash');
const mysql = require("mysql");
const cors = require('cors');
const async = require('async');

app.use(cors());
app.use(bodyParser.json());

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "otaspa"
});


con.connect(function (err) {
    if (err) {
        console.log('Error connecting to Db');
        console.log(err);
        return;
    }
    console.log('Connection established');
});




app.get('/api/baggages', function (req,res) {
    con.query("SELECT * FROM baggages WHERE carrier = '" + req.body.carrier + "' ORDER BY price ASC", function (err, bags) {
       res.send(bags);
    });
});

http.listen(3500, function (req, res) {
    console.log('Server runs...');
});


