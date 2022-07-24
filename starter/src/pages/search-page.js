import React, { useState } from 'react'
import { NotificationManager } from 'react-notifications';
import { Link } from 'react-router-dom';
import * as BooksAPI from "../utils/BooksAPI";
import BookshelfBooks from '../components/bookshelf-books';
import ExportExcel from '../components/export-excel';
import PropTypes from 'prop-types';

function SearchPage({ books, onChangeBookshelf }) {
    const [query, setQuery] = useState("");
    const [searchReasult, setSearchReasult] = useState([]);

    const handleQuery = (query) => {
        setQuery(query);
        const searchBooks = async () => {
            await BooksAPI.search(query.toLowerCase())
                .then((searchReasultResponse) => {
                    if (searchReasultResponse.error) {
                        handleClearSearchResults();
                        NotificationManager.info(`No books found try searching with different query to get what you are looking for`);
                        return;
                    }
                    // NOTE: the response from the search API doesn't include the shelf info
                    //  & it is required to keep the same experience on the main page 
                    // to reflect the info of the shelf if the book is currently on one of the shelves

                    // Get the matched books in the main array passed through props called books 
                    // & the array that I got from the search API's response
                    let matchedBooks = books?.filter(book => searchReasultResponse?.some(searchReasult => book.id === searchReasult.id));

                    // remove the matched books from search API's array as it contains old data
                    let finalSearchReasult = searchReasultResponse.filter(searchReasult => !matchedBooks.some(matchedBook => searchReasult.id === matchedBook.id))

                    // assign shelf value as "none" if the book doesn't exist in the original books (that I got through props)
                    finalSearchReasult.map((book) => book.shelf = "none")

                    // Concat the matched books data that holds the shelf info (that I got earlier from the books array) 
                    // to the final Search Result that got filtered out & update the state accordingly
                    setSearchReasult(matchedBooks.concat(finalSearchReasult))
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
    books: PropTypes.array.isRequired,
    onChangeBookshelf: PropTypes.func.isRequired,
}

export default SearchPage;