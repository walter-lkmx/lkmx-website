import React from 'react';
import { useEffect, useState, useRef, useCallback } from "react";
import { Column } from '@lkmx/flare-react';
import { useRouter } from 'next/router';

let Globe = () => null;
if (typeof window !== 'undefined') Globe = require('react-globe.gl').default;

export default function DiscoveryPage() {

  const _a = React.useState(null),
    globeFile = _a[0],
    setGlobeFile = _a[1];
  const router = useRouter();
  const _b = React.useState('/texture10.jpg'),
    imageUrl = _b[0],
    setImageUrl = _b[1];
  const globeRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const linkRef = React.useRef(null);

  const lkmxLocation = {
    latitude:  31.8658887,
    longitude: -116.6029835,
  }
  const initRotation = {
    latitude: 25.7741728,
    longitude: -80.19362,
  }
  const destinations = [
    {
      name: 'Tijuana',
      latitude: 32.5010188,
      longitude: -116.964662,
      country: 'MX',
      state: 'Baja California',
    },
    {
      name: 'Hermosillo',
      latitude: 29.0948207,
      longitude: -110.9692202,
      country: 'MX',
      state: 'Sonora',
    },
    {
      name: 'New York County',
      latitude: 40.7127281,
      longitude: -74.0060152,
      country: 'US',
      state: 'New York',
    },
    {
      name: 'Los Angeles',
      latitude: 34.0536909,
      longitude: -118.242766,
      country: 'US',
      state: 'California',
    },
    {
      name: 'San Francisco',
      latitude: 37.7790262,
      longitude: -122.419906,
      country: 'US',
      state: 'California',
    },
    {
      name: 'San Antonio',
      latitude: 29.4246002,
      longitude: -98.4951405,
      country: 'US',
      state: 'Texas',
    },
    {
      name: 'Detroit',
      latitude: 42.3315509,
      longitude: -83.0466403,
      country: 'US',
      state: 'Michigan',
    },
    {
      name: 'Miami',
      latitude: 25.7741728,
      longitude: -80.19362,
      country: 'US',
      state: 'Florida',
    },
    {
      name: 'Mexico City',
      latitude: 19.4326296,
      longitude: -99.1331785,
      country: 'MX',
    },
    {
      name: 'Toronto',
      latitude: 43.6534817,
      longitude: -79.3839347,
      country: 'CA',
      state: 'Ontario',
    },
    {
      name: 'Singapore',
      latitude: 1.2899175,
      longitude: 103.8519072,
      country: 'SG',
    },

    {
      name: 'Tokyo',
      latitude: 35.6828387,
      longitude: 139.7594549,
      country: 'JP',
    },
    {
      name: 'Barcelona',
      latitude: 41.3828939,
      longitude: 2.1774322,
      country: 'ES',
      state: 'Catalonia',
    },
    {
      "name": "Medellín",
      "latitude": 6.2443382,
      "longitude": -75.573553,
      "country": "CO",
      "state": "Antioquia"
    },
  ];

  if (globeRef.current !== null) {
    const scene = globeRef.current.scene()
    // scene.children[1].intensity = 0
    // scene.children[2].intensity = 0
    scene.rotation.y += 0.01;
    // console.log(scene)
}

  useEffect(() => {
   

    globeRef.current.controls().autoRotate = true;
    globeRef.current.controls().autoRotateSpeed = 2;
    globeRef.current.pointOfView({ lat: initRotation.latitude, lng: initRotation.longitude, altitude: 2}, 5000); //1.61
    globeRef.current.controls().enableZoom = false
    //globeRef.current.controls().minPolarAngle = globeRef.current.controls.maxPolarAngle = Math.PI / 2.3;
    //globeRef.current.controls().minPolarAngle = globeRef.current.controls.maxPolarAngle = Math.PI / 2.3;
    // globeRef.current.controls().maxAzimuthAngle = Math.PI / 2;  
    // globeRef.current.controls().minAzimuthAngle = Math.PI / 4;
    globeRef.current.controls().enableRotate = false


    // const MAP_CENTER = { lat: destinations[2].latitude, lng: destinations[2].longitude, altitude: 2.8 };
    // globeRef.current
    //     .pointOfView(MAP_CENTER, 0)
  }, [globeRef]);


  const arcsData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(function (
    currElement,
    index
  ) {
    return {
      startLat: lkmxLocation.latitude,
      startLng: lkmxLocation.longitude,
      endLat: destinations[index].latitude,
      endLng: destinations[index].longitude,
      color: [['#FF0049'][0], ['#00D0F6'][0]],
      
    };
  });

  return (
          <Globe
            ref={globeRef}
            width={800}
            height={800}
            backgroundColor={'#FCFCFD00'}
            globeImageUrl={imageUrl}
            arcColor={'color'}
            arcsData={arcsData}
            arcDashGap={0.6}
            arcDashLength={1}
            arcDashAnimateTime={4000 + 500}
            arcStroke = {0.5}
            arcCurveResolution = {200}
            rendererConfig={{ preserveDrawingBuffer: true}}
            showGlobe = {true}
            atmosphereColor= {'#D0CDC8'}

          />
  );
}
