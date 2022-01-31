function fectorial(number) {
    let fect = 1;
    let i = 1;
    while (i < number) {
        fect = fect * i
        i++

    }
    return fect
}
let firstFect = fectorial(12);
console.log("first Fect", firstFect);
let secondFect = fectorial(10);
console.log("second Fect", secondFect);

// function fectorial(number) {
//     let fect = 1;
//     for (let i = 1; i < number; i++) {
//         fect = fect * i;

//     }
//     return fect
// }
// let firstFect = fectorial(12);
// console.log("first Fect", firstFect);
// let secondFect = fectorial(10);
// console.log("second Fect", secondFect);
function reverse(number) {
    let fectorial = 1
    for (let i = number; i >= 1; i--) {
        fectorial = fectorial * i

    }
    return fectorial
}
let reverseFect = reverse(10);
console.log(reverseFect);