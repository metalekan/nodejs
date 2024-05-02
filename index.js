// require("./batman");
// require("./superman");

// const {add, subtract} = require("./math");

// const calc = add(4, 1);
// const minus = subtract(9,2);
// console.log(calc, minus);

const path = require("node:path");

console.log(__dirname);
console.log(__filename);


console.log(path.basename(__dirname));
console.log(path.basename(__filename));

console.log(path.parse(__filename));



