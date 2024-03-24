import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button,NavDropdown } from 'react-bootstrap';
import { useState, useEffect } from "react";
import logo from './assets/react.svg'
import icon1 from './assets/nav-icon1.svg';
import icon2 from './assets/nav-icon2.svg';
import icon3 from './assets/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { ArrowDownCircle } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [t,i18n] = useTranslation("global");
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

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
      };      

    return (
        // <Navbar style={{ backgroundColor: '#01aae0' }} variant="dark" expand="lg" className={scrolled ? "scrolled" : ""} >
        <Navbar variant="dark" expand="lg" className={scrolled ? "scrolled" : ""} >
            <Container>
            <Navbar.Brand href="/">
                <img className='navLogo' width={40} height={40} src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{t("header.home")}</Nav.Link>
                    <Nav.Link href="#service" className={activeLink === 'service' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('service')}>{t("header.services")}</Nav.Link>
                    <Nav.Link href="#promotion" className={activeLink === 'promotion' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('promotion')}>{t("header.promotions")}</Nav.Link>
                    <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>{t("header.about")}</Nav.Link>
                    <Nav.Link href="#career" className={activeLink === 'career' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('career')}>{t("header.career")}</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown title={t("header.language")} id="collapsible-nav-dropdown"> {/* Display Selected Language */}
                        <NavDropdown.Item onClick={()=>handleChangeLanguage("en")} >{t("header.english")}</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>handleChangeLanguage("kh")}>{t("header.khmer")}</NavDropdown.Item>
                    </NavDropdown>
                    <Button className='download-button'>
                    {t("header.download_now")}&nbsp; <span></span> <ArrowDownCircle className='arrow-down-circle' size={25} />
                    </Button>
                </Nav>
                
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}
