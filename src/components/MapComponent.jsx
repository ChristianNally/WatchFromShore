// React Component for the Map leaflet API

import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const MapComponent = (props) => {

    const map = L.map('map', {
        center: [0, 0],
        zoom: 2,
        minZoom: 2,
        maxZoom: 18,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        dragging: false,
        touchZoom: false,
        keyboard: false,
        boxZoom: false,
        tap: false,
        tapTolerance: 15,
        bounceAtZoomLimits: false,
        inertia: false,
        inertiaDeceleration: 3000,
        inertiaMaxSpeed: 1500,
        worldCopyJump: false,
        maxBoundsViscosity: 1.0,
        fadeAnimation: false,
        markerZoomAnimation: false,
        transform3DLimit: 8388608,
        zoomAnimation: false,
        zoomAnimationThreshold: 4,
        closePopupOnClick: true,
        trackResize: true,
        keyboardPanDelta: 80,
        worldCopyJump: false,
        crs: L.CRS.EPSG3857,
        maxBounds: L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180))
    });   

    return (
        <MapContainer center={[0, 0]} zoom={2} >
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    );
};

export default MapComponent;

