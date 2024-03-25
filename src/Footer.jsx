import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from "./assets/nav-icon1.svg";
import navIcon2 from "./assets/nav-icon2.svg";
import navIcon3 from "./assets/nav-icon3.svg";
import hotline from "./assets/footer-hotline.svg";
import youtube from "./assets/youtube.svg";
function Footer() {
  return (
    <footer className="text-center text-lg-start footer">
      <section className="d-flex text-center justify-content-between align-items-center p-2">
        <div className="d-flex align-items-center">
          <div className="social-icon me-2 text-column">
            <a href="#"><img src={hotline} alt="Icon" /></a>
          </div>
          <span style={{ color: "white" }}>098-6666-78 | 099-6666-78 | <b>info@asiweiluy.com</b></span>
        </div>
        <div className="d-none d-lg-block" style={{ color: "white" }}>
          <span>Copyright © 2018-2022 Asia Cash Express PLC. All rights reserved.</span>
        </div>
        <div className="social-icon text-column">
          <a href="#"><img src={navIcon1} alt="Icon" /></a>
          <a href="#"><img src={navIcon2} alt="Icon" /></a>
          <a href="#"><img src={navIcon3} alt="Icon" /></a>
          <a href="#"><img src={youtube} alt="Icon" /></a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
