
var km = prompt ('Quanti km devi percorrere?');
console.log ('Devi percorrere ' + km + ' km');

var eta = prompt ('Quanti anni hai?');
console.log ('Hai ' + eta + ' anni');

var costo_bigl = (km * 0.21);
console.log ('Il costo del biglietto è: ' + costo_bigl + '€');

var costo_bigl_minorenne = (costo_bigl - (costo_bigl * 20) /100);
var costo_bigl_over = (costo_bigl - (costo_bigl * 40) /100);
console.log ('Il costo del biglietto per un minorenne è: ' + costo_bigl_minorenne + '€');
console.log ('Il costo del biglietto per un over65 è: ' + costo_bigl_over + '€');



if (eta < 18){
    console.log ('Complimenti! Hai diritto a uno sconto del 20%, perciò il prezzo del tuo biglietto è di: ' + costo_bigl_minorenne + '€' + ' anzichè ' + costo_bigl);
}
else if (eta >= 65){
    console.log ('Complimenti! Hai diritto a uno sconto del 40%, perciò il prezzo del tuo biglietto è di: ' + costo_bigl_over + '€' + ' anzichè ' + costo_bigl);
}
else {
    console.log ('Uff! Non hai diritto a nessuno sconto, perciò il prezzo del tuo biglietto è di: ' + costo_bigl + '€');
}


//da aggiungere i controlli su input utente
