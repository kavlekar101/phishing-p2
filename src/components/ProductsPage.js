import React, { useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import "./ProductsPage.css"; // Import your custom CSS

function ProductsPage() {
  const { products, addToCart, removeFromCart } =
    useContext(ShoppingCartContext);

  const handleQuantityChange = (id, delta) => {
    const product = products.find((product) => product.id === id);
    if (delta === 1) {
      addToCart(product);
    } else {
      removeFromCart(id);
    }
  };

  return (
    <Container className="my-4">
      <Row xs={1} md={3} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card className="product-card">
              <Card.Img
                variant="top"
                src={product.imageUrl}
                alt={product.name}
              />
              <Card.Body>
                <Card.Title className="product-title">
                  {product.name}
                </Card.Title>
                <div className="d-flex justify-content-center align-items-center">
                  <Button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(product.id, -1)}
                    disabled={product.quantity === 0}
                  >
                    -
                  </Button>
                  <span className="quantity">{product.quantity}</span>
                  <Button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(product.id, 1)}
                  >
                    +
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductsPage;
