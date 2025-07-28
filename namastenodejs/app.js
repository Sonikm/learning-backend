// const sumValue = require('./sum.js');
const obj = require('./sum.js');
const {sumValue, x} = require('./sum.js');



// this is a entry point or file of my code

let name = "Soni Kumri";
console.log(name);
// console.log(global);
// console.log(globalThis);
console.log(globalThis === global);

// console.log(sumValue(10));
// console.log(obj.sumValue(50));
console.log(sumValue(10), x);

// xyz file will run after above code
require('./xyz');

