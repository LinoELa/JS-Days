console.log("Data Types:");
console.log("----------------------------");
// Primitive Data Types
/*
1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Symbol
*/
// Examples of Primitive Data Types
let stringVar = "Hello, JavaScript!";
let numberVar = 42;
let booleanVar = false;
let undefinedVar;
let nullVar = null;

console.log("String:", typeof stringVar);
console.log("Number:", typeof numberVar);
console.log("Boolean:", typeof booleanVar);
console.log("Undefined:", typeof undefinedVar);
console.log("Null:", typeof nullVar);
console.log("Symbol:", typeof Symbol());
console.log("----------------------------");

// No Primitive Data Types
/*
1. Object
2. Array
3. Function
*/

let objectVar = { name: "Alice", age: 30 };
let arrayVar = [1, 2, 3, 4, 5];
let functionVar = function () {
  return "Hello";
};

console.log("Object:", typeof objectVar);
console.log("Array:", typeof arrayVar);
console.log("Function:", typeof functionVar);

let myArrayVar = [1, 2, 3];
myArrayVar[0] = 10; // Modifying array element
console.log("Modified Array:", myArrayVar);

console.log("----------------------------");

let numsVar = [10, 20, 30];
let numberVar1 = numsVar[0];
console.log("First element of numsVar:", numberVar1);
console.log(numsVar == numberVar1); // false

let userOne = { name: "Bob", age: 25, role: "teaching" };
console.log("User One Name:", userOne.name);
console.log("User One Age:", userOne.age);
console.log("User One Role:", userOne.role);

let userTwo = userOne; // true

userTwo.name = "Charlie";

console.log("User Two Name:", userTwo.name);
console.log("User Two Age:", userTwo.age);
console.log("User Two Role:", userTwo.role);
console.log("----------------------------");

// NUMBERS
let myAge = 35;
const gravity = 9.81; // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72; // mass in Kilogram
const PI = 3.14; // pi a geometrical constant

// More Examples
const boilingPoint = 100; // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37; // oC average human body temperature, which is a constant

console.log(myAge, gravity, mass, PI, boilingPoint, bodyTemp);

console.log("----------------------------");

// Math Operations
const numberPI = Math.PI;
console.log(numberPI);

// 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI)); // 3 to round values to the nearest number

console.log(Math.round(9.81)); // 10

console.log(Math.floor(PI)); // 3 rounding down

console.log(Math.ceil(PI)); // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, returns the maximum value

const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random() * 11); // creates random number between 0 and 10
console.log(num);

//Absolute value
console.log(Math.abs(-10)); // 10

//Square root
console.log(Math.sqrt(100)); // 10

console.log(Math.sqrt(2)); // 1.4142135623730951

// Power
console.log(Math.pow(3, 2)); // 9

console.log(Math.E); // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046

// Trigonometry
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);

console.log("----------------------------");

let randomNum = Math.random(); // generates 0 to 0.999
let numBtnZeroAndTen = randomNum * 11;

console.log(numBtnZeroAndTen); // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor); // this gives between 0 and 10

// String

// let space = ' '           // an empty space string
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'
// let language = 'JavaScript'
// let job = 'teacher'
// let quote = "The saying,'Seeing is Believing' is not correct in 2020."
// let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`

// String Concatination using Operator
// Declaring different variables of different data types
let space = " ";
let firstName = "Asabeneh";
let lastName = "Yetayeh";
let country = "Finland";
let city = "Helsinki";
let language = "JavaScript";
let job = "teacher";
let age = 250;

// String Conversion
let myFullName = firstName + space + lastName; // concatenation, merging two strings together
console.log(myFullName); // 'Asabeneh Yetayeh'

let fullName = firstName + space + lastName;
let personInfoOne = myFullName + ". I am " + age + ". I live in " + country; // ES5 string addition

console.log(personInfoOne);

console.log("----------------------------");
// Long Literas string
const paragraph =
  "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too.";

console.log(paragraph);

// Escape Sequences in Strings
console.log(
  "I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?"
); // line break
console.log("Days\tTopics\tExercises");
console.log("Day 1\t3\t5");
console.log("Day 2\t3\t5");
console.log("Day 3\t3\t5");
console.log("Day 4\t3\t5");
console.log("This is a backslash  symbol (\\)"); // To write a backslash
console.log('In every programming language it starts with "Hello, World!"');
console.log("In every programming language it starts with 'Hello, World!'");
console.log("The saying 'Seeing is Believing' isn't correct in 2020"); //Syntax // Template Literals (Template Strings)

console.log(`The sum of 2 and 3 is 5`); // statically writing the data
let a = 2;
let b = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}`); // injecting the data dynamically
console.log("----------------------------");

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`; //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`;
console.log(personInfoTwo);
console.log(personInfoThree);

console.log("----------------------------");

// String Methods
let js = "JavaScript";
console.log(js.length);
let firstname = "Asabeneh";
console.log(firstname);

// Access Different carracter
let string = "JavaScript";
let firstLetter = string[0];

console.log(firstLetter); // J

let secondLetter = string[1]; // a
let thirdLetter = string[2];
let lastLetter = string[9];

console.log(lastLetter); // t

let lastIndex = string.length - 1;

console.log(lastIndex); // 9
console.log(string[lastIndex]); // t
