import { Link } from "react-router-dom"

import './AddButton.css'

export const AddButton = () => {

    return(
        <Link to="/add" className="add-button">
            Aggiungi un libro in questo locale 
            <span className="add-icon">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0V12" stroke="white"/>
                    <path d="M12 6L-1.19209e-07 6" stroke="white"/>
                </svg>
            </span>
        </Link>
    )
}