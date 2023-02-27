import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const OpenStreetMap = dynamic(() => import('../../components/OpenStreetMap/OpenStreetMap'), {
  ssr: false
})

const MyMapPage = () => {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude })
      },
      error => {
        console.log(error)
      }
    )
  }, [])

  return (
    <div>
      {location ? (
        <OpenStreetMap latitude={location.latitude} longitude={location.longitude} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default MyMapPage

