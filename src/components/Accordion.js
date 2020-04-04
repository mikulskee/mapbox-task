import React from "react";
import { UncontrolledCollapse, Alert } from "reactstrap";

import Map from "./Map";
import Coordinates from "./Coordinates";

const Accordion = () => {
  return (
    <>
      <div className="item">
        <Alert
          href="#pablo"
          className="custom-alert"
          id="exampleAccordion1"
          onClick={(e) => e.preventDefault()}
        >
          <h3 className="h3">Map</h3>
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
          <h3 className="h3">Coordinates</h3>
        </Alert>
        <UncontrolledCollapse role="tabpanel" toggler="#exampleAccordion2">
          <Coordinates />
        </UncontrolledCollapse>
      </div>
    </>
  );
};

export default Accordion;
