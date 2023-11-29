import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container className="justify-content-between">
        <Navbar.Brand as={Link} to="/">
          Phishers' Phlea Phair
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact-us">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/purchase">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/shopping-cart">
              🛒
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
