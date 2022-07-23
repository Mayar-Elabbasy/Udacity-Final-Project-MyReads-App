import React from 'react'
import BookshelfChanger from '../bookshelf-changer';
import PropTypes from 'prop-types';

function Book({ book, image, title, authors, shelf, onChangeBookshelf }) {
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${image})`,
                    }}
                ></div>
                <BookshelfChanger currentShelf={shelf ?? "none"} book={book} onChangeBookshelf={onChangeBookshelf} />
            </div>
            <div className="book-title">{title}</div>
            {authors?.length ? (
                <>
                    {authors.map(author => (
                        <div className="book-authors" key={author}>{author}</div>
                    ))}
                </>
            ) : <div className="book-authors">Authors data isn't provided yet</div>}
        </div>
    )
}

// Add component props type checking
Book.propTypes = {
    book: PropTypes.object.isRequired,
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array,
    shelf: PropTypes.string.isRequired,
    onChangeBookshelf: PropTypes.func.isRequired,
}

export default Book;