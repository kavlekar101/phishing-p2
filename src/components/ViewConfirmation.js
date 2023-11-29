import React, { useContext } from "react";
import { Card, Container, Row, Col, Image } from "react-bootstrap";
import oceanBackground from "../images/ocean-waves.jpg"; // Import an ocean-themed background image
import fishLogo from "../images/fish-logo.jpeg"; // Import your store's fish logo
import { ShoppingCartContext } from "./ShoppingCartContext"; // Adjust the import path as needed

function ViewConfirmation() {
  const { paymentDetails, shippingDetails } = useContext(ShoppingCartContext);

  return (
    <Container
      style={{
        backgroundImage: `url(${oceanBackground})`,
        backgroundSize: "cover",
      }}
    >
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card
            className="text-center"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
          >
            <Card.Header>
              <Image src={fishLogo} alt="Fish Store Logo" fluid />
            </Card.Header>
            <Card.Body>
              <Card.Title>Thank You for Your Purchase!</Card.Title>
              <Card.Text>
                Your order for the finest aquatic friends is confirmed.
              </Card.Text>
              <Card.Text>
                <strong>Order Details:</strong>
              </Card.Text>
              <Card.Text>
                Payment Method: **** **** ****{" "}
                {paymentDetails.cardNumber.slice(-4)}
              </Card.Text>
              <Card.Text>
                Shipping to: {shippingDetails.name},{" "}
                {shippingDetails.addressLine1}, {shippingDetails.city}
              </Card.Text>
              {/* Add more details as needed */}
            </Card.Body>
            <Card.Footer className="text-muted">
              Your fishes are swimming their way to you!
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ViewConfirmation;
