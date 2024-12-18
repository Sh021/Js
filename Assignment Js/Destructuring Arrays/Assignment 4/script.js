"use strict";

//4.1
const [mainKeyword, ...rest] = books[0].keywords;

//4.2
const { publisher: bookPublisher, ...restOfTheBook } = books[1];

//4.3

function printBookAuthorsCount( title, ...author ) {
    console.log(`The book "${title}" has ${author.length} authors`);
}

printBookAuthorsCount("Algorithms", "Robert Sedgewick", "Kevin Wayne");
