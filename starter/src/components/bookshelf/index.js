import React from 'react'
import BookshelfBooks from '../bookshelf-books';
import BookshelfTitle from '../bookshelf-title';
import PropTypes from 'prop-types';

function Bookshelf({ bookshelfTitle, books, onChangeBookshelf }) {
    return (
        <div className="bookshelf">
            <BookshelfTitle bookshelfTitle={bookshelfTitle} />
            <BookshelfBooks books={books} onChangeBookshelf={onChangeBookshelf} />
        </div>
    )
}

// Add component props type checking
Bookshelf.propTypes = {
    bookshelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onChangeBookshelf: PropTypes.func.isRequired,
}

export default Bookshelf;