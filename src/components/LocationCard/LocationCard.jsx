import { Link } from "react-router-dom"

import "./LocationCard.css"

export const LocationCard = ({location}) => {
    return (
        <Link className="location-card" to={`/location/${location.id}`}>
            <div className="card-cover" style={{
                        backgroundImage: "url(" + `http://localhost:1337${location.attributes.cover.data.attributes.url}` + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}>
            </div>
            <div className="card-description">
                <h2>{location.attributes.title}</h2>
                <p className="opacity-70">{location.attributes.address}</p>
                <p className="fs-14">

                    <span className="text-medium">{(location.attributes.books.data).length}</span>
                    <span className="opacity-70">{
                        ((location.attributes.books.data).length > 0 && (location.attributes.books.data).length <= 1) ? (
                            " libro disponibile"
                        ) : (
                            " libri disponibili"
                        )
                    }</span>
                </p>
            </div>
            
           
            
        </Link>
    )
}