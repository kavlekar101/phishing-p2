import React, { useState } from "react";
import { Form, Card, Container, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingCartContext } from "./ShoppingCartContext";
import { useContext } from "react";

function ShippingEntry() {
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { updateShippingDetails } = useContext(ShoppingCartContext);

  const validateName = (name) => {
    return name.trim().length > 0;
  };

  const validateAddressLine1 = (address) => {
    return address.trim().length > 0;
  };

  // Function to handle navigation to payment entry
  const navigateToViewOrder = () => {
    navigate("/purchase/viewOrder");
  };

  // Address Line 2 is often optional, so you might not need validation
  // const validateAddressLine2 = (address) => { ... };

  const validateCity = (city) => {
    return city.trim().length > 0;
  };

  const validateState = (state) => {
    return state.trim().length > 0;
  };

  const validateZip = (zip) => {
    return /^\d{5}(-\d{4})?$/.test(zip); // US ZIP code format
  };

  const handleChange = (e) => {
    setShippingDetails({
      ...shippingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateName(shippingDetails.name)) {
      newErrors.name = "Name is required";
    }
    if (!validateAddressLine1(shippingDetails.addressLine1)) {
      newErrors.addressLine1 = "Address Line 1 is required";
    }
    // No validation for addressLine2 as it's often optional
    if (!validateCity(shippingDetails.city)) {
      newErrors.city = "City is required";
    }
    if (!validateState(shippingDetails.state)) {
      newErrors.state = "State is required";
    }
    if (!validateZip(shippingDetails.zip)) {
      newErrors.zip = "Invalid ZIP code";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(shippingDetails);
      updateShippingDetails(shippingDetails);
      navigateToViewOrder();
    }
  };

  return (
    <Container className="p-3">
      <Row className="justify-content-md-center align-items-center full-height">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={shippingDetails.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                  />
                  {errors.name && <div className="error">{errors.name}</div>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAddressLine1">
                  <Form.Label>Address Line 1</Form.Label>
                  <Form.Control
                    type="text"
                    name="addressLine1"
                    value={shippingDetails.addressLine1}
                    onChange={handleChange}
                    isInvalid={!!errors.addressLine1}
                  />
                  {errors.addressLine1 && (
                    <div className="error">{errors.addressLine1}</div>
                  )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAddressLine2">
                  <Form.Label>Address Line 2</Form.Label>
                  <Form.Control
                    type="text"
                    name="addressLine2"
                    value={shippingDetails.addressLine2}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={shippingDetails.city}
                    onChange={handleChange}
                    isInvalid={!!errors.city}
                  />
                  {errors.city && <div className="error">{errors.city}</div>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formState">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    value={shippingDetails.state}
                    onChange={handleChange}
                    isInvalid={!!errors.state}
                  />
                  {errors.state && <div className="error">{errors.state}</div>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control
                    type="text"
                    name="zip"
                    value={shippingDetails.zip}
                    onChange={handleChange}
                    isInvalid={!!errors.zip}
                  />
                  {errors.zip && <div className="error">{errors.zip}</div>}
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ShippingEntry;
