//Day-2

'use strict';

/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("I can drive :D");

//const interface = "Audio";
// const private = 534;

*/

/*

function logger() {
    console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    //  console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const juice = fruitProcessor(5,0);

console.log(juice);

const appleOrangeJuice = fruitProcessor(2, 4);

console.log(appleOrangeJuice);

*/

/*

//Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

console.log(calcAge1(1997));

//Function expression
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1998);

console.log(age2);

*/

/*

//Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1997);

console.log(age3);

const yearsUntilRetirement = (birthYear,firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1997, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

*/

/*

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

*/

/*

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    
    if (retirement >= 0) {
        return retirement;
    } else {
        return -1;
}

}

console.log(yearsUntilRetirement(1997, "Jonas"));

console.log(yearsUntilRetirement(1970, "Mile"));

*/

/*

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const yearss = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(yearss[1]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

//friends = ["Bob", "Alice"];

const jonas = ["Jonas", "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);

//Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1]));

*/

/*

const friends = ["Michael", "Steven", "Peter"];

//Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Remove elements
const popped = friends.pop();//Last
console.log(friends);
console.log(popped);

friends.shift();//First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Bob"));
console.log(friends.includes("Steven"));

friends.push(23);
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Peter")) {
    console.log("You have a friend called Steven")
}

*/

/*

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
};

*/

/*

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
};

console.log(jonas);

console.log(jonas.lastName);

console.log(jonas["lastName"]);

const namekey = "Name";

console.log(jonas["first" + namekey]);

console.log(jonas["last" + namekey]);

//console.log(jonas."first" + namekey);

const interrestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends");


if (jonas[interrestedIn]) {
    console.log(jonas[interrestedIn]);
} else {
    console.log("Wrong request ! Choose between firstName, lastName, age, job, and friends");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

*/

/*

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,
    
    // Method not a function bcoz its inside a object
    // calcAge: function (birthYear) {
    //         return 2037 - birthYear;
    //     }
        
    //     calcAge: function () {
    //         //   console.log(this);
    //           return 2037 - this.birthYear;
    //         }
            
            calcAge: function (birthYear) {
                this.age = 2037 - this.birthYear;
                return this.age;
            },
            
            getSummary: function () {
                return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
            }
        };
        
        
        console.log(jonas.calcAge());
        
        //console.log(jonas['calcAge'](1991));
        
        console.log(jonas.age);
        console.log(jonas.age);
        console.log(jonas.age);
        console.log(jonas.age);
        
        console.log(jonas.getSummary());
        
*/

/*

// console.log("Lifting weights repetition 1 🏋️‍♂️");
// console.log("Lifting weights repetition 1 🏋️‍♂️");
// console.log("Lifting weights repetition 1 🏋️‍♂️");
// console.log("Lifting weights repetition 1 🏋️‍♂️");
// console.log("Lifting weights repetition 1 🏋️‍♂️");
// console.log("Lifting weights repetition 1 🏋️‍♂️");
// console.log("Lifting weights repetition 1 🏋️‍♂️");
// console.log("Lifting weights repetition 1 🏋️‍♂️");
// console.log("Lifting weights repetition 1 🏋️‍♂️");
// console.log("Lifting weights repetition 1 🏋️‍♂️");

//for loop keeps running while conditon is True
for (let rep = 1; rep <= 10; rep++){
    console.log("Lifting weights repetition "+rep+" 🏋️‍♂️");
}

*/

/*

const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"]
];

const types = [];

for (let i = 0; i < jonasArray.length; i++){
    //Reading from jonas array
    console.log(jonasArray[i], typeof jonasArray[i]);
    
    //filling types Array
    //types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];

for (let i = 0; i < years.length; i++){
    ages.push(2037 - (years[i]));
}

console.log(ages);

//continue and break
console.log("-------ONLY STRINGS-------")
for (let i = 0; i < jonasArray.length; i++){
    if (typeof jonasArray[i] !== "string") continue;
    
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("------- BREAK WITH NUMBER -------")
for (let i = 0; i < jonasArray.length; i++){
    if (typeof jonasArray[i] === "number") break;
    
    console.log(jonasArray[i], typeof jonasArray[i]);
}

*/

/*

const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
    true
];

//0,1, ...,4
//4,3,....,0
for (let i = jonasArray.length - 1; i >= 0; i--){
    console.log(i, jonasArray[i]);
}

for (let excercise = 1; excercise < 4; excercise++){
    console.log(`------------- Starting exercise ${excercise} -------------`);
    
    for (let rep = 1; rep < 6; rep++){
        console.log(`Lifting weight repetition ${rep} 🏋️‍♂️`);
    }
}

*/

/*

for (let rep = 1; rep <= 10; rep++){
    console.log("Lifting weights repetition "+rep+" 🏋️‍♂️");
}

let rep = 1;

while (rep <= 10) {
    console.log("While: Lifting weights repetition "+rep+" 🏋️‍♂️");
    rep++;
}

*/

/*

let dice = Math.trunc(Math.random() * 6) +1;

console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("Loop is about to end...");
}

*/
