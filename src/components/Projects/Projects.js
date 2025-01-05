import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section blend-in-out">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple text-hue-rotate">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card text-hue-rotate">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Rock! Paper! Scissors!"
              description="A Dynamic Rock! Paper! Scissors! game using HTML, CSS and Javascript! The game features an intuitive user interface with a cool, animated Play button. Players choose their move, and the game instantly determines the winner with visually appealing results. "
              ghLink="https://github.com/k-ish-san/Rock-Paper-Scissors"
              demoLink="https://k-ish-san.github.io/Rock-Paper-Scissors/"
            />
          </Col>

          <Col md={4} className="project-card text-hue-rotate">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Old Portfolio"
              description="This site showcases my skills as a web developer, featuring a clean, responsive design and interactive elements. With a focus on modern web technologies, it highlights my projects, technical expertise, and passion for coding. Built with HTML, CSS and Javascipt"
              ghLink="https://k-ish-san.github.io/"
              demoLink="https://github.com/k-ish-san/k-ish-san.github.io/"
            />
          </Col>

         

            
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
