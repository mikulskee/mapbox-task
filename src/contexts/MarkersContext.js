import React, { createContext, useState } from "react";
export const MarkersContext = createContext();
const MarkersContextProvider = (props) => {
  const [markers, setMarkers] = useState([]);

  return (
    <MarkersContext.Provider
      value={{
        markers,
        setMarkers,
      }}
    >
      {props.children}
    </MarkersContext.Provider>
  );
};

export default MarkersContextProvider;
