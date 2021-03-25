/* Snack 3.
Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi
Gatsby vuole generare una falsa lista di 3 invitati.
*/

// Array
var names = ["Paolo", "Alba", "Lorenzo", "Scarlett"];
console.log(names);

var surnames = ["Rossi", "Gattuso", "Jackson", "Duzioni"];
console.log(surnames);

var fullNameList = [];

// Loop
for (var i = 0; i < 3; i++) {
    // gen names
    var randomNameIndex = (Math.floor(Math.random() * names.length));
    console.log(randomNameIndex);

    // gen surnames
    var randomSurnameIndex = (Math.floor(Math.random() * surnames.length));
    console.log(randomSurnameIndex);

    // gen full names
    var newFullName = names[randomNameIndex] + " " + surnames[randomSurnameIndex];

    // add to list
    fullNameList.push(newFullName);
}

console.log(fullNameList);



