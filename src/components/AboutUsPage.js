import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUsPage.css"; // Import your custom CSS file
// import blueFish from "../images/blueFish.png";
// import redFish from "../images/redFish.png";
// import yellowFish from "../images/yellowFish.png";
import gurbaksh from "../images/Gurbaksh.jpeg";
import emil from "../images/Emil.jpeg";
import shashwat from "../images/Shashwat.png";

function AboutUsPage() {
  return (
    <Container className="about-us-page">
      <h1 className="text-center my-4">About Us</h1>

      {/* Row 1 */}
      <Row className="my-5">
        <Col md={6} className="d-flex align-items-start">
          <div className="aspect-ratio-box">
            <Image src={shashwat} fluid />
          </div>
        </Col>
        <Col
          md={6}
          className="d-flex flex-column align-items-center align-self-start"
        >
          <h2>Shashwat</h2>
          <p>CEO</p>
          <p>
            As the Captain of our ship at Phishers' Phlea Phair, Shashwat steers
            us through the vast oceans of the fish market with an unwavering
            hand and a keen eye for the finest catches. With years of experience
            navigating the tumultuous waters of the industry, he has an innate
            ability to spot the most promising trends and opportunities, much
            like a seasoned fisherman spots a school of fish on the horizon. His
            leadership is not just about guiding the company; it's about
            preserving the marine heritage and promoting sustainable fishing
            practices. Under his guidance, we're not just selling fish; we're
            celebrating the bounty of the sea.
          </p>
        </Col>
      </Row>

      {/* Row 2 */}
      <Row className="my-5">
        <Col
          md={6}
          className="d-flex flex-column align-items-center align-self-start"
        >
          <h2>Gurbaksh</h2>
          <p>CTO</p>
          <p>
            Gurbaksh, our Chief Tackle Officer, is the mastermind behind the
            innovative technology that keeps Phishers' Phlea Phair sailing
            smoothly. With a mind as sharp as a marlin's bill, he expertly
            navigates the complex digital seas, ensuring that our technological
            nets are wide and strong enough to capture the latest advancements
            in the industry. His passion for marine life is not just limited to
            his work; it extends to advocating for the protection of aquatic
            ecosystems. Gurbaksh's tech-savvy approach and commitment to the
            ocean make him an invaluable member of our crew.
          </p>
        </Col>
        <Col md={6} className="d-flex align-items-start">
          <div className="aspect-ratio-box">
            <Image src={gurbaksh} fluid />
          </div>
        </Col>
      </Row>

      {/* Row 3 */}
      <Row className="my-5">
        <Col md={6} className="d-flex align-items-start">
          <div className="aspect-ratio-box">
            <Image src={emil} fluid />
          </div>
        </Col>
        <Col
          md={6}
          className="d-flex flex-column align-items-center align-self-start"
        >
          <h2>Emil</h2>
          <p>CFO</p>
          <p>Emil, our Chief Financial Officer, is the anchor of Phishers' Phlea 
            Phair, providing stability and security in the unpredictable tides of 
            the business world. With a keen eye for detail and a strategic mind, he 
            manages our financial currents with the precision of a skilled navigator 
            charting a course through uncharted waters. His expertise in finance is 
            matched only by his dedication to promoting ethical business practices and 
            responsible stewardship of marine resources. Emil ensures that our financial 
            strategies not only lead to prosperity but also contribute to the health of 
            our oceans.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUsPage;
