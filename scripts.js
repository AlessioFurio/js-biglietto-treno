
// chiedere all' utente quanti km deve percorrere
var km = parseInt(prompt ('Quanti km devi percorrere?'));
console.log ('Devi percorrere ' + km + ' km');
document.getElementById ('km').innerHTML = document.getElementById ('km').innerHTML + km;

//controllo input km

if (!isNaN(km) && km != 0) {

    console.log('Hai digitato un valore corretto quindi hai digitato un numero quindi puoi procedere...');



    // chiedere all' utente quanti anni
    var eta = parseInt(prompt ('Quanti anni hai?'));
    console.log ('Hai ' + eta + ' anni');
    document.getElementById ('eta').innerHTML = document.getElementById ('eta').innerHTML + eta;

    // controllo input eta
    if (!isNaN(eta)) {
        console.log('Hai digitato un valore corretto quindi hai digitato un numero quindi puoi procedere...');

        //dichiarazione variabili costo dei biglietti

        var costo_bigl = (km * 0.21);
        var costo_bigl_minorenne = (costo_bigl - (costo_bigl * 20) /100).toFixed(2);
        var costo_bigl_over = (costo_bigl - (costo_bigl * 40) /100).toFixed(2);

        // se < 18, applica sconto di 20%
        if (eta < 18){
            console.log ('Complimenti! Hai diritto a uno sconto del 20%, perciò il prezzo del tuo biglietto è di: ' + costo_bigl_minorenne + '€' + ' anzichè ' + costo_bigl);
            document.getElementById ('prezzo').innerHTML = document.getElementById ('prezzo').innerHTML + costo_bigl_minorenne;
        }
        // se >=65, applica sconto di 40%
        else if (eta >= 65){
            console.log ('Complimenti! Hai diritto a uno sconto del 40%, perciò il prezzo del tuo biglietto è di: ' + costo_bigl_over + '€' + ' anzichè ' + costo_bigl);
            document.getElementById ('prezzo').innerHTML = document.getElementById ('prezzo').innerHTML + costo_bigl_over;
        }
        // altrimenti non sarà ne minorenne e ne over65 e di default si verificherà la seguente condizione (eta >= 18 && eta <=64)
        else {
            console.log ('Uff! Non hai diritto a nessuno sconto, perciò il prezzo del tuo biglietto è di: ' + costo_bigl + '€');
            document.getElementById ('prezzo').innerHTML = document.getElementById ('prezzo').innerHTML + costo_bigl;
        }
    }

    // esce dall' algoritmo perchè non è stato digitato un numero per eta
    else {
        console.log('Hai digitato un valore non corretto quindi non hai digitato un numero quindi ricarica la pagina e inserisci un valore corretto cioè un numero');
    }

// esce dall' algoritmo perchè non è stato digitato un numero per km
}
else{
    console.log('Hai digitato un valore non corretto quindi non hai digitato un numero quindi ricarica la pagina e inserisci un valore corretto cioè un numero intero diverso da 0');
}
