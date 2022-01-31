// celcious to fahrenhit calculation
function celcToFahr(celcious) {
    let fahrenheit = celcious * (9 / 5) + 32;
    fahrenheit = fahrenheit.toFixed(2);
    return fahrenheit
}
let celcious = celcToFahr(31);
console.log(celcious);
let celcious2 = celcToFahr(29);
console.log(celcious2);

// fahrenheit to celcious
function fahrToCelc(fahrn) {
    let celcious = (fahrn - 32) * 5 / 9;
    celcious = celcious.toFixed(2);
    return celcious
}
let fahrenheit3 = fahrToCelc(84.2);
console.log(fahrenheit3);

// result calculation

function resultCalc(marks) {
    if (marks >= 80 && marks <= 100) {
        return "you got A+"
    }
    else if (marks >= 60) {
        return "you got A-"

    }
    else if (marks >= 50) {
        return "you got B"

    }
    else {
        return "you got big F"
    }
}
let hablu = resultCalc(40);
console.log(hablu);

// simple interst

// simple interest , I=Prn
function interest(principal, rate, time) {
    let simpleIntrest = (principal * time) * rate / 100;
    return simpleIntrest
}
let kuddusInterest = interest(15000, 10, 5);
console.log(kuddusInterest);

