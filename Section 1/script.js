//Day 1

/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Matilda"; 
        
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name convention camelCase

let PI = 3.14;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

console.log(myFirstJob);

let country = "India";
let continent = "Asia";
let population = "1.4 Billion";
console.log(country);
console.log(continent);
console.log(population);

*/

/*
let javaScriptIsFun = true;
console.log(true);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;

console.log(year);
console.log(typeof year);

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

*/

// Day 2

/*
let age = 30;
age = 31; // mutated
console.log(age);

let year;
year = 2004;//mutated

const birthYear = 1997; 
//birthYear = 1990; // cannot change
console.log(birthYear);

//const job; // cannot declare empty const

var job = "programmer";
job = "teacher";
console.log(job);

*/

/*
// Math Operators
const now = 2037;

const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);


//Assignment Operators
let x = 10 + 5;
x += 10; //x = x + 10 = 25
x *= 4;// x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah);// >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

/*
const now = 2037;

const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2018);

//console.log(25 - 10 - 5);

let x, y;

x = y = 25 - 10 - 5;

console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

*/

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;


const jonas = "I'm " + firstName + ', a ' + (year - birthYear)+" years old "+job+"!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year-birthYear} year old ${job}`;
console.log(jonasNew);

console.log("String \n\
multiple \n\
lines");

console.log(`String with
multiple
lines`);

*/

/*
const age = 15;

const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Sarah can start driving license 🚗");
} else {
    const yearLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearLeft} years :)`);
}

const birthYear = 1991;

let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

*/

/*
// type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");

console.log('23' - '10' - 3);
console.log('23' + '10' + 3);

console.log('23' * '2');

let n = '1' + 1;
n = n - 1;
console.log(n);

*/


/*
//5 falsy values: 0,"",undefined,null,Nan

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
    console.log("Don't spent it all");
} else {
    console.log("You should get a job");
}

let height=123;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}

*/

/*


const age = 18;

if (age === 18) console.log("You just became an adult (Strict)");

if (age == 18) console.log("You just became an adult (Loose)");

const favourite =Number(prompt("What's your favourite number?"));

console.log(favourite);

console.log(typeof favourite);

if (favourite === 23) {
    console.log("Cool! 23 is an amazing number");
} else if (favourite === 7) {
    console.log("7 is a cool number");
} else {
    console.log("Number is not 23 or 7");
}

if (favourite !== 23) {
    console.log("Why not 23?");
}

*/

/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);

console.log(hasDriversLicense || hasGoodVision);

console.log(!hasDriversLicense);

console.log(!hasDriversLicense && hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;


// if (shouldDrive) {
//     console.log("Sarah is able to drive");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (shouldDrive && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive...");
}

*/


/*

const day = "wednesday";

switch (day) {
    case "monday": //day==="monday"
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("Record videos");
        break;
    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a Valid day!");
}

*/


/*

const age = 23;

// age >= 18 ? console.log("I like to drink wine 🍷") : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = "wine 🍷";
} else {
    drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

*/

