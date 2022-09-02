import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import './Map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibGFka2E2IiwiYSI6ImNsNzBocHp3dzBlaWszcXF5bTBybnBkYXcifQ.rQ7Y57HYxsd1x-lpXKdwrA';


const Map = ({ setCityName }) => {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(35.4200);
  const [lat, setLat] = useState(36.7000);
  const [zoom, setZoom] = useState(7.2);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });


    map.current.scrollZoom.disable();
    map.current.doubleClickZoom.disable();
    map.current.on('load', () => {
      map.current.addSource('locations', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'properties': { 'name': 'mersin' },
              'geometry': {
                'type': 'Point',
                'coordinates': [34.641479, 36.812103]
              }
            },
            {
              'type': 'Feature',
              'properties': { 'name': 'hatay' },
              'geometry': {
                'type': 'Point',
                'coordinates': [36.166668, 36.200001]
              }
            },
            {
              'type': 'Feature',
              'properties': { 'name': 'adana' },
              'geometry': {
                'type': 'Point',
                'coordinates': [35.321335, 37.000000]
              }
            }
          ]
        }
      })
      map.current.addLayer({
        'id': 'dots',
        'type': 'circle',
        'source': 'locations',
        'paint': {
          'circle-color': 'orange',
          'circle-radius': 3.7,
          'circle-stroke-color': '#ffffff',
          'circle-stroke-width': 3
        }
      })
      map.current.on('click', 'dots', (e) => {
        const city = e.features[0].properties.name;
        setCityName(city);
      })
    })
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });


  return (
    <div ref={mapContainer} id="map" className="map-container" />
  );
}

export default Map;
