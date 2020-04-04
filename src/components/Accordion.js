import React from "react";
import { UncontrolledCollapse, Alert } from "reactstrap";

import Map from "./Map";

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
          <p className="mb-3">
            Donec at ipsum dignissim, rutrum turpis scelerisque, tristique
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Vivamus nec dui turpis. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </p>
        </UncontrolledCollapse>
      </div>
    </>
  );
};

export default Accordion;
