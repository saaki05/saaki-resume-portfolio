import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Saaketh Gadepalli </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I'm currently pursuing a Bachelor of Science in Computer Science and Engineering at <span className="purple">Chennai Institute of Technology</span>, specializing in full-stack engineering and applied AI/ML for healthcare diagnostics.
            <br />
            I'm Blue-rated on <span className="purple">CodeChef</span> with 1,232+ problems solved, and I've cleared 350+ problems on <span className="purple">LeetCode</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building AI/ML pipelines for healthcare diagnostics
            </li>
            <li className="about-activity">
              <ImPointRight /> Competitive Programming (CodeChef & LeetCode)
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Languages (Mandarin, Tamil)
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Saaketh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
