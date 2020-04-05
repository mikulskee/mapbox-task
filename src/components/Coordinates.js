import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { MarkersContext } from "../contexts/MarkersContext";

const Coordinates = () => {
  const { markers, setMarkers } = useContext(MarkersContext);

  const handleRemove = (id) => {
    const newArrayOfMarkers = markers.filter((marker) => marker.id !== id);
    setMarkers(newArrayOfMarkers);
  };

  return (
    <ListGroup>
      {markers.map((marker) => (
        <ListGroupItem key={marker.id} className="coordinates" id={marker.id}>
          <strong>{markers.indexOf(marker) + 1}.</strong> Lat:{" "}
          {marker.lat.toFixed(4)} Long: {marker.long.toFixed(4)}
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
