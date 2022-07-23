import React from 'react'

function BookshelfChanger({ book, currentShelf, onChangeBookshelf }) {
    return (
        <div className="book-shelf-changer">
            <select
                value={currentShelf}
                onChange={(e) => {
                    onChangeBookshelf(book, e.target.value)
                }}>
                <option value="none" disabled>
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

export default BookshelfChanger;