import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import './Pricing.css';

const Pricing = () => {
  return (
    <Container className="pricing-page">
      <h2 className="mt-4 text-center">Join at a level that works for you</h2>
      <p className="mb-4 text-center">
        We are a registered 501(c)3 non-profit based in California. 
        100% of your monthly subscription is tax deductible.
      </p>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <div className="text-center">
                <Card.Title as="h1">Basic</Card.Title>
                <Card.Text className="font-weight-bold">Free</Card.Text>
                <Button variant="success" className="w-100 mb-3">Get started</Button>
              </div>
              <Card.Text>With the free plan, you get:</Card.Text>
              <ul className="list-unstyled">
                <li><FaCheck className="icon-spacing" /> Track practice time</li>
                <li><FaCheck className="icon-spacing" /> Calendar</li>
                <li><FaCheck className="icon-spacing" /> Lesson scheduler</li>
                <li><FaCheck className="icon-spacing" /> Assign homework</li>
                <li><FaCheck className="icon-spacing" /> Set goals</li>
                <li><FaCheck className="icon-spacing" /> 50 students</li>
                <li><FaCheck className="icon-spacing" /> Free website</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <div className="text-center">
                <Card.Title as="h1">Premium</Card.Title>
                <Card.Text className="font-weight-bold">$5 month</Card.Text>
                <Button variant="success" className="w-100 mb-3">Get started</Button>
              </div>
              <Card.Text>With the premium plan, you get:</Card.Text>
              <ul className="list-unstyled">
                <li><FaCheck className="icon-spacing" /> All the previous plus</li>
                <li><FaCheck className="icon-spacing" /> Unlimited students</li>
                <li><FaCheck className="icon-spacing" /> Automated billing and invoices</li>
                <li><FaCheck className="icon-spacing" /> Support for custom domains</li>
                <li><FaCheck className="icon-spacing" /> Newsletters</li>
                <li><FaCheck className="icon-spacing" /> Listen to audio from practice sessions</li>
                <li><FaCheck className="icon-spacing" /> Free Musopen pro membership included</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Pricing;
