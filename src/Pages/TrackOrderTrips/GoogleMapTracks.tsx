import { DirectionsRenderer, GoogleMap, Marker, Polyline } from '@react-google-maps/api'
import React, { useEffect, useState } from 'react'
import { disconnectSocket, getScoket } from '../../lib/SocketProvider';
import { useParams, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
declare var google: any ;
interface IOrder{
  average_cost: "0.00"
  driver_name: string
  driver_phone: string 
  id: number
  lat_from: string
  lat_to:string
  long_from:string 
  long_to: string
  payment_method: "cash" | "wallet"
  place_from: string
  place_to: string
  status: any  
  trip_duration:any   
  user_name:string
  user_phone:string 
}
const GoogleMapTracks = ({order}:{order:IOrder}) => {

    const [DriverLocations , setDriverLocation] = useState<any>(null)

  
    useEffect(() => {
        calculateRoute();

        const socket = getScoket()
        socket?.emit('join_room' , 'order.'+order.id)
        socket?.on('track_driver', function(data:any){
            setDriverLocation(data);
            
        })

        return ()=>{
          disconnectSocket()
        }
      }, []);
    
      const [directionsResponse, setDirectionsResponse] = useState<any>(null);
    
      async function calculateRoute() {
        const directionsService = new 
        google.maps.DirectionsService();
        const results = await directionsService.route({
          origin: { lat: +order.lat_from, lng: +order.long_from },
          destination: { lat: +order.lat_to, lng: +order.long_to},
          travelMode: google.maps.TravelMode.DRIVING,
        });
        setDirectionsResponse(results);
      }
 
  return (
    <div>
        {!DriverLocations && <div className="loading_driver_location">Waiting To Locate The Driver  </div>}
         <GoogleMap
          center={{lat:+order.lat_from, lng:+order.long_from}}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100vh' }}
        >
         {directionsResponse &&  (
            <DirectionsRenderer directions={directionsResponse} />
          )} 


            {
              DriverLocations && (
                <Marker
                position={{ lat: +DriverLocations?.lat, lng: +DriverLocations?.long }}
                icon={{
                  url: 'Layout/CarImage.jpg',
                  scaledSize: new google.maps.Size(30, 55)
                }}
              />
              )
            }
        </GoogleMap>
    </div>
  )
}

export default GoogleMapTracks


