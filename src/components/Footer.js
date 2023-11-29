import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faTiktok,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-0">
      <Container className="py-3 d-flex justify-content-center align-items-center">
        {/* Social Icons and Company Name Container */}
        <div className="d-flex align-items-center">
          {/* Company Name with Right Margin */}
          <p className="mb-0 me-3">© 2023 AquaticPals</p>

          {/* Social Icons with Increased Padding */}
          <div>
            <a href="https://www.facebook.com" className="text-white me-3">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.twitter.com" className="text-white me-3">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com" className="text-white me-3">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.threads.com" className="text-white me-3">
              <FontAwesomeIcon icon={faThreads} />
            </a>
            <a href="https://www.linkedin.com" className="text-white me-3">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://www.tiktok.com" className="text-white me-3">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
          {/* End of Social Icons */}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
