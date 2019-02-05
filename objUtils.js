// Michael Macari
// Object Utilities Exports

exports.extend = function(...args){
    // Check if args is empty or not an object
    if(args.length === 0){
        // If nothing is passed throw error
        throw("*** objUtils.extend: Nothing passed***")
    }
    // Otherwise check all the arguments, if any are undefined or not object throw error
    let myObj = {}
    for(let i=0; i<args.length; i++){
        if(args[i] === undefined || typeof(args[i]) !== 'object'){
            throw("*** objUtils.extend: One or all arguments were not of correct type***")
        }
        // If args[i] is an object, loop through it
        else{
            for(key in args[i]){
                // Check if key is already in return object
                if(!(key in myObj)){
                    // If not add it, if its already there do nothing
                    myObj[key] = args[i][key]
                }
            }
        }
    }
    return(myObj)
};

exports.smush = function(...args){
    // Check if args is less than size of 2
    if(args.length < 2){
        // If less than 2 arguments are passed throw error 
        throw("*** objUtils.smush: Required at least 2 arguments***")
    }
    // Otherwise check all the arguments, if any are undefined or not object throw error
    let myObj = {}
    for(let i=0; i<args.length; i++){
        if(args[i] === undefined || typeof(args[i]) !== 'object'){
            throw("*** objUtils.smush: One or all arguments were not of correct type***")
        }
        // If args[i] is an object, loop through it
        else{
            for(key in args[i]){
                // If not add it
                myObj[key] = args[i][key]
            }
        }
    }
    return(myObj)
};

exports.mapValues = function(obj, func){
    // Check that parameters exist
    if(obj === undefined || func === undefined){
        throw("*** objUtils.mapValues: One or both arguments are missing***")
    }
    // Check that the parameters are of correct type
    if(typeof(obj) !== 'object' || typeof(func) !== 'function'){
        throw("*** objUtils.mapValues: One or both arguments are of incorrect type")
    }
    let myObj = {}
    // If all checks pass loop through object and apply function to the keys value
    for(key in obj){
        myObj[key] = func(obj[key])
    }
    return(myObj)
}