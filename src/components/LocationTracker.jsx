import {useState} from 'react';

const LocationTracker = (props) => {

    const location = props.location;
    const setLocation = props.setLocation;

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            },
        });
    };

    const onError = (error) => {
        setLocation({
            loaded: true,
            error,
        });
    };

    return (
        <div>
            {!location.loaded ? (
                <button onClick={() => {
                    navigator.geolocation.getCurrentPosition(onSuccess, onError);
                }}>Get Coordinates</button>
            ) : (
                <div>
                    <span>Latitude: {location.coordinates.lat}</span>
                    <span>Longitude: {location.coordinates.lng}</span>
                </div>
            )}
        </div>
    );
};

export default LocationTracker;