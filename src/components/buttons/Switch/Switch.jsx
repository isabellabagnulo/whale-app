import { NavLink } from "react-router-dom"

import './Switch.css'

export const Switch = () => {
    return(
        <>
            <div className="switch-buttons hide-on-desktop">
                <NavLink to="/locations" className="switch">
                    <div className="switch-icon">
                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 5.01L0 5V7H18V5.01ZM0 10H12V12H0V10ZM18 0H0V2.01L18 2V0Z" fill="#3C3B36"/>
                        </svg>
                    </div>
                </NavLink>
                <NavLink to="/map" className="switch">
                    <div className="switch-icon">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 0L17.34 0.03L12 2.1L6 0L0.36 1.9C0.15 1.97 0 2.15 0 2.38V17.5C0 17.78 0.22 18 0.5 18L0.66 17.97L6 15.9L12 18L17.64 16.1C17.85 16.03 18 15.85 18 15.62V0.5C18 0.22 17.78 0 17.5 0ZM7 2.47L11 3.87V15.53L7 14.13V2.47ZM2 3.46L5 2.45V14.15L2 15.31V3.46ZM16 14.54L13 15.55V3.86L16 2.7V14.54Z" fill="#3C3B36"/>
                        </svg>
                    </div>
                </NavLink>
            </div>
        </>
    )
}