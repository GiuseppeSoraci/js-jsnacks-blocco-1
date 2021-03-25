/* Snack 4.
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
*/

// Array
var number = [1, 4, 17, 13, 410, 16];

var sum = 0;

// Loop
for (var i = 0; i < number.length; i++) {
    console.log(number[i]);
    console.log("Position: ", i);

    // Check
    if( i % 2 !== 0) {
        sum += number[i];
    }
}

console.log ("Total:", sum);

    