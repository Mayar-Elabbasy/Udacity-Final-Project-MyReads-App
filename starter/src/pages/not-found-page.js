import React from 'react'
import { Link } from 'react-router-dom';
import notFound from "../icons/not-found.gif"

function NotFoundPage() {
    return (
        <>
            <div className="not-found-page-img-wrapper">
                <img className="not-found-page-img" src={notFound} alt={"404 not found page"} />
            </div>
            <div className="not-found-page-info-wrapper">
                <Link
                    className="not-found-page-link"
                    to="/"
                >Back to main page</Link>
            </div>
        </>
    )
}

export default NotFoundPage;