/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import { MarkersContext } from "../contexts/MarkersContext";
import { MapContext } from "../contexts/MapContext";
import ReactMapGl, { Marker } from "react-map-gl";

const Map = () => {
  const { markers, setMarkers } = useContext(MarkersContext);
  const { viewport, setViewport } = useContext(MapContext);

  useEffect(() => {
    const success = (pos) => {
      const crd = pos.coords;
      setViewport({
        width: "100%",
        height: "50vh",
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

  const handleDragEnd = (e) => {
    const array = [...markers];

    const dragableElement = array.filter(
      (marker) => marker.id === parseFloat(e.target.id)
    )[0];
    dragableElement.long = e.lngLat[0];
    dragableElement.lat = e.lngLat[1];

    const id = array.findIndex(
      (marker) => marker.id === parseFloat(e.target.id)
    );

    array[id] = dragableElement;

    setMarkers(array);
  };

  return (
    <ReactMapGl
      className="map-container"
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={setViewport}
      onClick={(e) => {
        const obj = { ...e.lngLat, id: e.timeStamp };
        renameKey(obj, "0", "long");
        renameKey(obj, "1", "lat");
        setMarkers([...markers, obj]);
      }}
    >
      {markers.map((marker) => (
        <Marker
          className={`marker-${marker.id}`}
          key={marker.id}
          latitude={marker.lat}
          longitude={marker.long}
          draggable={true}
          onDragEnd={handleDragEnd}
        >
          <div className="marker">
            <h6 className="h6">{markers.indexOf(marker) + 1}</h6>
            <i id={marker.id} className="now-ui-icons location_pin"></i>
          </div>
        </Marker>
      ))}
    </ReactMapGl>
  );
};

export default Map;
