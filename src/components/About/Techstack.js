import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,

  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiHtml5,
  SiCss3,

  
} from "react-icons/si";


function Techstack() {
  return (
    <Row className="text-hue-rotate" style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <p id="skill">HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <p id="skill">CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p id="skill">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p id="skill">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <p id="skill">C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p id="skill">React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p id="skill">Node.js</p>
      </Col>
  
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p id="skill">Git</p>
      </Col>
     
      
    </Row>
  );
}

export default Techstack;
