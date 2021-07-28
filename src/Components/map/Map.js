import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from '../LocationPin/LocationPin';
import './Map.css'



export default function Map ({ zoomLevel, formData})
{
  const center = {
    lat: formData.latitude,
    lng: formData.longitude
  } // our location object from earlier




return (
   <div className="map">
     <h2 className="map-h2">Your Location</h2>
     
     <div className="google-map">
       <GoogleMapReact
         bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
         defaultCenter={center}
         defaultZoom={zoomLevel}
       >
         <LocationPin locationName="Location"/>
       </GoogleMapReact>
      </div>
    </div>
 );
}