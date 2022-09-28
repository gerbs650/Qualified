function findAuthorById(authors, id) {
// find author by ID that takes in two parameters
// return author object that has matching iD
  const authorID = authors.find((author) => author.id === id);
  return authorID;
}

function findBookById(books, id) {
  // find book by Id
  // likely similar to the function above

  const bookID = books.find((book) => book.id === id)
  return bookID;

}

function partitionBooksByBorrowedStatus(books) {
// uses one parameter
// return an array with two arrays need to see if books are borrowed or returned
// create two arrays

 let isBorrowed = books.filter((book) => !book.borrows[0].returned);
 let notBorrowed = books.filter((book) => book.borrows[0].returned);

  return [isBorrowed, notBorrowed];

}

function getBorrowersForBook(book, accounts) {
  // two parameters - book and accounts
  // book is object, not array. book holds borrows info as account id
  // need to match up accounts id to book borrows id.
  // accounts are array
  // ==
  // should return an array that has 10 or fewer account objects with borrows
  // add each borrow - reduce to an array of accounts as objects 

  let result = [];
  let borrows = book.borrows;

  borrows.forEach((borrow) => { // for each borrow
    accounts.forEach((account) => { // were going to look at each account
      if (account.id === borrow.id) { //if that account id matches the borrow id
        account.returned = borrow.returned; 
        result.push(account); // then we push into a new array
      }
    }
    )
  })

return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
