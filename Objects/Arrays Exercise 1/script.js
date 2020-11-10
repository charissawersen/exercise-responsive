const characters = [
    {
        name: "Bear",
        health: 5
    },
    { 
        name: "Duck", 
        health: 6 
    },
    { 
        name: "Rabbit", 
        health: 4 
    },
]
const opponent = { name: "Tiger", health: 8 }

// while(true) {
// for (let i = 0; i < character.length; i++) {
//     console.log(character[i]);
//     console.log(opponent);
//     let player = prompt("Choose player 1, 2, or 3"); 
//     if (player === 1) {
//         if (character.name == "Bear") {
//             character.find(function (character)) {
//                 character.health[0] -= 5;
//             };
//         }
    
//         // let battle;
//         // character[0].health = character[0].health - 5;
//         // opponent.health = opponent.health - 5;
//     };
// };
// }  
// console.log(character[0], opponent);

let response = prompt("select a character (1, 2, or 3)");
const characterIndex = parseInt(response);
characters[characterIndex].health -=5;
opponent.health -=5; 

do {
    for (character of characters){
        console.log(character.name, character.health);
    }
    console.log(opponent.name, opponent.health);

} while ( response !== '')


// let found;
// for (animal of animals) {
//     if (animal.bells === 500) {
//       found = animal;
//     }
//   }