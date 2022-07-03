import { useEffect, useState } from 'react'
import { LocationCard } from '../components/LocationCard/LocationCard'
import { ENDPOINT } from '../libs/const'

export const Locations = () => {
    const [locations, setLocations] = useState([])
    useEffect(() => {
        const getLocations = async () => {
            const response = await fetch(ENDPOINT("locations"))
            const {data} = await response.json()
            setLocations(data)
        }

        return getLocations
    }, [])

    return (
        <div>
            <h1>Pagina locations</h1>
            {locations.map(location => 
                <LocationCard key={location.id} location={location}/>
            )}
        </div>
    )
}