import React, { Fragment } from "react";
import { Container, Row, Col} from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import "../Component/Footer.css";
import Logo2 from "../assets/images/online-education-logo 1 (1).svg";
import Form from "react-bootstrap/Form";
import facebook from "../assets/images/fb.svg";
import twitter from "../assets/images/twitter.svg";
import linkedin from "../assets/images/linkedin.svg";
import Instagram from "../assets/images/instagram.svg";
import youtube from "../assets/images/youtube.svg";
function AppFooter() {
  return (
    <Fragment>
      <section className="footer-background">
        <Container className="pt-5 pb-5 footer-border-style">
          <Row>
            <Col sm={12} md={12} lg={8}>
              <h2 className="footer-start-text">GET IN TOUCH</h2>
                <InputGroup className=" mt-3 mb-3 email-bar-sec">
        <Form.Control
          placeholder="Your Email"
          aria-label="Your Email"
          aria-describedby="basic-addon2"
          className="email-bar-style bar-border"
        />
        <InputGroup.Text className="join-button"><span className="join-button-text">Join for Free</span></InputGroup.Text>
      </InputGroup>
              <Row className="pt-5 pb-5">
                <Col sm={6} md={6} lg={4} className="col-6">
                <div className="footer-left-sec">
                  <h5 className="footer-text-head">
                  Company
                  </h5>
                  <ul className="footer-list-style">
                    <li className="footer-list-item p-10">About Us</li>
                    <li className="footer-list-item p-10">Careers</li>
                    <li className="footer-list-item p-10">Blogs</li>
                    <li className="footer-list-item p-10">Privacy policy</li>
                    <li className="footer-list-item p-10">Terms and conditions</li>
                  </ul>
                </div>
                </Col>
                <Col sm={6} md={6} lg={4} className="col-6">
                <div className="footer-left-sec">
                  <h5 className="footer-text-head">
                  Popular goals
                  </h5>
                  <ul className="footer-list-style">
                    <li className="footer-list-item p-10">IIT JEE</li>
                    <li className="footer-list-item p-10">UPSC</li>
                    <li className="footer-list-item p-10">SSC</li>
                    <li className="footer-list-item p-10">CSIR UGC NET</li>
                    <li className="footer-list-item p-10">NEET UG</li>
                  </ul>
                </div>
                  </Col>
                  <Col sm={6} md={6} lg={4}>
                  <div className="footer-left-sec">
                  <h5 className="footer-text-head">
                  Help & support
                  </h5>
                  <ul className="footer-list-style">
                    <li className="footer-list-item p-10">User Guidelines</li>
                    <li className="footer-list-item p-10">Site Map</li>
                    <li className="footer-list-item p-10">Refund Policy</li>
                    <li className="footer-list-item p-10">Takedown Policy</li>
                    <li className="footer-list-item p-10">Grievance Redressal</li>
                  </ul>
                </div>
                  </Col>
              </Row>
            </Col>
            <Col sm={12} md={12} lg={4}>
              <div className="footer-logo">
                <img src={Logo2} alt="speech-footer-logo" />
              </div>
              <div className="p-20">
                <p className="footer-text-para">
                  Speech is democratising education, making it accessible to
                  all. Join the revolution, learn on India's largest learning
                  platform.
                </p>
              </div>
              <Row className="footer-right-border p-40">
                <Col sm={6} md={6} lg={6}>
                <h2 className="toll-free-text">Toll Free Customer Care</h2>
                <div className="toll-free-no">
                +(1) 123 456 7890
                </div>
                </Col>
                <Col sm={6} md={6} lg={6}>
                <h2 className="toll-free-text">Need live support?</h2>
                <div className="toll-free-no">
                help@speech.com
                </div>
                  </Col>
              </Row>
              <Row className="pt-5">
                <div className="footer-last-sec">
                <h5 className="Social-media-text">Follow us on social media</h5>
                <div className="d-flex">
                <Col><img src={facebook} alt="fb-logo"/></Col>
                <Col><img src={twitter} alt="twitter-logo"/></Col>
                <Col><img src={linkedin} alt="linked-logo"/></Col>
                <Col><img src={Instagram} alt="instagram-logo"/></Col>
                <Col><img src={youtube} alt="youtube-logo"/></Col>
                </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
        <Row>
        <div className="copyright">
        <p className="p-10"> 
           ©&nbsp;2024&nbsp;Nayee disha Pvt Ltd
           </p>
        </div>
       </Row>
      </section>
    </Fragment>
  );
}

export default AppFooter;
