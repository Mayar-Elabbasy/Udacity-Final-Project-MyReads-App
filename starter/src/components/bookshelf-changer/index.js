import React from 'react'
import PropTypes from 'prop-types';

function BookshelfChanger({ book, currentShelf, onChangeBookshelf }) {
    return (
        <div className="book-shelf-changer">
            <select
                value={currentShelf}
                onChange={(e) => {
                    onChangeBookshelf(book, e.target.value)
                }}>
                <option value="" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}


// Add component props type checking
BookshelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    currentShelf: PropTypes.string.isRequired,
    onChangeBookshelf: PropTypes.func.isRequired,
}

export default BookshelfChanger;