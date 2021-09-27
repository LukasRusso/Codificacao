var express = require('express');
var router = express.Router();
var calculo = require('services/calculo.service');

// routes
router.post('/iterativo', Iterativo);
router.post('/recursivo', Recursivo);

module.exports = router;

function Iterativo(req, res) {
    var valorMin = req.body.valorMin;
    var valorMax = req.body.valorMax;   

    calculo.IterativoPromisse(valorMin, valorMax)
        .then(function (resp) { 
            res.status(200).send(resp);           
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}


function Recursivo(req, res) {
    var valorMin = req.body.valorMin;
    var valorMax = req.body.valorMax;

    calculo.RecursivoPromisse(valorMin, valorMax)
        .then(function (resp) { 
            res.status(200).send(resp);           
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

