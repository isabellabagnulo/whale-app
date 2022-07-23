import { Link } from "react-router-dom"

import "./BookCard.css"

export const BookCard = ({book, location}) => {
    return (
        <Link className="book-card" to={`/book/${book.id}`}>
            <div className="card-cover">
                <img src={`${book.attributes.cover_url}`} alt="" />
            </div>
            <div className="card-description">
                <h2>{book.attributes.title}</h2>
                <p className="opacity-70">{book.attributes.author}</p>
                {location && (
                    <div>
                        {location.data.attributes.title && <p className="fs-14"><span className="opacity-70">Disponibile presso:</span> <span className="text-medium">{location.data.attributes.title}</span></p>}
                    </div>
                )}
            </div>
            
           
            
        </Link>
    )
}