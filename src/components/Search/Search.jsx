import { useEffect, useState } from 'react'

import { SearchCard } from './SearchCard'
import { useDebounce } from '../../hooks/useDebounce'

import './Search.css'

export const Search = () => {
  const [text, setText] = useState("")
  const [books, setBooks] = useState(null)
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(text, 500);
  
  const getBooks = async (query) => {
    const response = await fetch("http://localhost:1337/api/books?filters[title][$contains]=" + query)
    return await response.json()
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true)
      getBooks(debouncedSearchTerm).then((res) => {
        setBooks(res.data)
        setIsSearching(false)
      })
    } else {
      setIsSearching(false)
      setBooks([])
    }
  }, [debouncedSearchTerm])

  return (
    <div className='search-section'>
      <input
        className="search"
        type="text"
        placeholder="Cerca"
        onChange={(event) => setText(event.target.value.toLocaleLowerCase())}
      />

      <div className='results'>
        {isSearching && <div>Searching ...</div>}
        {books && books.map(book => 
          <SearchCard key={book.id} book={book}/>
        )}
      </div>
    </div>
  )
}