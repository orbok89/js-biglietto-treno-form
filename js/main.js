var attivazione = document.getElementById('calcola');
var annullo = document.getElementById('annulla');
// generatore biglietto 
attivazione.addEventListener('click',
    function(){
        var nome = document.getElementById('nome').value;
        var km = document.getElementById('km').value;
        var eta = document.getElementById('eta').value;
        var Biglietto = document.getElementById('biglietto')
        Biglietto.style.display = 'block'
        if (eta == 'minorenne'){
            var costo =(Number(km * 0.21 * 0.8).toFixed(2)  );
            var nome_offerta = 'Sconto minorenni';
        }
        else if (eta == 'over65'){
            var costo =(Number(km * 0.21 * 0.6).toFixed(2)  );
            var nome_offerta = 'Sconto vecchiarelli';
        }
        else{
            var costo = (Number(km * 0.21).toFixed(2)  );
            var nome_offerta = 'Biglietto ordinario';
        }
        document.getElementById('nome_1').innerHTML= nome;
        document.getElementById('costo').innerHTML= costo;
        document.getElementById('nome_offerta').innerHTML= nome_offerta;
        document.getElementById('carrozza').innerHTML= Math.floor(Math.random() * 10) + 1;
        document.getElementById('codice').innerHTML= Math.floor(Math.random() * 10000) + 90000;
    }

)
annullo.addEventListener('click',
    function(){
        var Biglietto = document.getElementById('biglietto')
        Biglietto.style.display = 'none'
        nome = document.getElementById('nome').value = '';
        km = document.getElementById('km').value = '';
        eta = document.getElementById('eta').value = '';

    }
)