import React, { useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ShoppingCartPage.css"; // Import the CSS file for styling

function ShoppingCartPage() {
  const { cartItems } = useContext(ShoppingCartContext);
  const navigate = useNavigate(); // Create an instance of useHistory

  // Function to calculate the subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  // Function to handle navigation to payment entry
  const navigateToPaymentEntry = () => {
    navigate("/purchase/paymentEntry");
  };

  // Assuming a fixed tax rate for simplicity
  const TAX_RATE = 0.08; // 8% tax

  // Function to calculate tax
  const calculateTax = (subtotal) => {
    return subtotal * TAX_RATE;
  };

  // Function to calculate total
  const calculateTotal = (subtotal, tax) => {
    return subtotal + tax;
  };

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const total = calculateTotal(subtotal, tax);

  return (
    <Container
      className="shopping-cart-container mt-4"
      style={{ paddingBottom: "10px" }}
    >
      <h1 className="shopping-cart-title">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <Card key={index} className="cart-item mb-3">
              <Row noGutters>
                <Col md={3}>
                  <Card.Img
                    src={item.imageUrl}
                    alt={item.name}
                    className="cart-item-image"
                  />
                </Col>
                <Col md={9}>
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Quantity: {item.quantity}</Card.Text>
                    <Card.Text>Price: ${item.price}</Card.Text>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
          <div className="totals-box">
            <h3 className="subtotal-title">Subtotal: ${subtotal.toFixed(2)}</h3>
            <h3 className="tax-title">Tax: ${tax.toFixed(2)}</h3>
            <h3 className="total-title">Total: ${total.toFixed(2)}</h3>
          </div>
          <div style={{ textAlign: "right" }}>
            <Button
              onClick={navigateToPaymentEntry}
              className="buy-button"
              style={{ width: "10%", paddingBottom: "10px" }}
            >
              Buy
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}

export default ShoppingCartPage;
