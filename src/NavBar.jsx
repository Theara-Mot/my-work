import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button,NavDropdown } from 'react-bootstrap';
import { useState, useEffect } from "react";
import logo from './assets/logo.svg';
import icon1 from './assets/nav-icon1.svg';
import icon2 from './assets/nav-icon2.svg';
import icon3 from './assets/nav-icon3.svg';
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar style={{ backgroundColor: '#01aae0' }} variant="dark" expand="lg" className={scrolled ? "scrolled" : ""} >
            <Container>
            <Navbar.Brand href="/">
                <img width={40} height={40} src={logo} alt="Logo" />
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#service" className={activeLink === 'service' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('service')}>Service</Nav.Link>
                    <Nav.Link href="#promotion" className={activeLink === 'promotion' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('promotion')}>Promotions</Nav.Link>
                    <Nav.Link href="#servicepoint">Service Point</Nav.Link>
                    <Nav.Link href="#career">Career</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown title="Language" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Khmer</NavDropdown.Item>
                    </NavDropdown>
                    <Button className='download-button'> Download Now</Button>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}
