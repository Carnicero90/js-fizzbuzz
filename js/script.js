for (var counter = 1; counter <= 100; counter++) {
    var num = "";
    if (counter % 3 == 0) {
        num += "Fizz";
    }
    if (counter % 5 == 0) {
        num += "Buzz";
    }
    console.log(num || counter)
}

/* purtroppo lo avevo già fatto in js qualche giorno fa,
    lo stesso identico esercizio */