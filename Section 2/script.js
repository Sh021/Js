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

