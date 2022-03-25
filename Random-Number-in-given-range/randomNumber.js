/**
  TITLE : Function which returns a random number in the given range
  STATEMENT : Create a function which returns a random number in the given range of values both inclusive
 */

//   CODE
function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  return Math.random() * (rangeStart - rangeEnd + 1) + rangeEnd;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`);
