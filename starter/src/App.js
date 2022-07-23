import "./App.css";
import { useEffect, useState } from "react";
import Bookshelf from "./components/bookshelf";
import * as BooksAPI from "./BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const res = await BooksAPI.getAll();
    setBooks(res);
  };

  useEffect(() => {
    getBooks();
  }, []);

  const handleChangeBookshelf = (book, shelf) => {
    const change = async () => {
      await BooksAPI.update(book, shelf).then(() => {
        getBooks();
      });
    };
    change();
  }

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Bookshelf
                books={books.filter((book) => book.shelf === "currentlyReading")}
                bookshelfTitle={"Currently Reading"}
                onChangeBookshelf={(book, shelf) => handleChangeBookshelf(book, shelf)} />
              <Bookshelf
                books={books.filter((book) => book.shelf === "wantToRead")}
                bookshelfTitle={"Want To Read"}
                onChangeBookshelf={(book, shelf) => handleChangeBookshelf(book, shelf)} />
              <Bookshelf
                books={books.filter((book) => book.shelf === "read")}
                bookshelfTitle={"Read"}
                onChangeBookshelf={(book, shelf) => handleChangeBookshelf(book, shelf)} />
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
