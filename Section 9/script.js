"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your Delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(...otherIngredients);
  },
};

//////////////////////////////////////////////

//////////////////////////////////////////////

/*
 */

/*

//////////////////////////////////////////////

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);

//////////////////////////////////////////////

 */

/*

//////////////////////////////////////////////////////

const rest1 = {
  name: "Capri",
  // numGuests: 30,
  numGuests: 0,
};

const rest2 = {
  name: "Capri",
  owner: "Giovanni Rossi",
};

//////////////////////////////////////////////////////////

*/

/*

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);

//////////////////////////////////////////////////////

 */

/*

//////////////////////////////////////////////////////

//restaurant.numGuests = 0;

const guest = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guest);

// Nullish:null and undefined (NOT 0 or "")
const guestCorrect = restaurant.numGuests ?? 10;

console.log(guestCorrect);


//////////////////////////////////////////////////////

*/

/*
    
    //////////////////////////////////////////////
    
console.log("-----------OR-----------");

// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || "Jonas");

console.log("" || "Jonas");

console.log(true || 0);

console.log(undefined || null);

console.log(undefined || 0 || "" || "hello" || 23 || null);

restaurant.numGuests = 23;

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guest1);

const guest2 = restaurant.numGuests || 10;

console.log(guest2);

console.log("-----------AND----------");

console.log(0 && "Jonas");

console.log(7 && "Jonas");

console.log("hello" && 23 && null && "jonas");

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushroom", "spinach");

//////////////////////////////////////////////

 */

/*

/////////////////////////////////////////////////

// Destructuring

// SPREAD, because on RIGHT side of=
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  console.log(sum);
}

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

restaurant.orderPizza("mushrooms");


/////////////////////////////////////////////////

 */

/*

///////////////////////////////////////////////////////////

const arr = [7, 8, 9];

const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

const newArr = [1, 2, ...arr];

console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables : arrays, strings, map, sets. NOT objects

const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...letters);
// console.log(`${...str} Schmedtmann`);

// Real-World Example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("ngredient 2?"),
//   prompt("Ingredient 3?"),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };

console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

///////////////////////////////////////////////////////////

 */

/*

///////////////////////////////////////////////////////////////
// Destructuring Objects
restaurant.orderDelivery({
  time: "22:30",
  address: "via del sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "via del sole, 21",
  starterIndex:1,
})

const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects

const {
  fri: { open: o, close: c },
} = openingHours;

console.log(o, c);

///////////////////////////////////////////////////////////////

*/

/*
///////////////////////////////////////////////////////////////

const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);

console.log(arr);

////////////////////////////////////////////////////////////////

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

///////////////////////////////////////////////////////////////////

const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;

// console.log(i,j);

const [i, , [j, k]] = nested;

console.log(i, j, k);

// Default values

const [p = 1, q = 1, r = 1] = [8, 9];

console.log(p, q, r);

//////////////////////////////////////////////////////////////////////
*/
