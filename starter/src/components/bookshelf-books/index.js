import React from 'react'
import Book from '../book';

function BookshelfBooks({ books }) {
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books?.map((book) => (
                    <li key={book.id}>
                        <Book image={book.imageLinks.thumbnail} title={book.title} authors={book.authors} />
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default BookshelfBooks;