import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import bgImage from '../assets/bg.jpg';
import './Header.css';

const Header = () => {
  return (
    <header className="header" style={{ backgroundImage: `url(${bgImage})` }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2>Simplify music teaching with Adagio</h2>
            <p>Add students, schedule lessons and performances, assign homework, and manage billing all in one place.</p>
            <div className="button-group">
              <Button variant="primary" className="me-2">
                <i className="bi bi-play-circle"></i> Get started for free
              </Button>
              <Button variant="secondary">
                <i className="bi bi-play-circle"></i> Watch demo
              </Button>
            </div>
            <div className="stats mt-4">
              <div>
                <h3>10K+</h3>
                <p>Active students</p>
              </div>
              <div>
                <h3>200+</h3>
                <p>Active teachers</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
