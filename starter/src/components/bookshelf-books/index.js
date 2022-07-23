import React from 'react'
import Book from '../book';

function BookshelfBooks({ books, onChangeBookshelf }) {
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books?.map((book) => (
                    <li key={book.id}>
                        <Book
                            book={book}
                            image={book.imageLinks.thumbnail}
                            title={book.title}
                            authors={book.authors}
                            shelf={book.shelf}
                            onChangeBookshelf={onChangeBookshelf} />
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default BookshelfBooks;