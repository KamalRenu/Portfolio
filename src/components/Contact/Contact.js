import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Particle from '../Particle';
import { useFormik } from 'formik';
import axios from 'axios';
import { BiPhoneCall } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

function Contact() {
  const formik = useFormik({
    initialValues: {
        email: '',
        name: ''
    },
    onSubmit: async (values) => {
        try {
            let loginData = await axios.post("http://localhost:3001/login",values)
            window.localStorage.setItem("my_token",loginData.data.token)
        } catch (error) {
            console.log(error)
        }
    },
});
  return (
    <>
      <Container fluid className="contact-section">
        <Particle />
        <Container>
        <Row className="mb-5 mt-3">
          <Col lg='8'>
            <h1 className='display-4 mb-4'>
              Contact <strong className="purple">Me</strong>
            </h1>
          </Col>
        </Row>
        <Row className='sec_sp'>
          <Col lg="5" className="mb-5 justify-content-start">
            <h3 className='color_sec py-4'>Get in touch</h3>
            <address>
              <BiPhoneCall/><a href="tel:9597063816">  +91 9597063816</a>
              <br />
              <br />
              <AiOutlineMail/><a href="mailto:kamalrenu97@gmail.com">  kamalrenu97@gmail.com</a>
              <br />
              <br />
              <GoLocation/><p>  Tiruvannamalai, Tamilnadu.</p>
            </address>
          </Col>
          <Col lg="5" className="d-flex align-items-center">
            <form className='contact_form w-100 justify-between' onSubmit={formik.handleSubmit}>
              <Row>
                <Col lg="12" className='form-group'>
                  <input
                    className='form-control'
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                </Col>&nbsp;
                <Col lg="12" className='form-group'>
                  <input
                    className='form-control'
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </Col>
              </Row>
              <br />
              <textarea className='form-control' id='message'
                name="messge"
                placeholder="Message"
                rows="5"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.mesage}
              ></textarea>
              <Row>
                <Col lg='12' className='form-group'>
                  <Button variant="primary" type="submit">Send</Button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      </Container>
    </>
  )
}

export default Contact