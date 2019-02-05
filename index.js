// Michael Macari
// Index JS testing Utils

let arrayUtils = require("./arrayUtils.js")
let stringUtils = require("./stringUtils.js")
let objUtils = require("./objUtils.js")

// arrayUtils.range Test Pass
console.log("Test 1 arrayUtils.range: SHOULD PASS ***************")
try{
    //Should Pass
    let res = arrayUtils.range(3, 'I drink and I know things')
    console.log(res)
    console.log("arrayUtils.range: Test passed when it should have succesfully :-) ")
}
catch(e){
    // Should not Fail
    console.log("arrayUtils.range: Test failed when it shouldn't have :-( ")
    console.error(e)
}
console.log('')

// arrayUtils.range Test Fail
console.log("Test 2 arrayUtils.range: SHOULD FAIL ***************")
try{
    // Should not pass
    let res = arrayUtils.range(0, 'Hello')
    console.log(res)
    console.log("arrayUtils.range: Test passed when it should have failed :-( ")
}
catch(e){
    // Should Fail
    console.log(e)
    console.log("arrayUtils.range: Test failed when it should successfully :-) ")
}
console.log('')

// stringUtils.repeat Test Pass
console.log("Test 3 stringUtils.repeat: SHOULD PASS ***************")
try{
    // Should Pass
    let res = stringUtils.repeat('*Game of Thrones*', 5)
    console.log(res)
    console.log("stringUtils.repeat: Test passed when it should have succesfully :-) ")
}
catch(e){
    // Should not Fail
    console.log("stringUtils.repeat: Test failed when it shouldn't have :-( ")
    console.log(e)
}
console.log('')

// stringUtils.repeat Test Fail
console.log("Test 4 stringUtils.repeat: SHOULD FAIL ***************")
try{
    // Should not pass
    let res = stringUtils.repeat('Let', 0)
    console.log(res)
    console.log("stringUtils.repeat: Test passed when it should have failed :-( ")
}
catch(e){
    // Should Fail
    console.log(e)
    console.log("stringUtils.repeat: Test failed when it should successfully :-) ")
}
console.log('')

// arrayUtils.countElements Test Pass
console.log("Test 5 arrayUtils.countElements: SHOULD PASS ***************")
try{
    //Should Pass
    let res = arrayUtils.countElements([1, 2, 2, 5, 6, 6, 7, 6, 9, 1])
    console.log(res)
    console.log("arrayUtils.countElements: Test passed when it should have succesfully :-) ")
}
catch(e){
    // Should not Fail
    console.log("arrayUtils.countElements: Test failed when it shouldn't have :-( ")
    console.error(e)
}
console.log('')

// arrayUtils.range Test Fail
console.log("Test 6 arrayUtils.countElements: SHOULD FAIL ***************")
try{
    // Should not pass
    let res = arrayUtils.countElements()
    console.log(res)
    console.log("arrayUtils.countElements: Test passed when it should have failed :-( ")
}
catch(e){
    // Should Fail
    console.log(e)
    console.log("arrayUtils.countElements: Test failed when it should successfully :-) ")
}
console.log('')

// objUtils.mapValues Test Pass
console.log("Test 7 objUtils.mapValues: SHOULD PASS ***************")
try{
    //Should Pass
    let res = objUtils.mapValues({a:1, b:2, c:3}, n=>n+1)
    console.log(res)
    console.log("objUtils.mapValues: Test passed when it should have succesfully :-) ")
}
catch(e){
    // Should not Fail
    console.log("objUtils.mapValues: Test failed when it shouldn't have :-( ")
    console.error(e)
}
console.log('')

// objUtils.mapValues Test Fail
console.log("Test 8 objUtils.mapValues: SHOULD FAIL ***************")
try{
    // Should not pass
    let res = objUtils.mapValues('s', 'x')
    console.log(res)
    console.log("objUtils.mapValues: Test passed when it should have failed :-( ")
}
catch(e){
    // Should Fail
    console.log(e)
    console.log("objUtils.mapValues: Test failed when it should successfully :-) ")
}
console.log('')
