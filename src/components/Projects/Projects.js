import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          A selection of projects spanning healthcare AI research and full-stack
          software engineering.
        </p>

        <h1 className="project-heading" style={{ fontSize: "1.75em", paddingTop: "20px" }}>
          Healthcare <strong className="purple">AI & Research</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Leukemia Detection System"
              description="Deep learning model for automated leukemia detection from blood smear images using CNNs, with Grad-CAM visualization integrated to enhance model interpretability and support clinical diagnosis."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Colorectal Polyp Detection"
              description="AI-assisted screening pipeline combining image enhancement with U-Net segmentation to improve early colorectal cancer detection accuracy through optimized preprocessing and feature extraction."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Multi-Cancer Detection with Explainable AI"
              description="Transfer-learning CNN (Keras) for multi-cancer classification from medical images, incorporating Grad-CAM and attention mechanisms for prediction visualization and clinical transparency."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Diabetic Retinopathy Detection"
              description="EfficientNet-based transfer learning model for automated diabetic retinopathy detection from retinal fundus images, with an optimized preprocessing pipeline for improved diagnostic accuracy."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="AI-Based Disease Prediction System"
              description="Scikit-learn/XGBoost machine learning pipeline estimating disease risk from clinical patient data, featuring comparative algorithm analysis, feature engineering, and a Flask REST API for inference."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Medical Report Analysis using LLMs"
              description="Hugging Face transformer pipeline for automated medical report summarization and clinical entity extraction, built for healthcare information systems."
            />
          </Col>
        </Row>

        <h1 className="project-heading" style={{ fontSize: "1.75em", paddingTop: "30px" }}>
          Full-Stack <strong className="purple">& Software</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="SmartReview: Sentiment Analyzer"
              description="Flask/NLP platform that classifies customer reviews, extracts keywords, scores sentiment polarity, and visualizes insights through interactive dashboards and word clouds."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Real-Time Bengaluru Insights Dashboard"
              description="AI-powered smart city dashboard integrating real-time GPS/traffic data and the Maps API with clustering algorithms to flag congestion hotspots."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="E-Commerce Platform with Admin Dashboard"
              description="Full-stack e-commerce system (Node.js, Express, MySQL) with inventory management, cart, secure authentication, role-based access control, and a responsive admin dashboard."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Student Utility Web Application"
              description="Flask + SQLite web app featuring secure authentication, an Anna University GPA calculation engine, and task management with a responsive interface."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Vehicle Fleet Tracking System"
              description="Production-ready vehicle movement tracking system integrating real-time GPS data with a Google Sheets backend via Apps Script; deployed and in active daily use for fleet management."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
