import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import chart from '../assets/chart.jpg';
import './Features.css';

const Features = () => {
  return (
    <Container className="features-page">
      <h2 className="mt-4 text-center">Lesson management made musical</h2>
      <p className="mb-4 text-center">
        You don't have to switch solutions to benefit from our user-friendly software suite. Bring your current tools with you, and we’ll connect your data via API—it’s our behind-the-scenes magic.
      </p>
      <div className="modern-look mb-4 text-center">
        <h4>Keep students motivated to learn <span className="highlight">Homework</span> Billing and payments Calendar</h4>
      </div>
      <div className="text-center">
        <img src={chart} alt="Chart" className="img-fluid shadow-lg rounded" />
      </div>
    </Container>
  );
};

export default Features;
