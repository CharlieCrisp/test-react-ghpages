import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../img/logo.png";

const navbarNoBanner = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img alt="Woodland Venture Logo" className="d-inline-block align-top" src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#schools">Schools</NavDropdown.Item>
                        <NavDropdown.Item href="#projects">Projects</NavDropdown.Item>
                        <NavDropdown.Item href="#corporate">Corporate</NavDropdown.Item>
                        <NavDropdown.Item href="#groups">Groups</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/projects">All projects</NavDropdown.Item>
                        <NavDropdown.Item href="/projects/shelter">Shelter project</NavDropdown.Item>
                        <NavDropdown.Item href="/projects/sanctuary">The Sanctuary</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text> 
                        Email: <a href="mailto:info@woodlandventure.co.uk">info@woodlandventure.co.uk</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default navbarNoBanner;