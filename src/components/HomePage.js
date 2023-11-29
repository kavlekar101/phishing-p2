import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import dailyFishes from "../images/daily-fishing.jpeg";
import sustainableFishes from "../images/sustainable-fishing.jpeg";
import vareityFishes from "../images/variety-of-fishes.jpeg";
import TestimonialsSection from "./TestimonialsSection";

function HomePage() {
  return (
    <div>
      {/* Hero Section with Fixed Background Image */}
      <div
        className="hero-section text-center"
        style={{
          backgroundImage: "url(fishing-in-the-morning.jpeg)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: "100vh", // Full viewport height
          padding: "100px 0", // Adjust top and bottom padding as needed
        }}
      >
        {/* Hero section content can be added here if needed */}
      </div>
      {/* Features Section with Nautical Icons */}
      <Container
        className="py-5"
        style={{ height: "100vh", overflowY: "auto" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Centered Card */}
          <Card
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              margin: "0 auto",
              padding: "20px",
              textAlign: "center",
              width: "90%",
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontSize: "2rem", fontWeight: "bold" }}>
                Welcome to Our Oceanic World
              </Card.Title>
              <Card.Text style={{ fontSize: "1.2rem", margin: "20px 0" }}>
                Explore the finest selection of fresh fishes and marine
                products.
              </Card.Text>
              <Button
                variant="primary"
                style={{ padding: "10px 20px", fontSize: "1rem" }}
              >
                Discover More
              </Button>
            </Card.Body>
          </Card>

          {/* Centered Row of Cards */}
          <Row
            className="g-4 mt-4 justify-content-center"
            style={{ width: "100%" }}
          >
            <Col md={4} className="card-container">
              <Card.Img
                variant="top"
                src={dailyFishes}
                className="card-img-top"
              />
              <Card>
                <Card.Body>
                  <Card.Title>
                    <i className="bi bi-anchor"></i> Freshness Guaranteed
                  </Card.Title>
                  <Card.Text>
                    Our fishes are caught daily, ensuring the freshest seafood
                    experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="card-container">
              <Card>
                <Card.Body>
                  <Card.Title>
                    <i className="bi bi-life-preserver"></i> Sustainable Fishing
                  </Card.Title>
                  <Card.Text>
                    We are committed to sustainable fishing practices to protect
                    marine life.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card.Img
                variant="top"
                src={sustainableFishes}
                className="card-img-top"
              />
            </Col>
            <Col md={4} className="card-container">
              <Card.Img
                variant="top"
                src={vareityFishes}
                className="card-img-top"
              />
              <Card>
                <Card.Body>
                  <Card.Title>
                    <i className="bi bi-compass"></i> Wide Variety
                  </Card.Title>
                  <Card.Text>
                    From the common to the exotic, discover our wide range of
                    marine species.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      <div
        className="hero-section text-center"
        style={{
          backgroundImage: "url(nautilus.webp)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: "100vh", // Full viewport height
          padding: "100px 0", // Adjust top and bottom padding as needed
        }}
      >
        {/* Hero section content can be added here if needed */}
      </div>
      {/* Call to Action Section with Oceanic Colors */}
      <div
        className="text-center py-5"
        style={{
          backgroundColor: "#005f73",
          color: "#e0fbfc",
          height: "100vh",
          overflowY: "auto",
          position: "relative",
        }}
      >
        <Container
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Join Our Oceanic Journey</h2>
          <p
            style={{
              textAlign: "justify",
              fontSize: "1.1rem",
              lineHeight: "1.6",
            }}
          >
            Dive into the world of exquisite seafood and become a part of our
            community. Discover the secrets of the deep blue sea and its diverse
            inhabitants. Experience the thrill of ocean exploration and
            sustainable fishing. Learn about marine conservation and how you can
            contribute. Enjoy exclusive offers and updates from our oceanic
            adventures. Join us in our commitment to preserving the beauty and
            diversity of marine life, while indulging in the finest seafood
            delicacies sourced with respect for nature. Explore our interactive
            exhibits, attend expert-led workshops, and be part of a movement
            that values the ocean's health as much as its bounty.
          </p>
          <Button variant="outline-light" className="hover-effect">
            Get Started
          </Button>
        </Container>
      </div>
      <div
        className="hero-section text-center"
        style={{
          backgroundImage: "url(finding-nemo-scene.jpg)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: "100vh", // Full viewport height
          padding: "100px 0", // Adjust top and bottom padding as needed
        }}
      >
        {/* Hero section content can be added here if needed */}
      </div>

      {/* Testimonials Section with Carousel */}
      <TestimonialsSection />
    </div>
  );
}

export default HomePage;