import { useEffect, useState } from 'react'

import { ENDPOINT } from '../libs/const'
import { BookCard } from '../components/BookCard/BookCard'
import { MyMap } from './MyMap'
import { Locations } from './Locations'
import { Tabs } from '../components/buttons/Tabs/Tabs'

export const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const getBooks = async () => {
            const response = await fetch(ENDPOINT("books"))
            const {data} = await response.json()
            setBooks(data)
        }

        return getBooks
    }, [])

    return (
        <main className="home">
            <Tabs />
            <div className='scroll'>
                {books.map(book => 
                    <BookCard key={book.id} book={book} location={book.attributes.location}/>
                )}
            </div>
            <div className='scroll hide-on-mobile'><MyMap /></div>
        </main>
    )
}