/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import { MarkersContext } from "../contexts/MarkersContext";
import { MapContext } from "../contexts/MapContext";
import ReactMapGl, { Marker } from "react-map-gl";

const Map = () => {
  const { markers, setMarkers } = useContext(MarkersContext);
  const { viewport, setViewport } = useContext(MapContext);
  // const [viewport, setViewport] = useState({
  //   width: "100%",
  //   height: "50vh",
  //   latitude: 37.7577,
  //   longitude: -122.4376,
  //   zoom: 8,
  // });

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
        >
          <div className="marker">
            <h6 className="h6">{markers.indexOf(marker) + 1}</h6>
            <i className="now-ui-icons location_pin"></i>
          </div>
        </Marker>
      ))}
    </ReactMapGl>
  );
};

export default Map;
