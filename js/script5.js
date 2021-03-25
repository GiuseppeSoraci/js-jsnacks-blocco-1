/* Snack 5 - Bonus
Crea due array di numeri che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/

// Array
var firstArray = [4, 11, 67, 404];
var secondArray = [17, 130];

// Loop
var randomNumbers = (Math.floor(Math.random() * 999));

if (firstArray.length > secondArray.length) {
    while (firstArray.length > secondArray.length) {
        secondArray.push(randomNumbers);
    }
} else if (firstArray.length < secondArray.length) {
    while (firstArray.length < secondArray.length) {
        firstArray.push(randomNumbers);
    }
}

console.log(firstArray);
console.log(secondArray);


