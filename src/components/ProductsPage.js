import React, { useContext, useState } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import "./ProductsPage.css"; // Make sure you have this CSS file

function ProductsPage() {
  const { products, addToCart, removeFromCart } =
    useContext(ShoppingCartContext);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleQuantityChange = (id, delta) => {
    const product = products.find((product) => product.id === id);
    if (delta === 1) {
      addToCart(product);
    } else {
      removeFromCart(id);
    }
  };

  const handleSelectProduct = (id) => {
    setSelectedProductId(selectedProductId === id ? null : id);
  };

  return (
    <Container className="my-4">
      <Row xs={1} md={3} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card
              className="product-card"
              onClick={() => handleSelectProduct(product.id)}
            >
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
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuantityChange(product.id, -1);
                    }}
                    disabled={product.quantity === 0}
                  >
                    -
                  </Button>
                  <span className="quantity mx-2">{product.quantity}</span>
                  <Button
                    className="quantity-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuantityChange(product.id, 1);
                    }}
                  >
                    +
                  </Button>
                </div>
                {selectedProductId === product.id && (
                  <div className="product-details">
                    <p className="product-price">Price: ${product.price}</p>
                    <p className="product-description">{product.description}</p>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductsPage;
