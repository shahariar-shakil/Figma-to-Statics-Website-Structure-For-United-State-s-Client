import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import './Products.css';

const Products = () => {
  return (
    <Container className="products-page">
      <h2 className="mt-4 text-center">Join our amazing community</h2>
      <p className="mb-4 text-center">
        Transform the way you manage your teaching and enrich the student experience with innovative tools that simplify and enhance daily operations.
      </p>
      <Row>
        <Col md={4} className="mb-4">
          <div className="testimonial">
            <p>"I appreciate the robust lesson tracking and progress reporting features."</p>
            <h5>Christopher Brown</h5>
            <p>Piano Instructor</p>
          </div>
          <div className="testimonial">
            <p>"This platform has been a game-changer for my teaching business. The user-friendly interface makes scheduling lessons and managing my calendar a breeze."</p>
            <h5>Emily Thompson</h5>
            <p>Violin Instructor</p>
          </div>
          <div className="testimonial">
            <p>"As a working musician and part-time music teacher, finding a platform that caters to my unique needs and busy schedule was a challenge – until I discovered this incredible solution. The flexibility it offers is unparalleled. I can easily adjust my availability and schedule lessons at times that work best for me and my students, ensuring a perfect work-life balance."</p>
            <h5>Joseph Thomas</h5>
            <p>Trumpet Instructor</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="testimonial">
            <p>"As a seasoned music teacher with over 20 years of experience, I've seen my fair share of teaching tools and platforms come and go. However, this platform stands out as one of the most comprehensive and user-friendly solutions I've ever encountered."</p>
            <h5>Olivia Martinez</h5>
            <p>Voice Instructor</p>
          </div>
          <div className="testimonial">
            <p>"I love the ability to offer both in-person and online lessons through this platform. It has expanded my reach and allowed me to connect with students from all over the world."</p>
            <h5>William Davis</h5>
            <p>Guitar Instructor</p>
          </div>
          <div className="testimonial">
            <p>"I've tried other teaching platforms in the past, but none have matched the user-friendly design and comprehensive features offered here."</p>
            <h5>Amelia Gonzalez</h5>
            <p>Bass Guitar</p>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <div className="testimonial">
            <p>"The video conferencing tool is top-notch. The high-quality audio and video make virtual lessons feel just like being in the same room as my students."</p>
            <h5>Ava Rodriguez</h5>
            <p>Piano Instructor</p>
          </div>
          <div className="testimonial">
            <p>"The built-in resource sharing feature is fantastic. I can easily share sheet music, exercises, and other learning materials with my students, streamlining the learning process."</p>
            <h5>Michael Smith</h5>
            <p>Drums Instructor</p>
          </div>
          <div className="testimonial">
            <p>"The ability to set up recurring lessons and send automatic reminders has been a lifesaver for me. It helps ensure my students stay on track and never miss a lesson. It has opened up new revenue streams and allowed me to reach a wider audience."</p>
            <h5>Mia Hernandez</h5>
            <p>Cello Instructor</p>
          </div>
        </Col>
      </Row>
      <Row className="mt-5 align-items-center">
        <Col md={6} className="mb-4">
          <h2>Join 10,000+ Music Educators Inspiring the Next Generation of Musicians</h2>
          <p>Get started for free. Upgrade whenever you wanted to deep dive into the best of Adagio.</p>
          <Button variant="success">Get started for free</Button>
        </Col>
        <Col md={6} className="mb-4">
          <Row>
            <Col xs={6} className="mb-4">
              <img src={p1} alt="Gallery 1" className="img-fluid shadow" />
            </Col>
            <Col xs={6} className="mb-4">
              <img src={p2} alt="Gallery 2" className="img-fluid shadow" />
            </Col>
            <Col xs={6} className="mb-4">
              <img src={p3} alt="Gallery 3" className="img-fluid shadow" />
            </Col>
            <Col xs={6} className="mb-4">
              <img src={p4} alt="Gallery 4" className="img-fluid shadow" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
