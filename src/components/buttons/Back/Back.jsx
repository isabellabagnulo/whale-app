import { Link } from "react-router-dom"

export const Back = (props) => {
    return (
        <Link to={props.url} className="back" >
            <p>back</p>
        </Link>
    )
}