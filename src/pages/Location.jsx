import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { Button } from "../components/buttons/Button/Button"

import './Location.css'

export const Location = () => {
    const [location, setLocation] = useState()
    const params = useParams()

    useEffect(() => {
        const getLocation = async () => {
            const response = await fetch(`http://localhost:1337/api/locations/${params.id}?populate=*`)
            const {data} = await response.json()

            setLocation(data)
        }

        return getLocation
    }, [])

    const availableBooks = "N"

    return (
        <main>
            <h1>Pagina single location</h1>
            {location &&
                <div className="location">
                    <div className="location-cover" style={{
                        backgroundImage: "url(" + `http://localhost:1337${location.attributes.cover.data.attributes.url}` + ")",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}>
                        <div className="overlay">
                            <h1>{location.attributes.title}</h1>
                            <p>{location.attributes.address}</p>
                            <p><span className="text-bold">{availableBooks}</span> libri disponibili</p>
                        </div>
                    </div>
                </div>
            }
            
        </main>
    )
}