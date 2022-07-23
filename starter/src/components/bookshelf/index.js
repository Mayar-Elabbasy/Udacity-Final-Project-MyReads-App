import React from 'react'
import BookshelfBooks from '../bookshelf-books';
import BookshelfTitle from '../bookshelf-title';

function Bookshelf({ bookshelfTitle, books, onChangeBookshelf }) {
    return (
        <div className="bookshelf">
            <BookshelfTitle bookshelfTitle={bookshelfTitle} />
            <BookshelfBooks books={books} onChangeBookshelf={onChangeBookshelf} />
        </div>
    )
}

export default Bookshelf;