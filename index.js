// Michael Macari
// Index JS testing Utils

let arrayUtils = require("./arrayUtils.js")
let stringUtils = require("./stringUtils.js")
let objUtils = require("./objUtils.js")

// console.log(arrayUtils.head([1,2,3,4]))
// console.log(arrayUtils.last([1,2,3,4]))
// console.log(arrayUtils.remove([5,6,7], 1))
// console.log(arrayUtils.range(4, 'Dragons'))
// console.log(arrayUtils.countElements([1, "HELLO", 1, '1', 1, 1]))
// console.log(arrayUtils.isEqual([1,2,9], [1,2,9]))
// console.log(stringUtils.capitalize('FOOBAR'))
// console.log(stringUtils.repeat('abc', 3))
// console.log(stringUtils.countChars('Hello, the pie is in the oven'))

console.log(objUtils.extend(1,3, 2, 5, 6))
