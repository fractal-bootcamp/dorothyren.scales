//Questions:
//1. Why do we type AppState? And assign it to initialState? Why can't initialState just be an array of books?

type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
  genres: string[];
};

type AppState = {
  books: Book[];
};

const initialState: AppState = {
  books: [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      genres: ["Fiction", "Drama"],
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      year: 1949,
      genres: ["Fiction", "Dystopian"],
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      genres: ["Fiction", "Romance"],
    },
    {
      id: 4,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
      genres: ["Fiction", "Fantasy"],
    },
    {
      id: 5,
      title: "To the Lighthouse",
      author: "Virginia Woolf",
      year: 1927,
      genres: ["Fiction", "Modernist"],
    },
  ],
};

function getFirstBook(state: AppState): Book | undefined {
  return state.books[0];
}

// function demonstrateBasicOperations(state: AppState): void {
//   const firstBook = getFirstBook(state);
//   console.log("First book:", firstBook);
// }

// demonstrateBasicOperations(initialState);

function getLastBook(state: AppState): Book | undefined {
  return state.books[state.books.length - 1];
  //   console.log("last book:", lastbook)
}
// getLastBook(initialState);

function addBook(state: AppState, newBook: Book): AppState {
  return {
    //this is a spread operator, it spreads all existing books into this new array
    ...state,
    //...state.books spreads all existing books into this new array
    //newBook is then added at the end
    books: [...state.books, newBook],
  };
}

function removeFirstBook(state: AppState): AppState {
  const booksWithoutFirst = state.books.slice(1);
  return {
    ...state,
    books: booksWithoutFirst,
  };
}

function findBookByTitle(state: AppState, title: string): Book | undefined {
  //arrow function where book is passed in. the function called for each book in the array. it extracts book.title and compares to the title passed in through parent function
  return state.books.find((book) => book.title === title);
}

function filterBooksByGenre(state: AppState, genre: string): Book[] {
  return state.books.filter((book) => book.genres.includes(genre));
}

function libraryHasAuthor(state: AppState, author: string): boolean {
  return state.books.some((book) => book.author === author);
}

function demonstrateBasicOperations(state: AppState): void {
  console.log("first book:", getFirstBook(state));
  console.log("last book:", getLastBook(state));

  const newBook: Book = {
    id: 6,
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
    genres: ["Science Fiction"],
  };

  const updatedState = addBook(state, newBook);
  console.log("Books after adding:", updatedState.books); //ask about this

  const stateWithoutFirst = removeFirstBook(state);
  console.log("state without first:", stateWithoutFirst.books);

  console.log("found book", findBookByTitle(state, "1984"));

  const fictionBooks = filterBooksByGenre(state, "Fiction");
  console.log("fiction books:", fictionBooks);

  const hasAustenBooks = libraryHasAuthor(state, "Jane Austen");
  console.log("Has Jane Austen books?", hasAustenBooks);
}

demonstrateBasicOperations(initialState);

//array transformations

//mapping all the book objects into just the book titles
function getAllTitles(state: AppState): string[] {
  return state.books.map((book) => book.title);
}

function getModernBooks(state: AppState): Book[] {
  return state.books.filter((book) => book.year > 1950);
}

function getEarliestPublicationYear(state: AppState): number {
  return state.books.reduce(
    //earliest is the accumulator, storing the earliest year found.
    //book.year is the value being evaluated in comparison to earliest
    (earliest, book) => Math.min(earliest, book.year),
    //starts with earliest as infinity
    Infinity
  );
}

function sortBooksByYear(state: AppState): Book[] {
  const sortedBooks = [...state.books].sort((a, b) => a.year - b.year);
  return sortedBooks;
}

function sortBooksByYear2(state: AppState): AppState {
  return {
    ...state,
    books: [...state.books].sort((a, b) => a.year - b.year),
  };
}

function reverseBooks(state: AppState): Book[] {
  const reversedBooks = [...state.books].reverse();
  return reversedBooks;
}

function demonstrateArrayTransformations(state: AppState): void {
  console.log("All Titles:", getAllTitles(state));
  console.log("Modern books:", getModernBooks(state));
  console.log("Earliest Publication:", getEarliestPublicationYear(state));

  console.log("Books sorted by year:", sortBooksByYear(state));

  console.log("Reversed books:", reverseBooks(state));
}
demonstrateArrayTransformations(initialState);

//more advanced array operations
function getAllGenres(state: AppState): string[] {
  const allGenres = state.books.flatMap((book) => book.genres);
  //creates a set from allgenres
  //set only stores unique values, removing dupes
  const removeDupes = new Set(allGenres);
  console.log("this is the set before it gets spread", removeDupes);
  //spreads the set back into an array
  return [...removeDupes];
}

//FIX THIS
function getAllAuthorsAndTitles(state: AppState): string[][] {
  return state.books.map((book) => [book.author, book.title]);
}

