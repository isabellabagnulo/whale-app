import { Link } from "react-router-dom"

import "./BookCard.css"

export const BookCard = ({book, location}) => {
    return (
        <Link className="card" to={`/book/${book.id}`}>
            <div className="card-cover">
                <img src={`${book.attributes.cover_url}`} alt="" />
            </div>
            <div className="card-description">
                <h2>{book.attributes.title}</h2>
                <p className="opacity-70">{book.attributes.author}</p>
                {location && (
                    <p className="opacity-70">Disponibile presso: <span className="text-medium">{location.data.attributes.title}</span></p>
                )}
            </div>
            
           
            
        </Link>
    )
}