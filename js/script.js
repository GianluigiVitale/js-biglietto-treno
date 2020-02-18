var chilometri = prompt('Quanti chilometri vuoi percorrere?');
var anni = prompt('Quanti anni hai?');
var costoPerChilometro = 0.21;
var costoChilometriTotale = chilometri * costoPerChilometro;
var costoPerMinorenni = chilometri * costoPerChilometro * 0.8;
var costoPerOver65 = chilometri * costoPerChilometro * 0.6;

if (anni < 18) {
    document.getElementById('costobiglietto').innerHTML = ('Prezzo: ' + Math.ceil(costoPerMinorenni) + '€');
} else if (anni > 65) {
    document.getElementById('costobiglietto').innerHTML = ('Prezzo: ' + Math.ceil(costoPerOver65) + '€');
} else {
    document.getElementById('costobiglietto').innerHTML = ('Prezzo: ' + Math.ceil(costoChilometriTotale) + '€');
}
