import React from "react";
import navIcon1 from "./assets/nav-icon1.svg";
import navIcon2 from "./assets/nav-icon2.svg";
import navIcon3 from "./assets/nav-icon3.svg";
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col xs="auto">
            <p className="align-self-start">&copy; 2024 Your Company. All rights reserved.</p>
          </Col>
          <Col xs="auto">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
