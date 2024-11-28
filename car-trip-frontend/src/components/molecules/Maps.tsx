import { RidesContext } from '../../context/RidesContext';
import React, {useEffect, useState, FunctionComponent, useContext} from 'react';
import { MapContainer, TileLayer, Marker, useMap} from 'react-leaflet';
import '../../index.css'

interface ChangeViewProps{
  coords?: [[number, number],[number, number]];
}

const ChangeView: FunctionComponent<ChangeViewProps> = ({ coords }) => {
  const map = useMap();

  useEffect(() => {
    if (map) {
      map.fitBounds((coords || [[51.505, -0.09]]), { padding: [50, 50] }); // Altere para `map.setView(coords, zoom)` se preferir movimento instantâneo
    }
  }, [coords, map]);
  return null;
};


const Maps = ()=>{
  const {ridesOptions} = useContext(RidesContext);
  return (
    <div className="col-span-3 border flex justify-center items-center">
      <MapContainer center={[-23.537451, -46.648062]} zoom={7} scrollWheelZoom={true} className='w-[100vw] h-full z-[2]'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       { ridesOptions?.origin && <Marker position={[ridesOptions.origin.latitude, ridesOptions.origin.longitude]}/>}
       {ridesOptions?.destination && <Marker 
       position={[ridesOptions.destination.latitude, ridesOptions.destination.longitude]}/>}
        {(ridesOptions?.origin && ridesOptions.destination) && <ChangeView coords={[[ridesOptions.origin.latitude, ridesOptions.origin.longitude],[ridesOptions.destination.latitude, ridesOptions.destination.longitude] ]}/>}
      </MapContainer>
    </div>
  )
}

export default Maps;