import React from 'react'
import { useJsApiLoader } from '@react-google-maps/api';
import GoogleMapTracks from './GoogleMapTracks';

function TrackOrderTrips() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyDZrGqtL1iBm9ZOTdfT-vW-3wpV-LO608M',
        libraries: ['places'],
      });

      if(!isLoaded){
        return <>Loading ... </>
      }
  return (
    <GoogleMapTracks/>
  )
}

export default TrackOrderTrips