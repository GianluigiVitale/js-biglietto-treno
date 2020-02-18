/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole
percorrere e l’età del passeggero. Sulla base di queste informazioni dovrà
calcolare il prezzo totale del viaggio. Il prezzo del biglietto è definito in base ai
km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.

1. 2 Variabili con prompt per chiedere il 'numero di chilometri' e 'l'età'
2. Variabile con 'costo per chilometro'
3. Variabile con 'costo per chilometro' moltiplicata per il 'numero di chilometri'
4. Variabile con sconto per minorenni
5. Variabile con sconto per over65
6. Creo un if - else if - else dove se l'eta inserita e' minore di 18 nell'html viene inserito il costo per costoPerMinorenni
    se over 65 costo per over65 altrimenti prezzo normale
*/

var chilometri = prompt('Quanti chilometri vuoi percorrere?');
var anni = prompt('Quanti anni hai?');
var costoPerChilometro = 0.21;
var costoChilometriTotale = chilometri * costoPerChilometro;
var costoPerMinorenni = costoChilometriTotale * 0.8;
var costoPerOver65 = costoChilometriTotale * 0.6;

if (anni < 18) {
    document.getElementById('costobiglietto').innerHTML = ('Prezzo: ' + Math.ceil(costoPerMinorenni) + '€');
} else if (anni >= 65) {
    document.getElementById('costobiglietto').innerHTML = ('Prezzo: ' + Math.ceil(costoPerOver65) + '€');
} else {
    document.getElementById('costobiglietto').innerHTML = ('Prezzo: ' + Math.ceil(costoChilometriTotale) + '€');
}
