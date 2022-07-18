function getTotalBooksCount(books) {
// single parameter - array of book objects
// use length to find total
return books.length;

}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  // find total number of books borrowed
  // reduce by counting number of not returned books

  let borrowedBooks = books.reduce((user, book) => {
    return (user + (!book.borrows[0].returned));
  }, 0); // need to start at 0
  return borrowedBooks;
}

// =========================================================

// need to make a helper function 
// get most common genre, popular books, and popular authors

const countObject = {};

// helper function below
function createGenre(books) {
  books.forEach((book) => {
    if (countObject[book.genre] != null) {
      countObject[book.genre]++;
    } else {
      countObject[book.genre] =1;
    }
  });
  return countObject;
}


// return array with five objects or fewer
// ordered from most common to least

// will need to sort at the end

function getMostCommonGenres(books) {
  const countGenre = [];
  let objectOne = {};
  createGenre(books);
  for (let item in countObject) {
    const genre = item;
    const counter = countObject[item];
    objectOne = {
      name: genre,
      count: counter,
    };
    countGenre.push(objectOne);
  }
  countGenre.sort((a, b) => b.count - a.count);
  countGenre.length = 5;
  return countGenre;
}


// ==========================================================

function getMostPopularBooks(books)  {
  // needs to return an array of 5 objects or fewer
  // popularity is based on number of borrows
  // each object needs to return two keys:
    // name key : name of book
    // count key : # of borrows

 return books.map(book => {
  return {
    name: book.title,
    count: book.borrows.length
  }
 }).sort((bookA, bookB) => bookB.count - bookA.count).splice(0, 5)
}

// =======================================================

function getMostPopularAuthors(books, authors) {}


  //returns an array containing max 5 objects that represents the most popular authors by whose books have been checked out the most
  //each obj returned has 2 keys the name key -> first and last name of author and the count key -> number of times the authors books have been borrowed
function getMostPopularAuthors(books, authors) {
  let authsArray =[];
  // create empty array for return
 
  // need to filter through the books and find the most borrowed, 
  let mostPop = books.filter((book) => authors.find((author) => author.id === book.authorId));

  mostPop.forEach((book) => {
    let author = authors.find((author) => author.id === book.authorId);
    authsArray.push( {name: `${author.name.first} ${author.name.last}`, count: book.borrows.length})
    
    //make sure to have max of 5
  });
  authsArray.sort((a, b) => (a.count < b.count ? 1 : -1));
  authsArray.length = 5;
  return authsArray;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
