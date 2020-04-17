import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";


class Footer extends React.Component {
  render() {
    return (
      
        <footer className="footer has-cards" id="myFooter">
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h5 className="font-weight-bold mb-2" style={{color:"white"}}>
                  Location
                </h5>

                <Row>
                    <Col md="4" sm="6">
                        <span>Ahmedabad</span>
                    </Col>
                    <Col md="4" sm="6">
                        <span>Boston</span>
                    </Col>
                    <Col md="4" sm="6">
                        <span>New York</span>
                    </Col>
                    <Col md="4" sm="6">
                        <span>New Jersey</span>
                    </Col>
                    <Col md="4" sm="6">
                        <span>San Fransico</span>
                    </Col>
                    <Col md="4" sm="6">
                        <span>Mumbai</span>
                    </Col>
                </Row>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="https://twitter.com/"
                  id="tooltip475038074"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="https://www.facebook.com/"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="instagram"
                  href="https://www.instagram.com/"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-instagram" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="white"
                  href="https://github.com/"
                  id="tooltip495507257"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Star on Github
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright" >
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="https://github.com/DeepGamit/WebDesignProject"
                    target="_blank"
                    style={{color:"white"}}
                  >
                    LEGION
                  </a>
                  .
                </div>
              </Col>
              <Col md="6" sm="1">
                <Nav className="nav-footer justify-content-end" id="bottom">
                  
                  <Link to="/about">
                    <NavItem>
                      <NavLink>
                        About Us
                      </NavLink>
                    </NavItem>
                  </Link>

                  <Link to="/contact">
                    <NavItem>
                      <NavLink>
                        Contact Us
                      </NavLink>
                    </NavItem>
                  </Link>
                  
                  <Link to="/careers">
                  <NavItem>
                    <NavLink>
                      Careers
                    </NavLink>
                  </NavItem>
                  </Link>

                  <NavItem>
                    <NavLink
                      href="https://github.com/DeepGamit/WebDesignProject"
                      target="_blank"
                    >
                     Blog
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
     
    );
  }
}

export default Footer;
