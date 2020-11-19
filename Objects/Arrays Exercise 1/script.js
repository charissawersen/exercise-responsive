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
];
const opponent = { name: "Tiger", health: 8 };
characters.push(opponent);

let pick;
do {
    pick = prompt("Pick a character. Enter 1, 2, or 3.");
    let counter = 0;
    for (const character of characters) {
        counter++;
        console.log(`Player ${counter} is ${character.name} with ${character.health} health points.`);
    };
    pick = pick - 1;
    battleOpponent(pick, characters);
} while (pick !== null);

function battleOpponent(pick, characters) {
    console.log(`Battle on! ${characters[pick].name}'s health is ${characters[pick].health}.`);
    characters[pick].health =
        characters[pick].health - 5;
    console.log(`Yikes! ${characters[pick].name}'s health is now ${characters[pick].health}.`);
    characters[3].health =
        characters[3].health - 5;
    console.log(`The opponent ${characters[3].name}'s health is now ${characters[3].health} points.`);
}






// let response = prompt("select a character (1, 2, or 3)");
// const characterIndex = parseInt(response);
// characters[characterIndex].health -=5;
// opponent.health -=5; 

// do {
//     for (character of characters){
//         console.log(character.name, character.health);
//     }
//     console.log(opponent.name, opponent.health);

// } while ( response !== '')


// let found;
// for (animal of animals) {
//     if (animal.bells === 500) {
//       found = animal;
//     }
//   }