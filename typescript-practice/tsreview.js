"use strict";
const today = "Wednesday";
function roundWithUnit(number, units) {
    return Math.round(number) + units;
}
const newNumber = roundWithUnit(3.75, "lb");
console.log(newNumber);
let sauces = [
    { name: "Marinara", spiceLevel: 4, awesome: false },
    { name: "Alfredo", spiceLevel: 0, awesome: true },
    { name: "Blush", spiceLevel: 1, awesome: false },
    { name: "Vodka", spiceLevel: 2, awesome: true },
];
// console.log(sauces);
function getSauceByName(sauces, name) {
    return sauces.find((sauce) => sauce.name === name);
}
console.log(getSauceByName(sauces, "Vodka"));
function getAwesomeSauces(sauces) {
    return sauces.filter((sauce) => sauce.awesome);
}
console.log(getAwesomeSauces(sauces));
function gimmeSpicy(sauces, spicy) {
    return sauces.filter((sauce) => sauce.spiceLevel >= spicy);
}
console.log(gimmeSpicy(sauces, 2));
function makeAwesomeSauce(name, spiceLevel) {
    return { name, spiceLevel, awesome: true };
}
console.log(makeAwesomeSauce("The Heat", 10));
