import React from "react";
import { Container, Carousel } from "react-bootstrap";
import alex from "../images/alex.jpeg";
import jordan from "../images/jordan.jpeg";
import sam from "../images/sam.webp";

function TestimonialsSection() {
    return (
      <div
        className="text-center py-5"
        style={{
          backgroundColor: "#0a3d62",
          color: "#f1f1f1",
          overflowY: "auto",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around", // Adjusts internal spacing
        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px", // Increased gap
          }}
        >
          <h2 style={{ marginBottom: "30px" }}>Our Customers' Sea Stories</h2>
          <p
            style={{
              textAlign: "justify",
              fontSize: "1.2rem", // Slightly larger text
              lineHeight: "1.8",
              maxWidth: "600px",
              marginBottom: "30px",
            }}
          >
            Hear from our sea-loving customers...
          </p>

          {/* Testimonials Carousel */}
          <Carousel style={{ width: "100%", maxWidth: "600px" }}>
            <Carousel.Item style={{ height: "350px" }}>
              {" "}
              {/* Fixed height */}
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={alex}
                  alt="Customer 1"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    margin: "0 auto",
                  }}
                />
                <p>
                  "The vibrant colors and unique personalities of the fish bring
                  so much life to our home. It's a delightful experience
                  watching them every day!"
                </p>
                <em>- Alex</em>
              </div>
            </Carousel.Item>
            <Carousel.Item style={{ height: "350px" }}>
              {" "}
              {/* Fixed height */}
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={jordan}
                  alt="Customer 2"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    margin: "0 auto",
                  }}
                />
                <p>
                  "I'm impressed by the variety of fish available. From tranquil
                  bettas to lively goldfish, there's a perfect pet for every
                  aquarium enthusiast here."
                </p>
                <em>- Mike</em>
              </div>
            </Carousel.Item>
            <Carousel.Item style={{ height: "350px" }}>
              {" "}
              {/* Fixed height */}
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={sam}
                  alt="Customer 3"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    margin: "0 auto",
                  }}
                />
                <p>
                  "Their care for the fish's health and well-being is evident.
                  Each pet arrives in excellent condition, ready to thrive in
                  its new home."
                </p>
                <em>- Sam</em>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    );
}

export default TestimonialsSection;
