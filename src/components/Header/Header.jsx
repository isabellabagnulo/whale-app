import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Tabs } from '../buttons/Tabs/Tabs'
import { BookCard } from '../BookCard/BookCard'

import { ENDPOINT } from '../../libs/const'

export const Header = () => {
    const [text, setText] = useState("")
    const [books, setBooks] = useState([])

    // useEffect(() => {
    //     const getBooks = async () => {
    //         const response = await fetch(ENDPOINT("books"))
    //         const {data} = await response.json()
    //         setBooks(data)
    //     }

    //     return getBooks
    // }, [])

    // const onSearch = (event) => {
    //     const search = event.target.value.toLocaleLowerCase()
    //     setText(search)
    //     const results = books.filter(book => 
    //         book.attributes.title.toLocaleLowerCase().includes(search)
    //     )
    //     setBooks(results)
    // }

    return(
        <header>
            <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/book/:id">Book</Link></li>
                <li><Link to="/location/:id">Location</Link></li>
                <li><Link to="/locations">Locations</Link></li>
            </ul>
            </nav>

            <input
                className="search"
                type="text"
                placeholder="Cerca"
                // onChange={onSearch}
            />

            <main>
                {books.map(book => 
                    <BookCard key={book.id} book={book}/>
                )}
            </main>
        </header>
        
    )
}