function evenOdd(params) {
    if (params % 2 == 0) {
        return true
    }

    return false

}
let number = evenOdd(10);
console.log("is it true", number);