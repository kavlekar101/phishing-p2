import React, { useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";
import { Card, ListGroup, Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ViewOrder() {
  const { cartItems, paymentDetails, shippingDetails } = useContext(ShoppingCartContext);

  const navigate = useNavigate();

  // Function to handle navigation to payment entry
  const navigateToViewConfirmation = () => {
    navigate("/purchase/viewConfirmation");
  };

  return (
    <Container className="p-3">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Header>Order Summary</Card.Header>
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id}>
                  {item.name} - {item.quantity} x ${item.price.toFixed(2)}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
          <Card className="mt-3 mt-3">
            <Card.Header>Payment Details</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Card Number: {paymentDetails.cardNumber}
              </ListGroup.Item>
              <ListGroup.Item>
                Expiry Date: {paymentDetails.expiryDate}
              </ListGroup.Item>
              <ListGroup.Item>
                Card Holder: {paymentDetails.cardHolderName}
              </ListGroup.Item>
              {/* Mask the CVV if needed */}
              <ListGroup.Item>CVV: ***</ListGroup.Item>
              <ListGroup.Item>Name: {shippingDetails.name}</ListGroup.Item>
              <ListGroup.Item>
                Address Line 1: {shippingDetails.addressLine1}
              </ListGroup.Item>
              <ListGroup.Item>
                Address Line 2: {shippingDetails.addressLine2}
              </ListGroup.Item>
              <ListGroup.Item>City: {shippingDetails.city}</ListGroup.Item>
              <ListGroup.Item>State: {shippingDetails.state}</ListGroup.Item>
              <ListGroup.Item>Zip: {shippingDetails.zip}</ListGroup.Item>
            </ListGroup>
          </Card>
          <Button onClick={navigateToViewConfirmation}>Confirm Order</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ViewOrder;
