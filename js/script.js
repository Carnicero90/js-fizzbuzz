var fizz = 0;
var buzz = 0;
var fizzbuzz = 0;
var range = 100;

for (var counter = 1; counter <= range; counter++) {
    var num = "";
    if (counter % 3 == 0) {
        num += "Fizz";
        fizz += 1;
    }
    if (counter % 5 == 0) {
        num += "Buzz";
        buzz += 1;
    }
    if (num == "FizzBuzz") {
        fizzbuzz += 1;
    }
    console.log(num || counter)
}

document.getElementById("fizz").innerHTML = fizz;
document.getElementById("buzz").innerHTML = buzz;
document.getElementById("fizzbuzz").innerHTML = fizzbuzz;


/* purtroppo lo avevo già fatto in js qualche giorno fa,
    lo stesso identico esercizio */


// BONUS
var arr = [];
for (var i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
}
console.log("non ordinata: ", arr);
for (var i = 0; i < arr.length; i++) {
    for (var z = 0; z < i; z++) {
        var num = arr[i];
        if (num < arr[z]) {
            var num2 = arr[z];
            arr[i] = num2;
            arr[z] = num;
        }
    }
}
console.log("ordinata: ", arr);



// function reorder(array) {
//     for (var i = 0; i < array.length; i++) {
//         for (var z = 0; z < i; z++) {
//             var num = array[i];
//             if (num < array[z]) {
//                 var num2 = array[z];
//                 array[i] = num2;
//                 array[z] = num;
//             }
//         }
//     }
// }