// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// --------------------------- Consider the following variable:

var mantra = "Be the dev"

// // 1a. Write the code that determines if there is a 'B' in mantra.

var lowerMantra = mantra.toLowerCase()

if(lowerMantra.includes("b")) {
    console.log("'B' is in mantra.")
} else {
    console.log("'B' is not in mantra.")
}

// // 1b. Write the code that determines if there is an 'x' in mantra.

if(lowerMantra.includes("x")) {
    console.log("'X' is in mantra.")
} else {
    console.log("'X' is not in mantra.")
}

// // 1c. Write the code that determines if there is a 'v' in mantra.

if(lowerMantra.includes("V")) {
    console.log("'V' is in mantra.")
} else {
    console.log("'V' is not in mantra.")
}

// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.

function letterExistsOrNot(str, ltr) {
    if (str.includes(ltr)) {
        console.log(`"${ltr}" is in the string.`)
    } else {
        console.log(`"${ltr}" is not in the string.`)
    }
}

var str = "You only live once"
var ltr = "y"

console.log(letterExistsOrNot(str.toLowerCase(), ltr))

// // ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

longerVar = (pet1, pet2) => {
    if (pet1.length > pet2.length) {
        console.log(pet)
    } else {
        console.log(pet2)
    }
}

console.log(longerVar(myDog, myCat))

// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

returnArray = (pet1, pet2) => {
    var pets = (pet1+","+pet2)
    var pets2 = pets.split(",")
    return pets2
}

console.log(returnArray(myDog, myCat))

// 2c. STRETCH: Write a function that returns the two variables in all lowercase letters. Expected output: "snoopy garfield"

returnLower = (pet1, pet2) => {
    var petOne = pet1.toLowerCase()
    var petTwo = pet2.toLowerCase()
    var pets = (petOne+ " "+petTwo)
    return pets
}

console.log(returnLower(myDog, myCat))

// ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!";

// 3a. Write the code that logs each letter of the message using a for loop.

var arr1 = myMessage.split("");

function onlyLetters(array){
    let arr2 = []
    for(let i = 0; i < array.length; i++){
        if(/[a-z]/.test(array[i])){
          arr2.push(array[i])
        }
    }
    return arr2
}

console.log(onlyLetters(myMessage))

// 3b. Write the code that logs each letter of the message using map.

var result = '';
myMessage.split('').map(letter => {
  result += letter;
});

console.log(result)

// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.



// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().




// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"

function noVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

console.log(noVowels(testString))

// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.






// ------------------------------- Consider the following variable:

var toonimals = [ 
    {name: "Itchy", animal: "mouse"}, 
    {name: "Stimpy", animal: "cat"}, 
    {name: "Daffy", animal: "duck"}, 
    {name: "Scratchy", animal: "cat"}, 
    {name: "Ren", animal: "dog"}, 
    {name: "Felix", animal: "cat"}
    
]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

const catsOnly = toonimals.filter(e => e.animal.includes("cat"));

console.log(catsOnly)

//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

const catsOnly = toonimals.filter(e => !e.animal.includes("cat"));

console.log(catsOnly)


//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"
// 