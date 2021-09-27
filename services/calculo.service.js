var Q = require('q');

var service = {};

service.IterativoPromisse = IterativoPromisse;
service.RecursivoPromisse = RecursivoPromisse;

module.exports = service;

function IterativoPromisse(valorMin, valorMax){
    var deferred = Q.defer();
    
    if(!checkParameters(valorMin, valorMax)) 
        return deferred.reject("Parametros incorretos, Xm > 0.");
    
    deferred.resolve({"calculoIterativo": CalculoIterativo(valorMin, valorMax)});

    return deferred.promise;
}

function CalculoIterativo(valorMin, valorMax) {
    var retorno = (valorMin + (1/valorMin));

    valorMin += 1;

    for(var i = valorMin; i <= valorMax; i++)
        retorno = retorno * (i + (1/i));

    return retorno;
}

function RecursivoPromisse(valorMin, valorMax){
    var deferred = Q.defer();

    if(!checkParameters(valorMin, valorMax)) return deferred.reject("Parametros incorretos, Xm > 0.");
        
    deferred.resolve({"calculoRecursivo": CalculoRecursivo(valorMin, valorMax)});

    return deferred.promise;
}

function CalculoRecursivo(valorMin, valorMax) {
    var valorAtual = (valorMin + (1/valorMin));
    
    if(valorMin == valorMax) 
        return valorAtual; 
    else    
        return valorAtual * CalculoRecursivo(valorMin + 1, valorMax);
}

function checkParameters(valorMin, valorMax){
    if(valorMin == undefined || valorMax == undefined)
        return false;
    else if(valorMin == 0 || valorMin > valorMax)
        return false;

    return true;
}