function areAllBooksFiction(state: AppState): boolean {
  return state.books.every((book) => book.genres.includes("Fiction"));
}

function doAllBooksHaveTitles(state: AppState): boolean {
  return state.books.every((book) => book.title && book.title.length > 0);
}

//Record is a TS utility type repping an object with string keys and number values
//good for genre counts where genre names are key and counts are values
function getGenreCounts(state: AppState): Record<string, number> {
  //used to transform the array of books into a single object of genre counts
  return state.books.reduce(
    (counts, book) => {
      //for each genre of the current book, update the count in hte counts object
      book.genres.forEach((genre) => {
        //if the genre doesnt exist in counts, counts[genre] is undefined
        //if it does exist, use the current value and add 1
        if (counts[genre] === undefined) {
          counts[genre] = 1;
        } else {
          counts[genre] += 1;
        }
      });
      return counts;
    },
    // this is the initial value for the reduce operation, starting with an empty object typed as Record<string, number>
    {} as Record<string, number>
  );
}

function demonstrateAdvancedOperations(state: AppState): void {
  console.log("All genres (flattened):", getAllGenres(state));
  console.log("Authors and their books:", getAllAuthorsAndTitles(state));
  console.log("All books are fiction:", areAllBooksFiction(state));
  console.log("All books have titles:", doAllBooksHaveTitles(state));
  console.log("Genre counts:", getGenreCounts(state));
}

demonstrateAdvancedOperations(initialState);

//Object operations

function getBookProperties(book: Book): string[] {
  return Object.keys(book);
}

function getBookValues(book: Book): any[] {
  return Object.values(book);
}
function getBookEntries(book: Book): [string, any][] {
  const bookEntries = Object.entries(book);
  console.log("book entries:", bookEntries);
  return Object.entries(book);
}
getBookEntries({
  id: 6,
  title: "gathering blue",
  author: "lois lowry",
  year: 1927,
  genres: ["Fiction", "Dark"],
});

function shallowCloneBook(book: Book): Book {
  return { ...book };
}

function cloneBook(book: Book): Book {
  return structuredClone(book);
}

function changeYearOfBook(book: Book, year: number): Book {
  //{...book } is take all the book properties and spread them here.
  // year:year overrides the yaear property with the new year.
  //the curly braces together creates a new object with these two things
  const newYearBook = { ...book, year: year };
  console.log(newYearBook);
  return newYearBook;
}

function demonstrateObjectOperations(state: AppState): void {
  const book = state.books[0];
  console.log("Book:", book);
  console.log("Book properties:", getBookProperties(book));
  console.log("Book values:", getBookValues(book));
  console.log("Book entries:", getBookEntries(book));
  console.log("Cloned book:", cloneBook(book));
  const newBook = changeYearOfBook(book, 1984);
  console.log("Book with changed year:", newBook);
}

demonstrateObjectOperations(initialState);

//Destructuring
function logBookInfo(book: Book): void {
  const { title, author, year } = book;
  console.log(`${title} was written by ${author} in ${year}`);
}

function logBookInfoWithRest(book: Book): void {
  const { title, author, year, ...rest } = book;
  console.log(`${title} was written by ${author} in ${year}`);
  console.log("Other properties:", rest);
}

function getFirstTwoBooks(state: AppState): [Book, Book, Book[]] {
  const [firstBook, secondBook, ...restBooks] = state.books;
  return [firstBook, secondBook, restBooks];
}

//getting the primary genre of a single book
function getPrimaryGenre(book: Book): string | undefined {
  //this is [array destructuring] used to extract values from an array and assign them to variables
  //this takes the first element of the book.genres array and assigns it to the variable primaryGenre
  const [primaryGenre] = book.genres;
  return primaryGenre;
}

function getTwoGenres(book: Book): string[] | undefined {
  const [primaryGenre, secondaryGenre] = book.genres;
  return [primaryGenre, secondaryGenre];
}

function demonstrateDestructuring(state: AppState): void {
  logBookInfo(state.books[0]);
  logBookInfoWithRest(state.books[0]);
  const [first, second, rest] = getFirstTwoBooks(state);
  console.log("First book:", first);
  console.log("Second book:", second);
  console.log("Rest of the books:", rest);
  console.log(
    "Primary genre of the first book:",
    getPrimaryGenre(state.books[0])
  );
  console.log("get two genres of the first book", getTwoGenres(state.books[0]));
}

demonstrateDestructuring(initialState);

function runDemo(initialState: AppState): void {
  console.log("--- Basic Operations ---");
  demonstrateBasicOperations(initialState);

  console.log("\n--- Array Transformations ---");
  demonstrateArrayTransformations(initialState);

  console.log("\n--- Advanced Operations ---");
  demonstrateAdvancedOperations(initialState);

  console.log("\n--- Object Operations ---");
  demonstrateObjectOperations(initialState);

  console.log("\n--- Destructuring ---");
  demonstrateDestructuring(initialState);
}

runDemo(initialState);
