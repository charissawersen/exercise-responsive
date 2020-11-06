// A = PI * (r*r)

// function calculateAreaOfCircle (radius) {
//     const area = (radius*radius*Math.PI);
//     return area;
// }
// const area = calculateAreaOfCircle (5);
// console.log(area);

// const calculateAreaOfCircle = function(radius) {
//         return radius*radius*Math.PI;

//     }
//     const area = calculateAreaOfCircle (5);
//     console.log(area);

// const calculateAreaOfCircle = (radius) => {
//     return radius * radius * Math.PI;

// }
// const area = calculateAreaOfCircle(3);
// console.log(area);

const calculateAreaOfCircle = radius =>
    radius * radius * Math.PI;

const area = calculateAreaOfCircle(5)
console.log(area)

// // C = 2 pi r
function getCircumfrenceofCircle (radius) {
    const circumfrence = (2*Math.PI*radius);
    return circumfrence;
}
const circumfrence = getCircumfrenceofCircle (5);
console.log(circumfrence);

const getCircumfrenceCircle = radius => 2 * Math.PI * radius;

const circumfrence = getCircumfrenceCircle(5)
console.log(circumfrence)

// // // A = a^2
function getAreaofSquare (side) {
    const area = (side*side); 
    return area;
}
const area = getAreaofSquare (5);
console.log(area);

const getAreaofSquare = side => side * side;

const area = getAreaofSquare(5);
console.log(area);

// // // A = h*b/2
function getAreaOfTriangle (height, base) {
    const area = (height * base / 2); 
    return area;
}
const area = getAreaOfTriangle (5, 5);
console.log(area);

function getAreaOfRectangle(width, length) {
    const area = width * length;
    return area;
}
const area = getAreaOfRectangle (6,30); 
console.log(area);


function inchToCM() {
    const cm = inches * 2.54;
    return cm;
}
// //anonymous function
const inchToCM = function(inches) {
    return inches * 2.54
}
// //ARROW FUNCTION
// //delete the word 'function' and add a FAT ARROW => after inches
// // all on one line
// // delete curly brackets
// // delete 'return' keyword
// const inchToCM = (inches) => {
//     return inches * 2.54;
// }
// //implicit return (you dont have to type the 'return' keyword... magic!)
// const inchToCM = (inches) => { return inches * 2.54; }
// // the final, sleekest version of the arrow function
// const inchToCM = inches => inches * 2.54;
