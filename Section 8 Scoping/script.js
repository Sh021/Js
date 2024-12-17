"use strict";
/*

//Scoping and Scope chaining

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //Creating New variable with same name as outer scope's variable
      const firstName = "Steven";

      // Reassigning outer scope's variable
      output = "New Output!";
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    console.log(millenial);
    // console.log(add(2, 3));

    console.log(output);
  }
  printAge();

  return age;
}

const firstName = "Jonas";

calcAge(1991);

*/

/*

// Hoisting and TDZ

// console.log(me); // Hoisted to undefined
// console.log(job); // TDZ
// console.log(year); //TDZ

// var me = "Jonas";
// let job = "teacher";
// const year = 1991;

//functions

console.log(addDecl(2, 3));
// console.log(addExpr(3, 4));
// console.log(addArrow(4, 5));
console.log(addArrow);

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
};

var addArrow = (a, b) => a + b;

//Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

*/

/*
 */

// This Keyword

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    return 2037 - this.year;
  },
};
console.log(jonas.calcAge());

const matila = {
  year: 2017,
};

matila.calcAge = jonas.calcAge;

console.log(matila.calcAge());

const f = jonas.calcAge;

console.log(f);

//console.log(f());
