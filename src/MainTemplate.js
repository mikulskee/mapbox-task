import React from "react";
import Accordion from "./components/Accordion";
import MarkersContextProvider from "./contexts/MarkersContext";
import MapContextProvider from "./contexts/MapContext";

const MainTemplate = () => {
  return (
    <MapContextProvider>
      <MarkersContextProvider>
        <h1 className="h1 text-align-center"> Mapbox-task</h1>
        <Accordion />
      </MarkersContextProvider>
    </MapContextProvider>
  );
};

export default MainTemplate;
