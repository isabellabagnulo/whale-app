import { Link } from "react-router-dom"

import "./Search.css"

export const SearchCard = ({book, location}) => {
    return (
        <Link className="search-card" to={`/book/${book.id}`}>
            <div className="card-cover">
                <img src={`${book.attributes.cover_url}`} alt="" />
            </div>
            <div className="card-description">
                <h2>{book.attributes.title}</h2>
                <p>{book.attributes.author}</p>
                {location && (
                    <p>Disponibile presso: {location.data.attributes.title}</p>
                )}
            </div>
        </Link>
    )
}