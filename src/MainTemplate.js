import React from "react";
import Accordion from "./components/Accordion";
import MarkersContextProvider from "./contexts/MarkersContext";

const MainTemplate = () => {
  return (
    <MarkersContextProvider>
      <h1 className="h1 text-align-center"> Mapbox-task</h1>
      <Accordion />
    </MarkersContextProvider>
  );
};

export default MainTemplate;
