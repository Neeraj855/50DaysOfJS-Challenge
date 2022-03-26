const str = "JavaScript is awesome";

function reverString(str) {
  /*
   * 1. Using For Loop
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;

    * 2. Recursion
    return str === "" ? "" : reverString(str.substr(1)) + str.charAt(0);
    
    * 3. Built-in Function */
  return str.split("").reverse().join("");
}

console.log(`Reversed Sting is : ${reverString(str)} `);
