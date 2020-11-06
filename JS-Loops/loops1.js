// count to 10
// for (let i = 0; i <=10; i++) {
//     console.log(i);
// }

// countdown from 10
// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// use while loop to count to 10
// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// use while loop to count down from 10
// let i = 10; 
// while (i >= 0) {
//     console.log(i);
//     i--;
// }

// use do...while loop to count to 10
// let i = 0;
// do {
//     console.log(i);
//     i++;
// }
// while (i <= 10);

// use do...while loop to count down from 10
// let i = 10;
// do {
//     console.log(i);
//     i--;
// }
// while (i >= 0); 

// for of loop
// const numbers=[1,2,3,4,5,6,7,8,9,10]; 
// for (let number of numbers) {
//     console.log(number);
// }

const str = "Ace"; 
let padding = " "; 
let diff = 10 - str.length;
for (let i = 0; i < diff; i++) {
    padding += " "; 
}
console.log(padding + str); 

