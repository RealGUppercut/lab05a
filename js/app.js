'use strict';

function sum(x,y,z) {
    const addArray = [(x+y+z), "The sum of " + x + " and " + y + " is " + (x + y) + "."]
    console.log(addArray)
    return addArray;   
}
sum(2,3);
    
function multiply(x,y,z) {
    const multiplyArray =[(x*y*z), "The product of " + x + " and " + y + " is " + (x * y) + "."]
    console.log(multiplyArray);
    return multiplyArray;
}
multiply(3,6);

function sumAndMultiply(x,y,z) {
    let additionStep = sum(x,y,z)[0] 
    let multipyStep = multiply(x,y,z)[0]
        const sumAndMultiplyArray =[additionStep, multipyStep, + x + " and " + y + " and " + z + " sum to " + additionStep + ".",  "The product of " + x + " and " + y + " and " + z + " is " + multipyStep + "."]
        console.log(sumAndMultiplyArray)
        return sumAndMultiplyArray;
    }
sumAndMultiply(2,3,4);

function sumArray() {
    const array = [2,2,4,5];
    function sum_reducer(accumulator, currentValue) {
        return accumulator + currentValue;
      }
      let sum = array.reduce(sum_reducer);
      console.log(sum)
}
// Problem 4
// Write a function called sumArray() that takes in an array of numbers as its single argument
// and then returns an array where the first element is the sum of the numbers in the array,
// and the second element is a string that EXACTLY follows this example 
// and uses the values that were input into the function:
// "2,3,4 was passed in as an array of numbers, and 9 is their sum."

/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
// function multiplyArray(multArr) { //eslint-disable-line



// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
let testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line

}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
