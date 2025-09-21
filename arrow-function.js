// run node arrow-function.js can show result;

const greet = (name) => `Hello, ${name}`;
console.log(greet("Mona"));

const add = (a, b) => a + b;
console.log(add(2,3));

// array method
const numbers = [1,2,3,4,5];

const doubled = numbers.map(n => n*2);
const evens = numbers.filter(n => n % 2 === 0);
const found = numbers.find(n => n > 3);

// create students manager system
