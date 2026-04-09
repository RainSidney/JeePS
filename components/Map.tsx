// components/Map.tsx
'use client';

import Map from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MyMap() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      />
    </div>
  );
}