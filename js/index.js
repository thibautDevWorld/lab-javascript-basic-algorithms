console.log("I'm ready");

// Iteration 1: Names and Input
const hacker1 = "Jim";
console.log("The driver's name is " + hacker1);

const hacker2 = "Magelan";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
}
else if(hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}
else {
    console.log("Wow, you both have equally long names, " + hacker1.length);
}


// Iteration 3: Loops
const nameChanged = hacker1.split('').map(letter => letter.toUpperCase()).join(" ")

console.log(nameChanged)

let reverseName = hacker2.split("").reverse().join("");
console.log(reverseName);

if(hacker1.localeCompare(hacker2)) {
    console.log("The driver's name goes first.")
}
else if(hacker2.localeCompare(hacker1)) {
    console.log("Yo, the navigator goes first definitely.");
}
else {
    console.log("What?! You both have the same name?");
}