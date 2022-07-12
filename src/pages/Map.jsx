import {memo, useState, useCallback, useEffect } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'
import { useNavigate } from "react-router-dom";

import { Tabs } from '../components/buttons/Tabs/Tabs';
import { Button } from '../components/buttons/Button/Button';

const containerStyle = {
  width: '100%',
  height: '100vh'
}

const center = {
  lat: 45.46543486718908,
  lng: 9.19312637083094
}




export const Map = () => {

    const [locations, setLocations] = useState([])
    useEffect(() => {
        const getLocations = async () => {
            const response = await fetch('http://localhost:1337/api/locations?populate=*')
            const {data} = await response.json()
            setLocations(data)
        }

        return getLocations
    }, [])

  let navigate = useNavigate()

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCy24CZmnQmPDP8srFd2ZejiZ6Lq3wLZuA'
  })

  const [map, setMap] = useState(null)
  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])
  console.log('prov')

  const goToLocation = (loc) => {
    navigate(`/location/${loc.id}`)
  }

  // return(
  //   <main>
  //     <Tabs />
  //   </main>
  // )

  return isLoaded && locations.length ? (
    <div className='mappa'>
      <Tabs />

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onUnmount={onUnmount}
      >
        {locations.map(location =>
          <Marker
            key={location.id}
            onClick={() => goToLocation(location)}
            position={{
                lat: location.attributes.latitude,
                lng: location.attributes.longitude
            }} />
        )}
      </GoogleMap>

      <Button
        url="/locations"
        type=" default"
        text="Lista dei locali"
      />
    </div>
  ) : <></>
}

export default memo(Map)