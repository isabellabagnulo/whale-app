import { Map, Marker, ZoomControl } from 'pigeon-maps'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ENDPOINT } from '../libs/const'
import { Tabs } from '../components/buttons/Tabs/Tabs'
import { Switch } from '../components/buttons/Switch/Switch'

export function MyMap() {
  const [center, setCenter] = useState([45.4646, 9.1885])
  const [zoom, setZoom] = useState(12)
  const navigate = useNavigate()

  const [color, setColor] = useState("rgba(55, 114, 255, 0.7)")
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
    <main className="map">
      <Tabs />
      <Switch />
      <Map
        className="maps"
        center={center} 
        zoom={zoom} 
        onBoundsChanged={({ center, zoom }) => { 
          setCenter(center) 
          setZoom(zoom) 
        }}>

        {locations.map((location, index) => 
            <Marker
              key={index}
              width={30}
              anchor={[location.attributes.latitude, location.attributes.longitude]} 
              color={color} 
              onClick={() => {
                setColor("rgba(55, 114, 255, 1)")
                navigate(`/location/${location.id}`)
              }}
              onMouseEnter= {() => setColor("rgba(55, 114, 255, 1)")}
            />
        )}
        
        
        <ZoomControl />

      </Map>
    </main>
  )
}