import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"

import { AddButton } from "../components/buttons/AddButton/AddButton"
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

    useEffect(() => {
        const getBooks = async () => {
            const response = await fetch("http://localhost:1337/api/books?filters[availableAt][$eq]=" + location.attributes.title)
            const {data} = await response.json()
            setBooks(data)
        }

        return getBooks
    }, [location])

    const availableBooks = "N"

    return (
        <main>
            <h1>Pagina single location</h1>
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
                            <p className="text-light"><span className="text-bold">{availableBooks}</span> libri disponibili</p>
                        </div>
                    </div>

                    <AddButton />

                    {books.map(book => 
                        <BookCard key={book.id} book={book}/>
                    )}

                </div>
            }

        </main>
    )
}