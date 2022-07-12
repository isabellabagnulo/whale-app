import { Link } from "react-router-dom"

import './Back.css'

export const Back = ({url}) => {
    return (
        <Link key={url} to={url} className="back" >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="#3C3B36"/>
                <path d="M18 10L12 16L18 22" stroke="#FAF6F0" strokeWidth="2"/>
                <path d="M16 31C7.71573 31 1 24.2843 1 16H-1C-1 25.3888 6.61116 33 16 33V31ZM31 16C31 24.2843 24.2843 31 16 31V33C25.3888 33 33 25.3888 33 16H31ZM16 1C24.2843 1 31 7.71573 31 16H33C33 6.61116 25.3888 -1 16 -1V1ZM16 -1C6.61116 -1 -1 6.61116 -1 16H1C1 7.71573 7.71573 1 16 1V-1Z" fill="#FAF6F0"/>
            </svg>
        </Link>
    )
}