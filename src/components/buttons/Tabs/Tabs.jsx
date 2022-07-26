import { NavLink } from "react-router-dom"

// import { TabController } from "../TabController/TabController"

import './Tabs.css'

export const Tabs = () => {
    // const [active, setActive] = useState(null)
    return(
        <div className="tabs hide-on-desktop">
            <NavLink to="/">Libri</NavLink>
            <NavLink to="/map">Locali</NavLink>
        </div>
    )
}