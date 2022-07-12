import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { Back } from "../components/buttons/Back/Back"
import { Button } from "../components/buttons/Button/Button"

import './Book.css'

export const Book = () => {
    const [book, setBook] = useState()
    const params = useParams()

    useEffect(() => {
        const getBook = async () => {
            const response = await fetch(`http://localhost:1337/api/books/${params.id}?populate=*`)
            const {data} = await response.json()

            setBook(data)
        }

        return getBook
    }, [])

    return (
        <main>
            <Back url="/" />

            {book &&
                <div className="book">
                    <img className="book-cover" src={`${book.attributes.cover_url}`} alt="" />
                    <div className="book-content">
                        <div className="book-header">
                            <h1>{book.attributes.title}</h1>
                            <p>{book.attributes.author}</p>
                        </div>

                        <div className="book-info">
                            {book.attributes.genre && <p>GENERE: <span className="text-medium">{book.attributes.genre}</span></p> }
                            {book.attributes.editor && <p>EDITORE: <span className="text-medium">{book.attributes.editor}</span></p> }
                            {book.attributes.year_of_publication && <p>ANNO DI EDIZIONE: <span className="text-medium">{book.attributes.year_of_publication}</span></p> }
                            {book.attributes.language && <p>LINGUA: <span className="text-medium">{book.attributes.language}</span></p> }
                            {book.attributes.format && <p>FORMATO: <span className="text-medium">{book.attributes.format}</span></p> }
                            {book.attributes.isbn && <p>ISBN: <span className="text-medium">{book.attributes.isbn}</span></p> }
                        </div>
                        
                        <Button
                            url={`/location/${book.attributes.location.data.id}`}
                            type=" outlined"
                            text={["Disponibile presso: ", <span className="text-bold">{book.attributes.location.data.attributes.title}</span>]}
                        />

                        {book.attributes.plot && 
                            <div className="book-plot">
                                <h3 className="text-with-line"><span>Trama</span></h3>
                                <p>{book.attributes.plot}</p>
                            </div> 
                        }
                    </div>
                    
                </div>
            }
        </main>
    )
}