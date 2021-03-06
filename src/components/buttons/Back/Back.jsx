import { Link, useNavigate } from "react-router-dom"

import './Back.css'

export const Back = ({url}) => {
    const navigate = useNavigate()

    return (
        <div className="back" onClick={() => navigate(-1)}>
            <div className="back-icon">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L2 7L8 13" stroke="#3772FF" strokeWidth="2"/>
                </svg>
            </div>
        </div>
    )
}