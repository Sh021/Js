"use strict";

/*

// 2.1

const { title, author, ISBN } = books[0];

//2.2

const { keywords: tags } = books[0];

//2.3

const { programmingLanguage = "unknown", language } = books[6];

//2.4

let bookTitle = "unknown";
let bookAuthor = "unknown";

({ title: bookTitle, author: bookAuthor } = books[0]);

//2.5

const books = {
  title: "Algorithms",

  thirdParty: {
    goodreads: {
      rating: 4.41, // <-- HERE
      ratingsCount: 1733,
      reviewsCount: 63,
      fiveStarRatingCount: 976,
      oneStarRatingCount: 13,
    },
  },
};

const {
  thirdParty: {
    goodreads: { rating: bookRating }
  }
} = books[0];


const printBookInfo={
    title: "Algorithms",
    author: "Robert Sedgewick",
    year: "2011",
};

const books=function printBookInfo({ title, author, year = "year unknown" }) {
    console.log(`${title} by ${author}, ${year}`);
}

// printBookInfo(printBookInfo);

books(printBookInfo);

*/
