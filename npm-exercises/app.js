const math = require('./math');

// const x = math.x; 
// const addX = math.addX; 

const { x, addX } = math;
// destructured way of declaring these variables

console.log(x);
const y = addX(3);
console.log(y); 