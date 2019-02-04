// Michael Macari
// Array Utilities Exports

// Array Utils Head Function
exports.head = function(arr){
    
    // If nothing was passed into function throw error
    if(arr === undefined){
        throw("*** arrayUtils.head: Array was not passed into function / does not exist***")
    }
    // If the array is not of type array throw error
    if(!Array.isArray(arr)){
        throw("*** arrayUtils.head: Input was not an array***")
    }
    // If the array is empty throw error
    if(arr.length === 0){
        throw("***arrayUtils.head: Array is empty***")
    }
    // If all checks pass return first element in array
    return(arr[0])
};

exports.last = function(arr){
    // If nothing was passed into function throw error
    if(arr === undefined){
        throw("*** arrayUtils.last: Array was not passed into function / does not exist***")
    }
    // If the array is not of type array throw error
    if(!Array.isArray(arr)){
        throw("*** arrayUtils.last: Input was not an array***")
    }
    // If the array is empty throw error
    if(arr.length === 0){
        throw("***arrayUtils.last: Array is empty***")
    }
    // Return last element in array
    return(arr[arr.length-1])
};

exports.remove = function(arr, index){
    // If nothing was passed into function throw error
    if(arr === undefined){
        throw("*** arrayUtils.remove: Array was not passed into function / does not exist***")
    }
    // If the array is not of type array throw error
    if(!Array.isArray(arr)){
        throw("*** arrayUtils.remove: Input was not an array***")
    }
    // If the array is empty throw error
    if(arr.length === 0){
        throw("***arrayUtils.remove: Array is empty***")
    }
    // If index is not defined throw error
    if(index === undefined){
        throw("*** arrarUtils.remove: Index was not defined***")
    }
    // If index is not an integer type throw error
    if(!Number.isInteger(index)){
        throw("*** arrayUtils.remove: Index not of type integer***")
    }
    // If index is out of range throw error
    if(index < 0 || index > arr.length-1){
        throw("*** arrayUtils.remove: Index out of range***")
    }
    // Remove element at index and return result array
    arr.splice(index, 1)
    return(arr)
};

exports.range = function(end, value=undefined){
    // If the end number was not defined throw error
    if(end === undefined){
        throw("*** arrayUtils.range: end Number does not exist***")
    }
    // If the end number is not an integer throw error
    if(!Number.isInteger(end)){
        throw("*** arrayUtils.range: end Number is not an integer***")
    }
    // If the end number is less than or equal to 0 throw error
    if(end <= 0){
        throw("*** arrayUtils.range: end Number must be greater than 0***")
    }
    // Create an empty array
    let newarr = []
    // If value is not defined create the array incrimenting the value at each element
    if(!value){
        for(let i=0; i<end; i++){
            newarr.push(i)
        }
        return(newarr)
    }
    // Create the new array with each element being value of length end
    else{
        for(let i=0; i<end; i++){
            newarr.push(value)
        }
        return(newarr)
    }
};

exports.countElements = function(arr){
    // Check that the array exists otherwise throw error
    if(arr === undefined){
        throw("*** arrayUtils.countElements: array is undefined***")
    }
    // Check that array is of type array otherwise throw error
    if(!Array.isArray(arr)){
        throw("*** arrayUtils.countElements: array was not of type array")
    }

    let myObj = {}
    
    for(let i=0; i<arr.length; i++){
        // If key is in object, then incriment it
        if(String(arr[i]) in myObj){
            myObj[String(arr[i])]++
        }
        // Otherwise add it to the object and set count to one
        else{
            myObj[String(arr[i])] = 1
        }
    }

    return(myObj)
};

exports.isEqual = function(arr1, arr2){
    // Check that the arrays exist
    if(arr1 === undefined || arr2 === undefined){
        throw("*** arrayUtils.isEqual: one or both arrays were not defined")
    }
    // Check that both arrays are of type array
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        throw("*** arrayUtils.isEqual: one or both array are not of type array")
    }
    // Check that the arrays are of equal length
    if(arr1.length !== arr2.length){
        return(false)
    }
    // Run through each element of both, if any element does not match return false
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return(false)
        }
    }
    // If all checks pass return true
    return(true)
}