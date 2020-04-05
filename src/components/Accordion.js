import React, { useContext } from "react";
import { UncontrolledCollapse, Alert, Badge } from "reactstrap";

import Map from "./Map";
import Coordinates from "./Coordinates";
import { MarkersContext } from "../contexts/MarkersContext";

const Accordion = () => {
  const { markers } = useContext(MarkersContext);
  return (
    <>
      <div className="item">
        <Alert
          href="#pablo"
          className="custom-alert"
          id="exampleAccordion1"
          onClick={(e) => e.preventDefault()}
        >
          <h3 className="h3">
            Map <i className="now-ui-icons arrows-1_minimal-down"></i>
          </h3>
        </Alert>
        <UncontrolledCollapse
          role="tabpanel"
          toggler="#exampleAccordion1"
          defaultOpen
        >
          <Map />
        </UncontrolledCollapse>
      </div>
      <div className="item">
        <Alert
          href="#pablo"
          className="custom-alert"
          id="exampleAccordion2"
          onClick={(e) => e.preventDefault()}
        >
          <h3 className="h3">
            Coordinates <Badge color="default">{markers.length}</Badge>
            <i className="now-ui-icons arrows-1_minimal-down"></i>
          </h3>
        </Alert>
        <UncontrolledCollapse role="tabpanel" toggler="#exampleAccordion2">
          <Coordinates />
        </UncontrolledCollapse>
      </div>
    </>
  );
};

export default Accordion;
