function isLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true
    }
    else {
        return false
    }

}
const myYear = 2000;
const returnResult = isLeapYear(myYear);
console.log("is my year is a leap Year", returnResult);