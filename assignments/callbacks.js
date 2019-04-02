// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/
function hof(arr, com, cb) {
  return cb(arr, com);
}

const getLength = function(arr, length) {
  return arr.length;
  // getLength passes the length of the array into the callback.
}

const last = function(arr, last) {
  return arr.pop();
  // last passes the last item of the array into the callback.
}

const sumNums = function(x, y, add) {
  return x + y;
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

const multiplyNums = function(x, y, mult) {
  return x * y;
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

const contains = function(arr, item, contains) {
  for(i=0; i < arr.length; i++) {
    if (i===item) {
      return true;
      else {
        return false;
      }
    }
  }
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
