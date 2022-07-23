import React from 'react'
import BookshelfBooks from '../bookshelf-books';
import BookshelfTitle from '../bookshelf-title';

function Bookshelf({ bookshelfTitle, books }) {
    return (
        <div className="bookshelf">
            <BookshelfTitle bookshelfTitle={bookshelfTitle} />
            <BookshelfBooks books={books} />
        </div>
    )
}

export default Bookshelf;