import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import ShoppingCartIcon from "../images/fish-in-shopping-cart.png"; // Path to your custom icon
import "../App.css"; // Ensure this is the path to your stylesheet

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
              <img
                src={ShoppingCartIcon}
                alt="Shopping Cart"
                className="nav-icon"
                style={{ width: "36px", height: "24px"}}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
