import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view blend-in-out">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi Everyone, I am <span className="purple text-hue-rotate">Samrudh Kishsan P M </span> 
            from <span className="purple text-hue-rotate"> Kerala, India. </span> 
             
            <br />
            I have completed my Bachelor of Technology in Electronics and Communication Engineering from Government College of Engineering, Kannur.
            <br />
            <br />
            In my free time, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 
            </li>
            <li className="about-activity">
              <ImPointRight /> Art 
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

          <p className="text-hue-rotate" style={{ color: "rgb(155 126 172)" }}>
            "The only way to learn to code is to code." 
          </p> 
          <footer className="blockquote-footer">Samrudh Kishsan P M</footer> 
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;