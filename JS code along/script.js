// let bill = 100; 
// const taxRate = 0.06; 

// function calculateBill(bill, taxRate) {
//     // const total = 100 *1.06;
//     const total = bill * (1+taxRate);
//     console.log(total);
//     return total; 
// }

// //2) call function
// const total = calculateBill (bill, taxRate);

// console.log(`Your total is ${total}`);


//takes in = argument (gets passed into the function)

//A = l * w
// length = 10
// width = 5

function getAreaOfRectangle(width, length) {
    const area = width * length;
    return area;
}
const area = getAreaOfRectangle (6,30); 
console.log(area);

