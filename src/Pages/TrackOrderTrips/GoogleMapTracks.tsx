import { DirectionsRenderer, GoogleMap, Polyline } from '@react-google-maps/api'
import React, { useEffect, useState } from 'react'
import { getScoket } from '../../lib/SocketProvider';
declare var google: any ;

const GoogleMapTracks = () => {

    const order_id = 1
    useEffect(() => {
        calculateRoute();

        const socket = getScoket()
        socket?.emit('join_room' , 'order.'+order_id)
        socket?.on('track_order', function(data:any){
            console.log(data);
            
        })
      }, []);
    
      const [directionsResponse, setDirectionsResponse] = useState<any>(null);
    
      async function calculateRoute() {
        const directionsService = new 
        google.maps.DirectionsService();
        const results = await directionsService.route({
          origin: { lat: +data.order_start_lat, lng: +data.order_start_long },
          destination: { lat: +data.order_end_lat, lng: +data.order_end_long},
          travelMode: google.maps.TravelMode.DRIVING,
        });
        setDirectionsResponse(results);
      }
  return (
    <div>
         <GoogleMap
          center={{lat:33.49663248278547, lng:36.243118263965755}}
          zoom={18}
          mapContainerStyle={{ width: '100%', height: '100vh' }}
        >
         {directionsResponse &&  (
            <DirectionsRenderer directions={directionsResponse} />
          )} 

         
        </GoogleMap>
    </div>
  )
}

export default GoogleMapTracks



const data =  {
    order_start_lat:33.49663248278547, 
    order_start_long:36.243118263965755,
    order_end_lat:33.49707086334449, 
    order_end_long:36.242823224766994

}