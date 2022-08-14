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


// BONUS

// Bonus 1

let paraf = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere placerat tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies quis dolor dictum vulputate. Proin sed lobortis lorem, sed dignissim odio. Phasellus fringilla consectetur tortor sit amet tempus. Curabitur vel commodo purus. In lectus tellus, suscipit tincidunt lorem quis, porttitor sagittis risus. Quisque vehicula blandit velit ut varius. Sed congue ornare aliquet. Sed cursus magna neque, non maximus augue rutrum sit amet. Ut vitae quam a lorem faucibus cursus vel a nibh." + "Sed sem justo, lobortis nec ornare eu, laoreet in nisl. Pellentesque porta elit et condimentum convallis. Morbi non sapien ut enim cursus consectetur convallis nec justo. Nulla eget aliquet tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam vitae orci vel odio consequat porttitor. Praesent tellus elit, bibendum at consequat et, vulputate vel lorem. Curabitur tempus, justo eu faucibus pulvinar, ligula augue dignissim neque, sed venenatis ex dui ut lacus. Sed ac arcu non velit venenatis dignissim." + "Vestibulum vulputate, leo at molestie luctus, magna augue venenatis ipsum, eget sodales massa mi eget lacus. Phasellus ultrices, turpis non consectetur egestas, justo nunc gravida purus, at rutrum leo ex ut elit. Duis pharetra id nunc vitae scelerisque. Vivamus mattis, dolor et consequat facilisis, lectus quam blandit est, at sodales turpis velit a ipsum. Nulla aliquet, quam tincidunt sodales egestas, enim enim aliquam dolor, a interdum neque libero nec arcu. Pellentesque vitae ultricies eros. Pellentesque scelerisque sagittis metus ac pulvinar. Ut maximus leo eu odio dignissim tempor at ac felis."

let countLetters = paraf.length;

console.log(countLetters)


function countEt(text) {
    let count = 0;
      text.split(' ').map(letters => {
    if(letters === "et") count++;
  })
    
  console.log(count);
  }
  countEt(paraf)

  
  // Bonus 2

  const phraseToCheck = "A man, a plan, a canal, Panama!";

  function checkIfPalindrome(str) {
    const cleanPhrase = str.replaceAll(' ', '').replaceAll(',', '').replaceAll('.', '').replaceAll('!', '').replaceAll('?', '').toLowerCase();
    const reversePhrase = cleanPhrase.split('').reverse().join('');
    if(cleanPhrase === reversePhrase) {
        console.log("This is a palindrome phrase")
    }
    else {console.log("This is not a special syntax")}
  }

  checkIfPalindrome(phraseToCheck)