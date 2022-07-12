import { Link } from 'react-router-dom'

import './Button.css'

export const Button = (props) => {
    return(
        <Link 
            to={props.url}
            className={["button", props.type].join(" ")}
        >
            {props.text}
        </Link>
    )
}