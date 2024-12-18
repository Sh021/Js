'use strict';

// console.log(5);


// 1.1

// const books = ["book1", "book2"];
// const [firstBook, scondBook] = books;
// console.log(firstBook, scondBook);

//1.2
const books = ["book1", "book2", "book3"];
const [, , thirdBook] = books;
console.log(thirdBook);

//1.3
const ratings = [
  ["rating", 4.19],
  ["ratingsCount", 144584],
];

const [[, rating], [, ratingCount]] = ratings;
console.log(rating, ratingCount);

//1.4
const ratingStars = [63405, 1808];

const [fiveStarRatings=0, oneStarRatings=0, threeStarRatings = 0] = ratingStars;

console.log(fiveStarRatings, oneStarRatings, threeStarRatings);
