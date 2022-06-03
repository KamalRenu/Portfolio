import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Particle from '../Particle';

function Contact() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container className='min-h-100'>
      <h1 className="project-heading"><strong className="purple">Contact </strong>Me</h1>
            <Form className='my-5'>
                <Row>
                    <Col lg='6'>
                        <Form.Group>
                            <Form.Label>
                                Name
                            </Form.Label>
                            <Form.Control name='name' type='text' placeholder='What do we call you?'></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col lg='6'>
                        <Form.Group>
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control name='email' type='email' placeholder='Your email address please'></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm='12'>
                        <Form.Group>
                            <Form.Label>
                                Title
                            </Form.Label>
                            <Form.Control name='title' type='text' placeholder='What do you want to talk about?'></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm='12'>
                        <Form.Group>
                            <Form.Label>
                                Message
                            </Form.Label>
                            <Form.Control name='message' as='textarea' rows={4} placeholder='Tell us everything'></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type='submit' variant='primary'>Submit</Button>
                    </Col>
                </Row>
            </Form>
            </Container>
            <Row>
          <Col md={12} className="home-about-social">
            <p>Email <span className="purple">kamalrenu97@gmail.com </span></p>
          </Col>
          </Row>
          <Row>
          <Col md={12} className="home-about-social">
            <p>Phone <span className="purple">9597063816 </span></p>
          </Col>
          </Row>
    </Container>
  )
}

export default Contact