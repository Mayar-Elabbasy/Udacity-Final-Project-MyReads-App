import React, { useState } from 'react'
import { NotificationManager } from 'react-notifications';
import { Link } from 'react-router-dom';
import * as BooksAPI from "../utils/BooksAPI";
import BookshelfBooks from '../components/bookshelf-books';
import ExportExcel from '../components/export-excel';
import PropTypes from 'prop-types';

function SearchPage({ onChangeBookshelf }) {
    const [query, setQuery] = useState("");
    const [searchReasult, setSearchReasult] = useState([]);

    const handleQuery = (query) => {
        setQuery(query);
        const searchBooks = async () => {
            await BooksAPI.search(query.toLowerCase())
                .then((response) => {
                    if (response.error) {
                        handleClearSearchResults();
                        NotificationManager.info(`No books found try searching with different query to get what you are looking for`);
                        return;
                    }
                    setSearchReasult(response)
                }).catch(() => {
                    handleClearSearchResults();
                    return;
                });
        };
        searchBooks();
    };

    const handleClearSearchResults = () => {
        setSearchReasult([]);
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link
                    className="close-search"
                    to="/"
                >
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="search"
                        value={query}
                        onChange={({ target }) => handleQuery(target.value)}
                        placeholder="Looking for a specific book... Search Here"
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchReasult.length >= 1 && (
                        <>
                            <ExportExcel books={searchReasult} searchQuery={query} />
                            <BookshelfBooks books={searchReasult} onChangeBookshelf={onChangeBookshelf} />
                        </>
                    )}
                </ol>
            </div>
        </div>
    )
}

// Add component props type checking
SearchPage.propTypes = {
    onChangeBookshelf: PropTypes.func.isRequired,
}

export default SearchPage;