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
      
        <footer className="footer has-cards">
        <BrowserRouter>
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h5 className="text-primary font-weight-bold mb-2">
                  Location
                </h5>

                <Row>
                    <Col md="4" xs="3">
                        <span>Ahmedabad</span>
                    </Col>
                    <Col md="4" xs="3">
                        <span>Boston</span>
                    </Col>
                    <Col md="4" xs="3">
                        <span>New York</span>
                    </Col>
                    <Col md="4" xs="3">
                        <span>New Jersey</span>
                    </Col>
                    <Col md="4" xs="3">
                        <span>San Fransico</span>
                    </Col>
                    <Col md="4" xs="3">
                        <span>Mumbai</span>
                    </Col>
                </Row>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="https://twitter.com/creativetim"
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
                  href="https://www.facebook.com/creativetim"
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
                  color="dribbble"
                  href="https://dribbble.com/creativetim"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-dribbble" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="https://github.com/creativetimofficial"
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
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="https://www.creative-tim.com?ref=adsr-footer"
                    target="_blank"
                  >
                    LEGION
                  </a>
                  .
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  
                  <Link to = "/about">
                    <NavItem>
                      <NavLink>
                        About Us
                      </NavLink>
                    </NavItem>
                  </Link>

                  <Link to = "/contact">
                    <NavItem>
                      <NavLink>
                        Contact Us
                      </NavLink>
                    </NavItem>
                  </Link>
                  
                  <NavItem>
                    <NavLink
                      href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                      target="_blank"
                    >
                      Terms & Condition
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                      target="_blank"
                    >
                     Blog
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                      target="_blank"
                    >
                      Reviews
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
          </BrowserRouter>
        </footer>
     
    );
  }
}

export default Footer;
