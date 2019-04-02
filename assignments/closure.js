// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function series() {
  const first = "The Lone and Level Sands";
  console.log(`The first book is ${first}.`);
  function book() {
    const mc = "Tarlos";
    console.log(`The main character is ${mc}.`);
    function setting() {
      const place = "Kesh";
      console.log(`Tarlos is the king of ${place}.`);
    }//setting
    setting();
  }//book
  book();
}//series
series();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
