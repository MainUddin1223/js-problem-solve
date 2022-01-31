let inches = 250;
let feet = inches / 12;
let fixed = feet.toFixed(2)
console.log(fixed);
function inchesToFeet(inches) {
    let initFeet = inches / 12;
    let finalFeet = initFeet.toFixed(2);
    return finalFeet
}
let uncleFeet = inchesToFeet(36);
console.log(uncleFeet);
let dadiFeet = inchesToFeet(89);
console.log(dadiFeet);
function mileToKM(miels) {
    let initKM = miels * 1.60;
    let finalKM = initKM.toFixed(2)
    return finalKM
}
let dadiKm = mileToKM(5);
console.log(dadiKm);