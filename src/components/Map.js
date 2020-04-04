import React, { useState } from "react";
import ReactMapGl from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "400px",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <ReactMapGl
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={setViewport}
    />
  );
};

export default Map;
