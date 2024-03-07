import React, { Fragment } from "react";
import Logo from "../assets/images/call.png";
import Logo1 from "../assets/images/online-education-logo 1.svg";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../Aside/nav.css";
import "../Component/header.css";
import { Button } from "react-bootstrap";
import Search from "../assets/images/Vector.svg";
import logo from "../assets/images/online-education-logo 1.svg";
import { FaAlignRight } from "react-icons/fa";
const AppHeader = ({ isMobile, handleToggleSidebar }) => {
  const desktopmenu = () => {
    return (
      <Fragment>
        <div className="top-bar">
          <div className="container top-bar-border">
            <div className="row">
              <div className="col-md-4">
                <div className="d-flex">
                  <div>
                    <img src={Logo} alt="telephone-logo" />
                  </div>
                  <div>
                    <div className="tele-logo-text">Talk to our expert</div>
                    <div className="tele-no">+91 9876543210</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="tele-logo">
                  <img src={Logo1} alt="education-logo" className="edu-logo" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-end">
                  <div className="btn-style">
                    <Link to="/LogIn">
                      <Button
                        variant="outline-primary"
                        className="login-border w-100"
                      >
                        <span className="header-elementar-text">
                          Log&nbsp;In
                        </span>
                      </Button>
                    </Link>
                  </div>
                  <div className="btn-style">
                    <Link to="/JoinforFree">
                      <Button variant="primary" className="join-border w-100">
                        <span className="header-elementar-text-2">
                          Join&nbsp;for&nbsp;free
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navbar expand="lg" className="navbar-background">
          <Container>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/get-started">
                  Get&nbsp;started
                </Nav.Link>
                <Nav.Link as={Link} to="/educators">
                  Educators
                </Nav.Link>
                <Nav.Link as={Link} to="/batch">
                  Batch
                </Nav.Link>
                <Nav.Link as={Link} to="/store">
                  Store
                </Nav.Link>
                <Nav.Link as={Link} to="/subscription-plan">
                  Subscription&nbsp;plan
                </Nav.Link>
                <Nav.Link as={Link} to="/success-stories">
                  Success&nbsp;stories
                </Nav.Link>
                <Nav.Link as={Link} to="/about-exam">
                  About&nbsp;exam
                </Nav.Link>
              </Nav>
              <InputGroup className=" mt-4 mb-3 email-bar-sec">
                <Form.Control
                  type="search"
                  placeholder="Search course, test series, educators"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  className="search-bar"
                />
                <InputGroup.Text>
                  <img
                    src={Search}
                    alt="Search-icon"
                    className="search-icon-style"
                  />
                </InputGroup.Text>
              </InputGroup>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  };
  return (
    <nav className="Desktop_view">
      <Link to="/" className="link desktop_none">
        <img src={logo} alt="logo" className="education-logo" />
      </Link>
      {!isMobile ? (
        desktopmenu()
      ) : (
        <div className="icons">
          <div
            className="mobile-menu-icon"
            onClick={() => handleToggleSidebar(true)}
          >
            <FaAlignRight />
          </div>
        </div>
      )}
    </nav>
  );
};

export default AppHeader;
