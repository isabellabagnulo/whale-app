import { Link } from 'react-router-dom'

import { Search } from '../Search/Search'

import './Header.css'

export const Header = () => {

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

            <Search />
            
        </header>
        
    )
}