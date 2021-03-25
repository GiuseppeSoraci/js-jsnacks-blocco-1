/* Snack 2.
Inserisci un numero
Se è pari stampa il numero
Se è dispari stampa il numero successivo
*/

// Prompt
var number = parseInt( prompt("Insert Number") );

// Check
if(number % 2 === 0) {
   console.log(number);
} else {
   console.log(++number);
}


