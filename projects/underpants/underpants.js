// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
 if(Array.isArray(value)){
        return "array";
    }else if(value === null){
        return "null";
    }else if(typeof value === "object"){
        return "object";
    }else if(typeof value === "string"){
        return "string";
    }else if(typeof value === "number"){
        return "number";
    }else if(typeof value === "boolean"){
        return "boolean";
    }else if(typeof value === "undefined"){
        return "undefined";
    }else if(typeof value === "function"){
        return "function";
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, num){
        if(!Array.isArray(array) || num < 0){
            return [];
        }else if(isNaN(num) || num === undefined){
            return array[0];
        }else{
            return array.slice(0, num);
        }
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, num){
        if(!Array.isArray(array) || num < 0){
            return [];
        }else if(isNaN(num) || num === undefined){
            return array[array.length -1];
        }else{
            return array.slice(-num, array.length);
        }
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
    for(let i = 0; i <= array.length; i++){
        if(value === array[i]){
            return i;
        }
    }
    //else return -1 if not in array
    return -1;
};
        


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
    //loop array
  for(let i = 0; i <= array.length; i++){
      //if array @ index has value && value is not undefined, return true: else return false
      if(array[i] === value && value !== undefined){
          return true;
      }
  }
  //return false outside of loop
  return false;
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
    if(Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++){
            func(collection[i], i, collection)
        }} else {
            for(var key in collection){
            func(collection[key], key, collection)
        }
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){

      let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (newArr.indexOf(array[i]) === -1) {
            newArr.push(array[i]);
        }
    }
    return newArr;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, funct){
     let finalArr = [];
   _.each(array, function(element, index, array){
        //if we call funct & pass the element, index, & array & they are true, push element into array
        if(funct(element, index, array)){
            finalArr.push(element);
        }
    });
    //return the new array outside the loop and if statement
    return finalArr;
        
    };

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

//creating a function that takes in two parameters an array and a function
// using a for loop to loop through the array and call the function on each element, index and array 
// return a new array of elements that return false from the function
//Creates a new array literal to store the functions outputs

_.reject = function(array, func){
    var newArr = [];
    
    for(var i = 0; i < array.length; i++){
        if(func(array[i], i, array) === false){
            newArr.push(array[i])
        }
    } return newArr;
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

//Creating a function that takes in an array and a function
//creating two emprty arrays to store the nested array falsy values
//creating a for loop to loop through the arrays
//using an if and else conditionaal statement to test for true and falsy values
//assigning truthy values to an arry
//assigning the falsy values to another array 

_.partition = function (array, func){
    var arr1 = [[],[]];
  
    
    for(var i = 0; i < array.length; i++){
        if(func(array[i], i, array) === true){
           arr1[0].push(array[i]);
        } else if(func(array[i], i, array) === false){
           arr1[1].push(array[i]);
            //arr1.push(arr2);
        }
    } 
    
    return arr1;
    
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

//Creating a function that takes in a collection and a function
//create two array literals to store the output of the function calls
//test wether the given collection is an array or an object using a conditional statement 
//using array.isarray and typeof for object
//using a for loop and for in loop to loop over the array and the object to access its values 

_.map = function(collection, func){
    var arr = [];
    var obj = [];
    
    if(Array.isArray(collection) === true){
        for(var i = 0; i < collection.length; i++){
            arr.push(func(collection[i], i, collection))
            
        } return arr;
    }else if(typeof collection === "object"){
            for(var key in collection){
                obj.push(func(collection[key], key, collection))
                
            }return obj;
        }
    
}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

//the function created will take in an array of objects and a property 
//returning an array with the values of the given property for every element in the array 
//we dont have to loop through the array, we have to access the given property and its values
//must use .map to implement the functipon

_.pluck = function(array, property) {
    let result = _.map(array, function(value, i, collection) {
        return value[property];
    })
    return result;
}



/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

//a function that takes in a collection and a function
//use the each function to go through the given collection
//return true if the function results to true 
//creating a variable 
//test if theres not a function 
//assign a vvariable to true and return that variable
// using an if staement to test if there is a function given
//if there is no function use the each function to test each values test for false values
//use an else statement to test for other conditions if there is a function
////use each to test the elements in the collection 
//use an if statement to test if the value of the function results to false 
//if one elmenet results to false then return false
//if all elements are true in both cases then true would be returned 


_.every = function(collection, func){
    
     var result = true;
     
    if (!func) {
        _.each(collection, function(value, i, collection) {
            if (value === false) {
             result = false;
        } 
        })
     } else {
         _.each(collection, function(value, i, collection) {
             if (func(value, i, collection) === false) {
                 result = false;
             }
         })
      }
 return result;
    
    
}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

//Creating a function that takes in a collection and a function
// using the every function to loop through the collection
//the every operator will test every item in the collection wether its an array or object 
//using an if else conditional to test it there is or is not a given funtion
//creating a varibale names result to store the false boolean value 
//reassigning the result variable in side of the conditional when at least one of the conditions test to be true 


_.some = function(collection, func){
    let result = false;
    if(!func){
        _.every(collection, function(value, i, collection){
        if(value === true){
            result = true;
            return result;
        }
    })
    } else { _.every(collection, function(value, i, collection){
        if(func(value, i, collection) === true){
            result = true
            return result;
        }
    })
        
    }
    return result 
}



/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

//check if seed exists/ not undefined
 _.reduce = function(array, func, seed){
    if(seed !== undefined) {
       //if it does, then loop through array
       for(var i = 0; i < array.length; i++) {
           //reassign seed to be value of function call 
          //call the func function on seed, value, index
          seed = func(seed, array[i], i)
       }
       //return seed
       return seed;
    } else {
        //if no seed given, first value in array is the seed
        seed = array[0];
        //if it does, then loop through array
        for (var i = 1; i < array.length; i++) {
          //reassign seed to be value of function call 
          //call the func function on seed, value, index
          seed = func(seed, array[i], i);
        }
        return seed;
    }}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//creating a function that takes in two objects and possibly more
//using the spread operator to account for more object parameters
//copying all properties from the given object and [assing them to object1
//Returning object1 updated 
//creating a new variable to store the updated object and then returning it 
//using the object.assign method to assign all of the other object properties to object 1



_.extend = function(object1, ...object2) {
    var newObject = Object.assign(object1, ...object2)
    return newObject;
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
