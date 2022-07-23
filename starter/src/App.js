import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from "./utils/BooksAPI";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import MainPage from "./pages/main-page";
import SearchPage from "./pages/search-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
      setIsLoaded(true)
    };
    getBooks();
  }, []);

  const handleChangeBookshelf = (book, shelf) => {
    const change = async () => {
      await BooksAPI.update(book, shelf)
        .then(() => {
          NotificationManager.success(`${book.title} has been moved to the new shelf successfully`);
          // update the value of the bookshelf with the new shelf
          book.shelf = shelf;
          // remove the selected book from the books array as it contains old data
          let newBooks = books.filter(selectedBook => book.id !== selectedBook.id)
          // add the book with updated shelf info to the books array
          newBooks.push(book);
          // update the state accordingly
          setBooks(newBooks);
        }).catch(() => {
          NotificationManager.error(`Something went wrong kindly try again`);
        });
    };
    change();
  }

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/search"
            element={<SearchPage
              onChangeBookshelf={(book, shelf) => handleChangeBookshelf(book, shelf)} />} />
          <Route
            exact path="/"
            element={<MainPage
              books={books}
              isLoaded={isLoaded}
              onChangeBookshelf={(book, shelf) => handleChangeBookshelf(book, shelf)} />} />
        </Routes>
      </Router>
      <NotificationContainer />
    </div>
  );
}

export default App;
