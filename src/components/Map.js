import React, { useState, useEffect, useContext } from "react";
import { MarkersContext } from "../contexts/MarkersContext";
import ReactMapGl, { Marker } from "react-map-gl";

const Map = () => {
  const { markers, setMarkers } = useContext(MarkersContext);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "400px",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  useEffect(() => {
    const success = (pos) => {
      const crd = pos.coords;

      console.log(crd.latitude);
      setViewport({
        width: "100%",
        height: "400px",
        latitude: crd.latitude,
        longitude: crd.longitude,
        zoom: 10,
      });
    };
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const renameKey = (obj, old_key, new_key) => {
    if (old_key !== new_key) {
      Object.defineProperty(
        obj,
        new_key,
        Object.getOwnPropertyDescriptor(obj, old_key)
      );
      delete obj[old_key];
    }
  };

  return (
    <ReactMapGl
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={setViewport}
      onClick={(e) => {
        console.log(e);
        const obj = { ...e.lngLat, id: e.timeStamp };
        renameKey(obj, "0", "long");
        renameKey(obj, "1", "lat");
        setMarkers([...markers, obj]);
        console.log(markers);
      }}
    >
      {markers.map((marker) => (
        <Marker key={marker.id} latitude={marker.lat} longitude={marker.long}>
          <div>place</div>
        </Marker>
      ))}
    </ReactMapGl>
  );
};

export default Map;
