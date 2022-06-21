import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.png";
import chat from "../../Assets/Projects/chat.png";
import ecomm from "../../Assets/Projects/ecomm.png";
import gmail from "../../Assets/Projects/gmail.png";
import DemoCredential from "./DemoCredential";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <h1 className="project-heading">
          Demo <strong className="purple">Credentials </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <DemoCredential
              title="User Credential"
              mail="user123@gmail.com"
              pass="user@123"
            />
          </Col>

          <Col md={6} className="project-card">
            <DemoCredential
              title="Admin Credential"
              mail="admin@gmail.com"
              pass="admin@123"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomm}
              isBlog={false}
              title="Ecommerce"
              description="A MERN stack application e-commerce site that also uses Stripe payments"
              link="https://meek-quokka-5b0e26.netlify.app"
              client="https://github.com/KamalRenu/shopy-ecommerce-react"
              server="https://github.com/KamalRenu/shopy-api"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat app"
              description="A simple chat Application using MERN stack (MongoDB, Express JS, Node JS) and Socket.io for real timwe chatting."
              link="https://harmonious-sunflower-b9cc12.netlify.app"
              client="https://github.com/KamalRenu/chatapp-frontend"
              server="https://github.com/KamalRenu/chatapp-backent"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gmail}
              isBlog={false}
              title="Mail Application"
              description="Mail app is the MERN Stack application using nodemailer for send mail."
              link="https://classy-paprenjak-0a2cf3.netlify.app"
              client="https://github.com/KamalRenu/mail-app"
              server="https://github.com/KamalRenu/gmailclone-backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog app"
              description="A responsive blog application using the MERN stack (MongoDB, Express Js, React Js, and Node Js)"
              link="https://calm-profiterole-5e6a96.netlify.app"
              client="https://github.com/KamalRenu/blog-app-frontend"
              server="https://github.com/KamalRenu/blog-app-backend"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;