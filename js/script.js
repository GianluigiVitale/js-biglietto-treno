var chilometri = prompt('Quanti chilometri vuoi percorrere?')
var anni = prompt('Quanti anni hai?')
var costoPerChilometro = 0.21
var costoChilometriTotale = chilometri * costoPerChilometro
var costoPerMinorenni = chilometri * costoPerChilometro * 0.8
var costoPerOver65 = chilometri * costoPerChilometro * 0.6

if (anni < 18) {
    console.log(costoPerMinorenni);
} else if (anni > 65) {
    console.log(costoPerOver65);
} else {
    console.log(costoChilometriTotale)
}
