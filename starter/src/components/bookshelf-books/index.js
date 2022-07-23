import React from 'react'
import Book from '../book';
import PropTypes from 'prop-types';

function BookshelfBooks({ books, onChangeBookshelf }) {
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books?.map((book) => (
                    <li key={book.id}>
                        <Book
                            book={book}
                            image={book?.imageLinks?.thumbnail}
                            title={book.title}
                            authors={book.authors}
                            shelf={book.shelf ?? "none"}
                            onChangeBookshelf={onChangeBookshelf} />
                    </li>
                ))}
            </ol>
        </div>
    )
}

// Add component props type checking
BookshelfBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeBookshelf: PropTypes.func.isRequired,
}

export default BookshelfBooks;