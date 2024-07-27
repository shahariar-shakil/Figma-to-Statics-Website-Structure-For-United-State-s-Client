import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import './Home.css';

const Home = () => {
  return (
    <Container className="home-page">
      <h2 className="mt-4 text-center">Lesson management made musical</h2>
      <p className="mb-4 text-center">
        You don't have to switch solutions to benefit from our user-friendly software suite. Bring your current tools with you, and we’ll connect your data via API—it’s our behind-the-scenes magic.
      </p>
      <Row>
        <Col md={4} className="text-center mb-4 shadow-sm p-3 bg-white rounded">
          <img src={p1} alt="Track student practice time" className="img-fluid mb-3" />
          <h3>Track student practice time</h3>
          <p>See the practice time for an entire class at a glance.</p>
        </Col>
        <Col md={4} className="text-center mb-4 shadow-sm p-3 bg-white rounded">
          <img src={p2} alt="A calendar for you and your students" className="img-fluid mb-3" />
          <h3>A calendar for you and your students</h3>
          <p>Automate scheduling, cancellations, and calendar management.</p>
        </Col>
        <Col md={4} className="text-center mb-4 shadow-sm p-3 bg-white rounded">
          <img src={p3} alt="Automate billing for lessons" className="img-fluid mb-3" />
          <h3>Automate billing for lessons</h3>
          <p>Invoices, payment tracking, reminders, and online payment options.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
