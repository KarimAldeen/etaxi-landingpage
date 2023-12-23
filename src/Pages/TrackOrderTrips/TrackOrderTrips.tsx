import React from 'react'
import { useJsApiLoader } from '@react-google-maps/api';
import GoogleMapTracks from './GoogleMapTracks';
import { useSearchParams } from 'react-router-dom';
import { useGetOrder } from '../../api/order';

function TrackOrderTrips() {
  const [searchParams]= useSearchParams()
  const order_id = (searchParams.get('order_id'));
    const {data , isLoading}  = useGetOrder({order_id})
    console.log(data);
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyDZrGqtL1iBm9ZOTdfT-vW-3wpV-LO608M',
        libraries: ['places'],
      });

      if(!isLoaded ||  isLoading){
        return <>Loading ... </>
      }

      if(!order_id){
        return <>
          There Is No  Trip With This Id 
        </>
      }
      if(data.status == 'complete'){
        return <>
          The Order Was Complete Thank For Track Order
        </>
      }
  return (
    <GoogleMapTracks  order={data}/>
  )
}

export default TrackOrderTrips