var fizz = 3;
var buzz = 5;
// var fizzbuzz = fizz * buzz;
var range = 100;
var totFizz = (range - range % fizz) / fizz;
/* a titolo esemplificativo: (100 - 100 % 3) dà come risultato l'ultimo multiplo
di 3 inferiore a 100 (100 -1 = 99): dividendolo per 3, ho come risultato il 
n.ro totale di multipli di 3 inferiori a 100 (99/3 = 33)
*/
var totBuzz = (range - range % buzz) / buzz;
var totFizzbuzz = (totBuzz - totBuzz % fizz) / fizz;

for (var counter = 1; counter <= range; counter++) {
    var num = "";
    if (counter % fizz == 0) {
        num += "Fizz";
    }
    if (counter % buzz == 0) {
        num += "Buzz";
    }

    console.log(num || counter)
}

document.getElementById("fizz").innerHTML = totFizz;
document.getElementById("buzz").innerHTML = totBuzz;
document.getElementById("fizzbuzz").innerHTML = totFizzbuzz;


/* purtroppo lo avevo già fatto in js qualche giorno fa,
    lo stesso identico esercizio */


// BONUS
var arr = [];
for (var i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
}
console.log("non ordinata:\n" + arr.join("\n"));
for (var i = 0; i < arr.length; i++) {
    for (var z = 0; z < i; z++) {
        var num = arr[i];
        var num2 = arr[z];
        if (num < num2) {
            arr[i] = num2;
            arr[z] = num;
        }
    }
}
console.log("ordinata:\n" + arr.join("\n"));