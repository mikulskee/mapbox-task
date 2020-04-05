import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { MarkersContext } from "../contexts/MarkersContext";
import { MapContext } from "../contexts/MapContext";

const Coordinates = () => {
  const { markers, setMarkers } = useContext(MarkersContext);
  const { setViewport } = useContext(MapContext);

  const handleRemove = (id) => {
    const newArrayOfMarkers = markers.filter((marker) => marker.id !== id);
    setMarkers(newArrayOfMarkers);
  };
  const handleNavigation = (lat, long) => {
    document.getElementById("exampleAccordion1").scrollIntoView({
      behavior: "smooth",
    });
    setViewport({
      width: "100%",
      height: "50vh",
      latitude: parseFloat(lat),
      longitude: parseFloat(long),
      zoom: 15,
    });
  };

  return (
    <ListGroup>
      {markers.map((marker) => (
        <ListGroupItem key={marker.id} className="coordinates" id={marker.id}>
          <strong>{markers.indexOf(marker) + 1}.</strong> Lat:{" "}
          {marker.lat.toFixed(4)} Long: {marker.long.toFixed(4)}
          <button
            className="btn btn-success btn-round btn-sm"
            type="button"
            onClick={() =>
              handleNavigation(marker.lat.toFixed(4), marker.long.toFixed(4))
            }
          >
            <i className="now-ui-icons business_globe"></i> Show Me!
          </button>
          <button
            className="btn btn-primary btn-icon btn-round btn-sm"
            type="button"
            onClick={() => handleRemove(marker.id)}
          >
            <i className="now-ui-icons ui-1_simple-remove danger"></i>
          </button>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Coordinates;
