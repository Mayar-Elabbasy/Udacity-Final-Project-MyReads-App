import React from 'react'
import Bookshelf from '../components/bookshelf';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MainPage({ books, onChangeBookshelf }) {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Bookshelf
                        books={books.filter((book) => book.shelf === "currentlyReading")}
                        bookshelfTitle={"Currently Reading"}
                        onChangeBookshelf={onChangeBookshelf} />
                    <Bookshelf
                        books={books.filter((book) => book.shelf === "wantToRead")}
                        bookshelfTitle={"Want To Read"}
                        onChangeBookshelf={onChangeBookshelf} />
                    <Bookshelf
                        books={books.filter((book) => book.shelf === "read")}
                        bookshelfTitle={"Read"}
                        onChangeBookshelf={onChangeBookshelf} />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
}

// Add component props type checking
MainPage.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeBookshelf: PropTypes.func.isRequired,
}

export default MainPage;