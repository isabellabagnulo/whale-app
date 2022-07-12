import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"

import { AddButton } from "../components/buttons/AddButton/AddButton"
import { Back } from "../components/buttons/Back/Back"
import { BookCard } from "../components/BookCard/BookCard"
import { ENDPOINT } from "../libs/const"

import './Location.css'

export const Location = () => {
    const [location, setLocation] = useState()
    const params = useParams()
    const [books, setBooks] = useState([])

    useEffect(() => {
        const getLocation = async () => {
            const response = await fetch(`http://localhost:1337/api/locations/${params.id}?populate=*`)
            const {data} = await response.json()

            setLocation(data)
        }

        return getLocation
    }, [])

    return (
        <main className="single-location">

            <Back url="/locations" />

            {location &&
                <div className="location">
                    <div className="location-cover" style={{
                        backgroundImage: "url(" + `http://localhost:1337${location.attributes.cover.data.attributes.url}` + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}>
                        <div className="overlay">
                            <h1>{location.attributes.title}</h1>
                            <p className="text-light">{location.attributes.address}</p>
                            <p className="text-light">
                                <span className="text-bold">{(location.attributes.books.data).length}</span>
                                {
                                    ((location.attributes.books.data).length <= 1) ? (
                                        " libro disponibile"
                                    ) : (
                                        " libri disponibili"
                                    )
                                }
                            </p>
                        </div>
                    </div>

                    <AddButton />

                    {location.attributes.books.data.map(book =>
                        <BookCard key={book.id} book={book}/>
                    )}

                </div>
            }

        </main>
    )
}