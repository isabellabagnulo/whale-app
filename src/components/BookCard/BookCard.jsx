import { Link } from "react-router-dom"

import "./BookCard.css"

export const BookCard = ({book}) => {
    return (
        <Link className="card" to={`/book/${book.id}`}>
            <div className="card-cover">
                <img src={`http://localhost:1337${book.attributes.cover.data.attributes.url}`} alt="" />
            </div>
            <div className="card-description">
                <h2>{book.attributes.title}</h2>
                <p>{book.attributes.author}</p>
                <p>Disponibile presso: {book.attributes.availableAt}</p>
            </div>
            
           
            
        </Link>
    )
}