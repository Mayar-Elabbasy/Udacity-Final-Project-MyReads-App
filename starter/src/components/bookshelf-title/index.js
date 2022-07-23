import React from 'react'
import PropTypes from 'prop-types';

function BookshelfTitle({ bookshelfTitle }) {
    return (
        <h2 className="bookshelf-title">{bookshelfTitle}</h2>
    )
}

// Add component props type checking
BookshelfTitle.propTypes = {
    bookshelfTitle: PropTypes.string.isRequired,
}

export default BookshelfTitle;