/*Javascript Programming Ex 7
Functions */

/**
 * @description Log anything to the console
 * @param {*} obj The object to write to the console, could be any name not necess obj
 */
function l(obj) {
    console.log(obj);
}

//different naming from methods in c#

/**
 * @description This is a declarative function with no parameters 
 * or arguments
 */
function doThings() {
    l('I do stuff but have nothing to contribue or accept');
}

//call the method
doThings();

//method with parameters
/**
 * @description adds 2 numbers
 * @param {number} value1 the first value
 * @param {number} value2 the second value
 */
function add(value1, value2) {
    return value1 + value2;
}

l('call declarative add function');
let a = add(3, 2);
l(a);
l('~~~~~~~~~~~~~~~~~~~~');

//declarative function can be hoisted, you can call it before initializing
//function expressions cannot
//preferred is function expressions, more readable code

//function expression - will assign to a variable
//the variable is holding the function
/**
 * @description subtarct 2 numbers. this is a function expression. below in the place of * puts the data type
 * @param {number} value1 
 * @param {number} value2 
 */
const subtract = function(value1, value2) {
    return value1 - value2;
};

l('call subtract function expression');
let b = subtract(9, 5);
l(b);
l('~~~~~~~~~~~~~~~~~~~~');

//get aud for this26min   its just a diff syntax
/**
 * @description multuply 2 numbers this is an arrow function
 * @param {number} value1 
 * @param {number} value2 
 */
const multiply = (value1, value2) => {
    return value1 * value2;
};


l('call multiply  arrow function');
let c = multiply(3, 4);
l(c);
l('~~~~~~~~~~~~~~~~~~~~');

//functions csn be reassigned to anything
//because JS is a dynamic language

add = 'stephen';
l(add);
//now add is not a method with2 params anymore, it is a string

add = 3* 4;
l(add);
//now it is 12, result of mult

l(subtract(add, 10));