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

// console.log(getFirstBook(initialState));

function demonstrateBasicOperations(state: AppState): void {
  const firstBook = getFirstBook(state);
  console.log("first book", firstBook);
}

// console.log(demonstrateBasicOperations(initialState));

function getLastBook(state: AppState): Book | undefined {
  return state.books[state.books.length - 1];
}
// console.log(getLastBook(initialState));

function addBook(state: AppState, newBook: Book): AppState {
  return {
    ...state,
    books: [...state.books, newBook],
  };
}

// console.log(
//   addBook(initialState, {
//     id: 7,
//     title: "The Odyssey",
//     author: "Homer",
//     year: 100,
//     genres: ["Fiction", "Myth"],
//   })
// );

function removeFirstBook(state: AppState): AppState {
  const booksWithoutFirst = state.books.slice(1);
  return {
    ...state,
    books: booksWithoutFirst,
  };
}
// console.log(removeFirstBook(initialState));

function findBookByTitle(state: AppState, title: string): Book | undefined {
  return state.books.find((book) => book.title === title);
}
// console.log(findBookByTitle(initialState, "1984"));

function filterBooksByGenre(state: AppState, genre: string): Book[] {
  return state.books.filter((book) => book.genres.includes(genre));
}
// console.log(filterBooksByGenre(initialState, "Romance"));

function libraryHasAuthor(state: AppState, author: string): boolean {
  return state.books.some((book) => book.author === author);
}
// console.log(libraryHasAuthor(initialState, "Harper Lee"));

function demonstrateBasicOperations2(state: AppState): void {
  console.log("First Book:", getFirstBook(state));
  console.log("Last Book:", getLastBook(state));

  const newBook: Book = {
    id: 6,
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
    genres: ["Science Fiction"],
  };
  const updatedState = addBook(state, newBook);
  console.log("Books after adding:", updatedState.books);

  const stateWithoutFirst = removeFirstBook(state);
  console.log("Books without first:", stateWithoutFirst.books);

  console.log("Found book:", findBookByTitle(state, "To Kill a Mockingbird"));

  const fictionBooks = filterBooksByGenre(state, "Fiction");
  console.log("fiction books:", fictionBooks);

  const hasJaneBook = libraryHasAuthor(state, "Jane Austen");
  console.log("Has Jane Austen book?:", hasJaneBook);
}
demonstrateBasicOperations2(initialState);

function getAllTitles(state: AppState): string[] {
  return state.books.map((book) => book.title);
}

function getModernBooks(state: AppState): Book[] {
  return state.books.filter((book) => book.year > 1950);
}

function getEarliestPublicationYear(state: AppState): number {
  return state.books.reduce(
    (earliest, book) => Math.min(earliest, book.year),
    Infinity
  );
}

//ASK ABOUT THESE

// function sortBooksByYear(state: AppState): Book[] {
//   const sortedBooks = [...state.books].sort((a, b) => a.year - b.year);
//   return {
//     ...state,
//     books: sortedBooks,
//   };
// }

// function sortBooksByYear2(state: AppState): Book[] {
//   return {
//     ...state,
//     books: state.books.toSorted((a, b) => a.year - b.year),
//   };
// }

// function reverseBooks(state: AppState): Book[] {
//   const reversedBooks = [...state.books].reverse();
//   return {
//     ...state,
//     books: reversedBooks,
//   };
// }

// function reverseBooks2(state: AppState): Book[] {
//   return {
//     ...state,
//     books: state.books.toReversed(),
//   };
// }

function demonstrateArrayTransformations(state: AppState): void {
  console.log("All titles:", getAllTitles(state));
  console.log("Modern books:", getModernBooks(state));
  console.log("Earliest publication year:", getEarliestPublicationYear(state));

  //   console.log("Books sorted by year:", sortBooksByYear(state));
  //   console.log("Books sorted by year 2:", sortBooksByYear2(state));

  //   console.log("Reversed books:", reverseBooks(state));
  //   console.log("Reversed books 2:", reverseBooks2(state));
}

demonstrateArrayTransformations(initialState);

// NEED TO DO STEP 4

//STEP 5
function getBookProperties(book: Book): string[] {
  return Object.keys(book);
}

console.log(
  getBookProperties({
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genres: ["Fiction", "Drama"],
  })
);

function getBookValues(book: Book): any[] {
  return Object.values(book);
}
console.log(
  getBookValues({
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genres: ["Fiction", "Drama"],
  })
);

function getBookEntries(book: Book): [string, any][] {
  return Object.entries(book);
}
console.log(
  "book entries:",
  getBookEntries({
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genres: ["Fiction", "Drama"],
  })
);

function shallowCloneBook(book: Book): Book {
  return { ...book };
}

console.log(
  "shallow clone:",
  shallowCloneBook({
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genres: ["Fiction", "Drama"],
  })
);

function cloneBook(book: Book): Book {
  return structuredClone(book);
}

console.log(
  "clone:",
  cloneBook({
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genres: ["Fiction", "Drama"],
  })
);

function changeYearOfBook(book: Book, year: number): Book {
  return { ...book, year: year };
}
console.log(
  "change year:",
  changeYearOfBook(
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      genres: ["Fiction", "Drama"],
    },
    2008
  )
);

// {
//     id: 1,
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
//     genres: ["Fiction", "Drama"],
//   }

function logBookInfo(book: Book): void {
  const { title, author, year } = book;
  console.log(`${title} was written by ${author} in ${year}`);
}

logBookInfo({
  id: 1,
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  genres: ["Fiction", "Drama"],
});

function logBookInfoWithRest(book: Book): void {
  const { title, author, year, ...rest } = book;
  console.log(`${title} was written by ${author} in ${year}`);
  console.log("Other properties", rest);
}
logBookInfoWithRest({
  id: 1,
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  genres: ["Fiction", "Drama"],
});

function getFirstTwoBooks(state: AppState): [Book, Book, Book[]] {
  const [firstBook, secondBook, ...restBooks] = state.books;
  return [firstBook, secondBook, restBooks];
}
console.log(getFirstTwoBooks(initialState));

function getPrimaryGenre(book: Book): string | undefined {
  const [primaryGenre] = book.genres;
  return primaryGenre;
}
console.log(
  getPrimaryGenre({
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genres: ["Fiction", "Drama"],
  })
);

function runDemo(initialState: AppState): void {
  console.log("--- Basic Operations ---");
  demonstrateBasicOperations(initialState);

  console.log("\n--- Array Transformations ---");
  demonstrateArrayTransformations(initialState);

  // console.log("\n--- Advanced Operations ---");
  // demonstrateAdvancedOperations(initialState);

  // console.log("\n--- Object Operations ---");
  // demonstrateObjectOperations(initialState);

  // console.log("\n--- Destructuring ---");
  // demonstrateDestructuring(initialState);
}

runDemo(initialState);
