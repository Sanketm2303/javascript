let score = undefined // null, "231sd"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// 33 = 33
// "33as" = NaN
// null = 0
// undefined = NaN

let isLoggedIn = "saan"

let boolenIsLoggedIn = Boolean(isLoggedIn)
console.log(boolenIsLoggedIn);

// 1 = true, 0 = false
// "" = false
// "saan" = true

let someString = 33
let stringNumer = String(someString);
console.log(stringNumer);
console.log(typeof stringNumer)
