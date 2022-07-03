import { useEffect, useState } from 'react'

import { ENDPOINT } from '../libs/const'
import { BookCard } from '../components/BookCard/BookCard'
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
        <main>
            <h1>Sezione books</h1>
            <Tabs />
            {books.map(book => 
                <BookCard key={book.id} book={book}/>
            )}
        </main>
    )
}