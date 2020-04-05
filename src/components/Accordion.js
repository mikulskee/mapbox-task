import React, { useContext } from "react";
import { UncontrolledCollapse, Alert, Badge } from "reactstrap";

import Map from "./Map";
import Coordinates from "./Coordinates";
import { MarkersContext } from "../contexts/MarkersContext";

const Accordion = () => {
  const { markers } = useContext(MarkersContext);
  const toogleArrow = (e) => {
    if (e.target.id === "exampleAccordion2" && markers.length === 0) {
      return;
    } else {
      e.target.querySelector(".animation-arrow").classList.toggle("active");
    }
  };
  return (
    <>
      <div className="item">
        <Alert
          href="#pablo"
          className="custom-alert"
          id="exampleAccordion1"
          onClick={(e) => {
            e.preventDefault();
            toogleArrow(e);
          }}
        >
          <h3 className="h3 pointer-events-none">
            Map{" "}
            <strong>
              <i className="now-ui-icons arrows-1_minimal-up animation-arrow"></i>
            </strong>
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
          onClick={(e) => {
            e.preventDefault();
            toogleArrow(e);
          }}
        >
          <h3 className="h3 pointer-events-none">
            Coordinates <Badge color="default">{markers.length}</Badge>
            <strong>
              <i className="now-ui-icons arrows-1_minimal-down animation-arrow"></i>
            </strong>
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
