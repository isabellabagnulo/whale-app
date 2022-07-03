import { Link } from "react-router-dom"
import "./LocationCard.css"

export const LocationCard = ({location}) => {
    return (
        <Link className="card" to={`/location/${location.id}`}>
            <h1>{location.attributes.title}</h1>
            <h3>{location.attributes.address}</h3>
            <img src={`http://localhost:1337${location.attributes.cover.data.attributes.url}`} alt="" />
        </Link>
    )
}