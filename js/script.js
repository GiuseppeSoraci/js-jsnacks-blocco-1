/* Snack 1.
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while
*/

// Var
var requests = 5;
var sum = 0;

// Loop
// A) For
// for (var i = 1; i <= requests; i++) {
//     var number = parseInt( prompt( "Insert your number " + i + " of " + requests) );
//     sum += number;
// }

// B) while
var counter = 1;
while (counter <= requests) {
    var number = parseInt( prompt( "Insert your number " + counter + " of " + requests) );
    sum += number;
    counter++;
}

console.log(sum);
