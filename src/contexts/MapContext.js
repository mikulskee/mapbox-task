import React, { createContext, useState } from "react";
export const MapContext = createContext();
const MapContextProvider = (props) => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "50vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <MapContext.Provider
      value={{
        viewport,
        setViewport,
      }}
    >
      {props.children}
    </MapContext.Provider>
  );
};

export default MapContextProvider;
