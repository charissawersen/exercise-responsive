const today: string = "Wednesday";

function roundWithUnit(number: number, units: string): string {
  return Math.round(number) + units;
}
const newNumber: string = roundWithUnit(3.75, "lb");
console.log(newNumber);

interface Sauce {
  name: string;
  spiceLevel: number;
  awesome: boolean;
}

let sauces: Sauce[] = [
  { name: "Marinara", spiceLevel: 4, awesome: false },
  { name: "Alfredo", spiceLevel: 0, awesome: true },
  { name: "Blush", spiceLevel: 1, awesome: false },
  { name: "Vodka", spiceLevel: 2, awesome: true },
];
// console.log(sauces);

function getSauceByName(sauces: Sauce[], name: string): Sauce | undefined {
  return sauces.find((sauce) => sauce.name === name);
}
console.log(getSauceByName(sauces, "Vodka"));

function getAwesomeSauces(sauces: Sauce[]): Sauce[] {
  return sauces.filter((sauce) => sauce.awesome);
}
console.log(getAwesomeSauces(sauces));

function gimmeSpicy(sauces: Sauce[], spicy: number): Sauce[] {
  return sauces.filter((sauce) => sauce.spiceLevel >= spicy);
}
console.log(gimmeSpicy(sauces, 2));

function makeAwesomeSauce(name: string, spiceLevel: number): Sauce {
  return { name, spiceLevel, awesome: true };
}
console.log(makeAwesomeSauce("The Heat", 10));
