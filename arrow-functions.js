/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    //Code block
    return a + b;
}
let sum1 = addTwoNumbers(3, 5);
console.log(sum1);
// Arrow Function With Parameters
const addTwoNumbersB = (a, b) => {
    //Code block
    return a + b;
}
let sum = addTwoNumbersB(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;
//ou
//const addTwoNumbers2 = (a, b) => (a + b);
let sum2 = addTwoNumbers2(6,4);
console.log(sum2)
// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there');

const sayHello = () => console.log('hello')
sayHello()
// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiple string!
    </p>`
)
console.log(returnMultipleLines())