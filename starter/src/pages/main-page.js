import React from 'react'
import Bookshelf from '../components/bookshelf';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BOOKSHELVES } from '../utils/constants';

function MainPage({ books, isLoaded, onChangeBookshelf }) {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            {!isLoaded ?
                <div className="loader"></div>
                : (
                    <>
                        <div className="list-books-content">
                            <div>
                                {BOOKSHELVES.map((bookshelf) => (
                                    <Bookshelf key={bookshelf.value}
                                        books={books.filter((book) => book.shelf === bookshelf.value)}
                                        bookshelfTitle={bookshelf.label}
                                        onChangeBookshelf={onChangeBookshelf} />
                                ))}
                            </div>
                        </div>
                        <div className="open-search">
                            <Link to="/search">Add a book</Link>
                        </div>
                    </>
                )}
        </div>
    )
}

// Add component props type checking
MainPage.propTypes = {
    books: PropTypes.array.isRequired,
    isLoaded: PropTypes.bool.isRequired,
    onChangeBookshelf: PropTypes.func.isRequired,
}

export default MainPage;