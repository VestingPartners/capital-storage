// @ts-nocheck

"use client";

import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Button } from "@tremor/react";
import Image from "next/image";

const containerStyle = {
  width: "600px",
  height: "400px",
};

const center = {
  lat: 40.022961,
  lng: -105.258313,
};

const locations = [
  { lat: 40.019029202242116, lng: -105.2626646739601 }, // Folsom
  { lat: 40.026993950936536, lng: -105.25426364327721 }, // Red Rocks Limited
];

export default function Mapa({ data }) {
  const defaultProject =
    data[0]["Total Invertido Folsom"] > 0 ? "Folsom" : "30th Street";
  const [selectedProject, setSelectedProject] = useState(defaultProject);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB7ywG-ism2sx8azI5y-f2jQ35QLOZZf4g",
  });

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    locations.forEach((loc) => {
      bounds.extend(loc);
    });
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const moveToLocation = (lat, lng, project) => {
    map?.panTo({ lat, lng });
    map?.setZoom(15);
    setSelectedProject(project);
  };

  return isLoaded ? (
    <div className="flex flex-col gap-6 w-full">
      <div className="w-full h-fit p-4 rounded-lg bg-white shadow-sm border border-black/5">
        <GoogleMap
          mapContainerStyle={{
            ...containerStyle,
            borderRadius: "0.3rem",
            width: "100%",
          }}
          center={center}
          zoom={0.8}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {locations.map((location, index) => (
            <Marker key={index} position={location} />
          ))}
        </GoogleMap>
      </div>

      <div className="w-full bg-white shadow-sm border border-black/5 rounded-lg p-4">
        <div className="flex justify-between items-center  mb-4">
          {data[0]["Total Invertido Folsom"] != 0 && (
            <Button
              variant={selectedProject === "Folsom" ? "primary" : "secondary"}
              onClick={() =>
                moveToLocation(locations[0].lat, locations[0].lng, "Folsom")
              }
            >
              Folsom
            </Button>
          )}

          {data[0]["Total Invertido 30 Street"] != 0 && (
            <Button
              variant={
                selectedProject === "30th Street" ? "primary" : "secondary"
              }
              onClick={() =>
                moveToLocation(
                  locations[1].lat,
                  locations[1].lng,
                  "30th Street"
                )
              }
            >
              30th Street
            </Button>
          )}
        </div>

        <div className="flex gap-8">
          {selectedProject === "Folsom" && (
            <div className="w-full sm:flex">
              <Image
                src="/Folsom Street.jpg"
                width={1200} // Aumentar el ancho de la imagen
                height={800} // Aumentar la altura de la imagen
                alt="30th Street"
                className="rounded-lg  w-full lg:w-56 h-56"
              />
              <div className="flex flex-col justify-start items-start py-2 px-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Snapshot Fondo Folsom
                </h2>
                <p className="text-lg mb-2">
                  <span className="font-semibold">Tipo de proyecto: </span>
                  Multifamily
                </p>
                <p className="text-lg mb-2">
                  <span className="font-semibold">Unidades estimadas: </span>227
                </p>
                <p className="text-lg mb-2">
                  <span className="font-semibold">Equity total:</span> USD
                  $10.200.000
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Entrega Estimada: </span>Marzo
                  2028
                </p>
              </div>
            </div>
          )}

          {selectedProject === "30th Street" && (
            <div className="w-full sm:flex">
              <Image
                src="/30 street.jpg"
                width={1200} // Aumentar el ancho de la imagen
                height={800} // Aumentar la altura de la imagen
                alt="30th Street"
                className="rounded-lg w-full lg:w-56 h-56" // Agregar clases para ajustar el tamaño
              />

              <div className="flex flex-col justify-start items-start py-2 px-6">
                <h2 className="text-2xl font-semibold mb-4">
                  Snapshot Fondo 30th Street
                </h2>
                <p className="text-lg mb-2">
                  <span className="font-semibold">Tipo de proyecto: </span>
                  Multifamily
                </p>
                <p className="text-lg mb-2">
                  <span className="font-semibold">Unidades estimadas: </span>143
                </p>
                <p className="text-lg mb-2">
                  <span className="font-semibold">Equity total:</span> USD
                  $3.500.000
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Entrega Estimada:</span>{" "}
                  Noviembre 2027
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
