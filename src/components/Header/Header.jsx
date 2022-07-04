import { Link } from 'react-router-dom'

export const Header = () => {
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/book/:id">Book</Link></li>
                <li><Link to="/location/:id">Location</Link></li>
                <li><Link to="/locations">Locations</Link></li>
            </ul>
        </nav>
    )
}