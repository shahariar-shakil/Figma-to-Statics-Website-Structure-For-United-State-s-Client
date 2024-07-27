import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-light text-dark pt-4">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Adagio</h5>
            <p>Add students, schedule lessons and performances, assign homework, and manage billing all in one place.</p>
          </Col>
          <Col md={3}>
            <h5>Product</h5>
            <ul className="list-unstyled">
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#signup">Sign up</a></li>
              <li><a href="#login">Log in</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#social">Social media links</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#twitter">Twitter</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Get in Touch</h5>
            <p>info@adagio.com</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={6}>
            <p>© 2024 Adagio, Inc</p>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="#terms" className="me-3">Terms of Use</a>
            <a href="#privacy">Privacy Policy</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
