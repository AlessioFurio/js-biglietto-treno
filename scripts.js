
// chiedere all' utente quanti km deve percorrere
var km = prompt ('Quanti km devi percorrere?');
console.log ('Devi percorrere ' + km + ' km');

//controllo input km

if (!isNaN(km)) {

    console.log('Hai digitato un valore corretto quindi hai digitato un numero');

    var eta = prompt ('Quanti anni hai?');
    console.log ('Hai ' + eta + ' anni');

    if (!isNaN(eta)) {
        console.log('Hai digitato un valore corretto quindi hai digitato un numero');

        var costo_bigl = (km * 0.21);
        var costo_bigl_minorenne = (costo_bigl - (costo_bigl * 20) /100);
        var costo_bigl_over = (costo_bigl - (costo_bigl * 40) /100);

        if (eta < 18){
            console.log ('Complimenti! Hai diritto a uno sconto del 20%, perciò il prezzo del tuo biglietto è di: ' + costo_bigl_minorenne + '€' + ' anzichè ' + costo_bigl);
        }
        // se >=65, applica sconto di 40%
        else if (eta >= 65){
            console.log ('Complimenti! Hai diritto a uno sconto del 40%, perciò il prezzo del tuo biglietto è di: ' + costo_bigl_over + '€' + ' anzichè ' + costo_bigl);
        }
        // altrimenti non sarà ne minorenne e ne over65 e di default si verificherà la seguente condizione (eta >= 18 && eta <=64)
        else {
            console.log ('Uff! Non hai diritto a nessuno sconto, perciò il prezzo del tuo biglietto è di: ' + costo_bigl + '€');}
    }

    else {
        console.log('Hai digitato un valore non corretto quindi non hai digitato un numero');
    }

}
else{
    console.log('Hai digitato un valore non corretto quindi non hai digitato un numero');
}
