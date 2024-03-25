"use client";

import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Button, Card } from "@tremor/react";
import { RiSearch2Line } from "@remixicon/react";

const containerStyle = {
  width: "600px",
  height: "400px",
};

const center = {
  lat: -33.4489,
  lng: -70.6693,
};

const locations = [
  { lat: -33.4489, lng: -70.6693 }, // Santiago de Chile
  { lat: -33.3989812, lng: -70.5573124 }, // Las Condes
  { lat: -33.61169, lng: -70.57577 }, // Puente Alto
];

export default function Mapa() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB7ywG-ism2sx8azI5y-f2jQ35QLOZZf4g", // Asegúrate de usar tu clave de API real aquí
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds();
    locations.forEach((loc) => {
      bounds.extend(loc);
    });
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const moveToLocation = (lat, lng) => {
    map.panTo({ lat, lng });
    map.setZoom(15); // Puedes ajustar el nivel de zoom según prefieras
  };

  return isLoaded ? (
    <div className="flex gap-6">
      <Card className="w-min">
        <GoogleMap
          mapContainerStyle={{ ...containerStyle, borderRadius: "0.3rem" }}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {locations.map((location, index) => (
            <Marker key={index} position={location} />
          ))}
        </GoogleMap>
      </Card>

      <Button
        variant="secondary"
        icon={RiSearch2Line}
        onClick={() => moveToLocation(-33.3989812, -70.5573124)}
        className=" h-min"
      >
        Inversión 1 (Las Condes)
      </Button>
      <Button
        variant="secondary"
        icon={RiSearch2Line}
        onClick={() => moveToLocation(-33.61169, -70.57577)}
        className=" h-min"
      >
        Inversión 2 (Puente Alto)
      </Button>
    </div>
  ) : (
    <></>
  );
}
