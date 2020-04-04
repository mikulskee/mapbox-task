import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { MarkersContext } from "../contexts/MarkersContext";

const Coordinates = () => {
  const { markers } = useContext(MarkersContext);

  return (
    <ListGroup>
      {markers.map((marker) => (
        <ListGroupItem key={marker.id}>
          Lat: {marker.lat.toFixed(4)} Long: {marker.long.toFixed(4)}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Coordinates;
