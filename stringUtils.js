// Michael Macari
// String Utilities Exports

exports.capitalize = function(newString){
    // Check that the string exists
    if(newString === undefined){
        throw("*** stringUtils.capitalize: String was not passed into function / undefined")
    }
    // Check that the string is of type string
    if(typeof(newString) !== 'string'){
        throw("*** stringUtils.capitalize: parameter passed was not of type string")
    }
    // Return the string capitalized first letter with lowercase rest of string
    return(newString.charAt(0).toUpperCase() + newString.slice(1).toLowerCase())
};

exports.repeat = function(newString, num){
    // Check that the string exists
    if(newString === undefined){
        throw("*** stringUtils.repeat: String was not passed into function / undefined")
    }
    // Check that the string is of type string
    if(typeof(newString) !== 'string'){
        throw("*** stringUtils.repeat: string parameter passed was not of type string")
    }
    // Check that number provided exists and is positive
    if(num === undefined){
        throw("*** stringUtils.repeat: number not passed into function / undefined")
    }
    // Check that num is an integer
    if(!Number.isInteger(num)){
        throw("*** stringUtils.repeat: number passed is not an integer")
    }
    // Check that it is positive
    if(num <= 0){
        throw("*** stringUtils.repeat: number passed in must be greater than 0")
    }
    // Make new empty string
    s = ''
    // Repeat string passed in and append to s
    for(let i=0; i<num;i++){
        s = s + newString
    }
    // Return result string 
    return(s)
};

exports.countChars = function(newString){
    // Check that the string exists
    if(newString === undefined){
        throw("*** stringUtils.countChars: String was not passed into function / undefined")
    }
    // Check that the string is of type string
    if(typeof(newString) !== 'string'){
        throw("*** stringUtils.countChars: string parameter passed was not of type string")
    }
    // Create a new object to return
    myObj = {}
    // Loop through string
    for(let i=0; i<newString.length; i++){
        // If the character is in the object, incriment its count
        if(newString.charAt(i) in myObj){
            myObj[newString.charAt(i)]++
        }
        // Otherwise add character to the object
        else{
            myObj[newString.charAt(i)] = 1
        }
    }
    return(myObj)
}