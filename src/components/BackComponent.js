import React from "react";
import { Row, Col, Button } from "reactstrap";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackComponent = () => {
  return (
    <Row className="mb-2">
      <Col>
        <a href="/">
          <Button color="dark">
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Button>
        </a>
      </Col>
    </Row>
  );
};

export default BackComponent;
