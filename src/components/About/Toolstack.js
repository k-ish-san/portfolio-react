import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiFigma
} from "react-icons/si";

function Toolstack() {
  return (
    <Row className="text-hue-rotate" style={{ justifyContent: "center", paddingBottom: "50px" }}>
    
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p id="skill">VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p id="skill">Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <p id="skill">Figma</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
