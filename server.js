require('rootpath')(); 
var express = require('express');
var config = require("./config.json");
var cors = require('cors');

// Criação da API e indicação que trabalha com JSON
var api = express();
api.use(cors());
api.use(express.urlencoded());
api.use(express.json());

api.use('/api/calculo', require('./controllers/api/calculo.controller'));

// process.env.PORT é uma variável injetada pelo Azure Web App. Caso ela não exista, será utilizada a porta fixa (6000)
var apiPort = process.env.PORT || config.port;

// start server API
var serverAPI = api.listen(apiPort, function () {
    console.log('Server API listening at http://' + serverAPI.address().address + ':' + serverAPI.address().port);
});

console.log('Application started');
