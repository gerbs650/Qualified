function findAccountById(accounts, id) {
  // find account by Id
  let accountId = accounts.find((account) => account.id === id);
  return accountId;
}

// =========================================================


function sortAccountsByLastName(accounts) {
  //now lets sort account by last names
  const accountByLastName = accounts.sort((accountOne, accountTwo) => 
  accountOne.name.last < accountTwo.name.last ? -1 : 1 );
  return accountByLastName;
}


// ====================================================


function getTotalNumberOfBorrows(account, books) {
  // needs a counter to count total number of borrows
  let counter = 0;
  
   // need to create a new variable to pull account.id
  const accountId = account.id;

books.forEach((book) => book.borrows.forEach((isBorrowed) =>
 (accountId === isBorrowed.id) && counter++))

  // loop through the books, then forEach book, look through the borrows forEach borrow. 
  // if the accountId = isBorrowed.Id then add to counter.
 return counter;
}


// ==================================================


function getBooksPossessedByAccount(account, books, authors) {
  // create new varibale for account Id again
  const accountId = account.id;
  
  // lets filter through books and create a book varibale for books that are checked out and
  // if they match accountId

  let booksPossessed = books.filter((book) => book.borrows[0].returned === false && 
  book.borrows[0].id === accountId);

  // create new variable with booksPossessed and map out the array to
  // include author details inside book

  let bookInfo = booksPossessed.map((detail) => ({
    ...detail, author: authors.find((author) => author.id === detail.authorId)
  }));
  return bookInfo;

  
}









module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
