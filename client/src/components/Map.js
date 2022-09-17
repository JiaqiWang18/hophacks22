import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker
} from '@react-google-maps/api';
import { useState } from 'react';

const Map = ({ data }) => {
  const [selected, setSelected] = useState({});

  const onSelect = item => {
    setSelected(item);
  };

  const mapStyles = {
    height: '100vh',
    width: '100%'
  };

  const defaultCenter = {
    lat: 39.3274189,
    lng: -76.6223143
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyA9GG_FwcMPB1TOXIRpmVJojNHLPf-QZeo">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        {data.map(item => {
          return (
            <Marker
              key={item.name}
              position={{
                lat: parseFloat(item.lat),
                lng: parseFloat(item.long)
              }}
              onClick={() => onSelect(item)}
            />
          );
        })}
        {selected.lat && selected.long && (
          <InfoWindow
            position={{
              lat: parseFloat(selected.lat),
              lng: parseFloat(selected.long)
            }}
            clickable={true}
            onCloseClick={() => setSelected({})}>
            <h4>{selected.name}</h4>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
