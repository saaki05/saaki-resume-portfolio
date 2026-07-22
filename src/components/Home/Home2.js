import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/hi.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <span className="purple"> Computer Science undergraduate </span>
              at <b className="purple">Chennai Institute of Technology</b>, specializing in
              full-stack software engineering and applied
              <b className="purple"> AI/ML for healthcare diagnostics. </b>
              <br />
              <br />
              I build production-grade systems end-to-end — from
              <i>
                <b className="purple"> REST API and database design </b>
              </i>
              to training and deploying explainable deep learning models for medical imaging.
              <br />
              <br />
              My core stack includes
              <i>
                <b className="purple">
                  {" "}
                  Python, Java, C++, and JavaScript,{" "}
                </b>
              </i>
              with backends built on <b className="purple">Flask, Express.js, and Node.js.</b>
              <br />
              <br />
              On the AI/ML side, I work with
              <i>
                <b className="purple">
                  {" "}
                  TensorFlow, PyTorch, and Keras
                </b>
              </i>
              &nbsp; to build CNNs and explainable-AI pipelines using
              <i>
                <b className="purple"> Grad-CAM and attention mechanisms.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/saaketh-cmd"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/saaketh-gadepalli-648a3b325/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/saaketh_rockz/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
