
// chiedere all' utente quanti km deve percorrere
var km = prompt ('Quanti km devi percorrere?');
console.log ('Devi percorrere ' + km + ' km');

// chiedere all' utente quanti hanni
var eta = prompt ('Quanti anni hai?');
console.log ('Hai ' + eta + ' anni');

// calcolo costo biglietto senza applicazione di sconti
var costo_bigl = (km * 0.21);
console.log ('Il costo del biglietto è: ' + costo_bigl + '€');

// calcolo costo biglietto per un minorenne
var costo_bigl_minorenne = (costo_bigl - (costo_bigl * 20) /100);

// calcolo costo biglietto per un over 65
var costo_bigl_over = (costo_bigl - (costo_bigl * 40) /100);
console.log ('Il costo del biglietto per un minorenne è: ' + costo_bigl_minorenne + '€');
console.log ('Il costo del biglietto per un over65 è: ' + costo_bigl_over + '€');


// se <18, applica sconto di 20%
if (eta < 18){
    console.log ('Complimenti! Hai diritto a uno sconto del 20%, perciò il prezzo del tuo biglietto è di: ' + costo_bigl_minorenne + '€' + ' anzichè ' + costo_bigl);
}
// se >=65, applica sconto di 40%
else if (eta >= 65){
    console.log ('Complimenti! Hai diritto a uno sconto del 40%, perciò il prezzo del tuo biglietto è di: ' + costo_bigl_over + '€' + ' anzichè ' + costo_bigl);
}
// altrimenti non sarà ne minorenne e ne over65 e di default si verificherà la seguente condizione (eta >= 18 && eta <=64)
else {
    console.log ('Uff! Non hai diritto a nessuno sconto, perciò il prezzo del tuo biglietto è di: ' + costo_bigl + '€');
}


//da aggiungere i controlli su input utente
