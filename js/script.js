var fizz = 0;
var buzz = 0;
var fizzbuzz = 0;

for (var counter = 1; counter <= 100; counter++) {
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