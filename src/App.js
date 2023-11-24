import './App.css';
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MapComponent from './components/MapComponent';
import 'leaflet/dist/leaflet.css';
import LocationTracker from './components/LocationTracker';

function App() {

  const [location, setLocation] = useState({
    loaded: true,
    coordinates: { lat: "48.0", lng: "-123.0" }
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          loaded: true,
          coordinates: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });
      });
    }
  }, [location]);

  return (
    <div className="App">
      <h1>Watch From Shore!</h1>
      <LocationTracker location={location} setLocation={setLocation} />
      <div id="leafletmap">
        { location.loaded &&
        <MapContainer 
        key={JSON.stringify([location.coordinates.langitude, location.coordinates.latitude])}
        center={[location.coordinates.lat, location.coordinates.lng]} 
        zoom={13} 
        scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[location.coordinates.langitude, location.coordinates.latitude]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>}
      </div>
    </div>
  );
}

export default App;
