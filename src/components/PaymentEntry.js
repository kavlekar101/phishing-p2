import React, { useState, useContext } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import "./PaymentEntry.css"; // Make sure to create this CSS file
import { ShoppingCartContext } from "./ShoppingCartContext";

function PaymentEntry() {
  const { updatePaymentDetails } = useContext(ShoppingCartContext);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Function to handle navigation to payment entry
  const navigateToShippingEntry = () => {
    navigate("/purchase/shippingEntry");
  };

  const validateCardNumber = (number) => {
    return number.length === 16;
  };

  const validateCVV = (cvv) => {
    return cvv.length === 3;
  };

  const validateName = (name) => {
    return /^[a-zA-Z ]+$/.test(name);
  };

  const validateExpiryDate = (date) => {
    return /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(date);
  };

  const handleChange = (e) => {
    setCardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value,
    });

    // Optionally, you can validate on change
    // validateField(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!validateCardNumber(cardDetails.cardNumber)) {
      newErrors.cardNumber = "Card number must be 16 digits long";
    }
    if (!validateCVV(cardDetails.cvv)) {
      newErrors.cvv = "CVV must be 3 digits long";
    }
    if (!validateName(cardDetails.cardHolderName)) {
      newErrors.cardHolderName = "Name must contain only letters";
    }
    if (!validateExpiryDate(cardDetails.expiryDate)) {
      newErrors.expiryDate = "Invalid expiry date format";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(cardDetails);
      
      updatePaymentDetails(cardDetails);
      navigateToShippingEntry();
    }
  };

  return (
    <Container className="p-3">
      <Row className="justify-content-md-center align-items-center full-height">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formCardNumber">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="cardNumber"
                    value={cardDetails.cardNumber}
                    onChange={handleChange}
                    isInvalid={!!errors.cardNumber}
                    required
                  />
                  {errors.cardNumber && (
                    <div className="error">{errors.cardNumber}</div>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formExpiryDate">
                  <Form.Label>Expiry Date</Form.Label>
                  <Form.Control
                    type="text"
                    name="expiryDate"
                    value={cardDetails.expiryDate}
                    onChange={handleChange}
                    isInvalid={!!errors.expiryDate}
                    required
                  />
                  {errors.expiryDate && (
                    <div className="error">{errors.expiryDate}</div>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCVV">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control
                    type="text"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleChange}
                    isInvalid={!!errors.cvv}
                    required
                  />
                  {errors.cvv && <div className="error">{errors.cvv}</div>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCardHolderName">
                  <Form.Label>Card Holder Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="cardHolderName"
                    value={cardDetails.cardHolderName}
                    onChange={handleChange}
                    isInvalid={!!errors.cardHolderName}
                    required
                  />
                  {errors.cardHolderName && (
                    <div className="error">{errors.cardHolderName}</div>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDiscountCode">
                  <Form.Label>Discount Code</Form.Label>
                  <Form.Control
                    type="text"
                    name="discountCode"
                    value={cardDetails.discountCode}
                    onChange={handleChange}
                  />
                  {/* Assuming no validation for discount code, so no error message */}
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                >
                  Submit Payment
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PaymentEntry;
