import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import CheckDevice from "../HomePage/CheckDevice";
import { Col, Row } from "react-bootstrap";

const NavbarHome = () => {
  const device = CheckDevice();
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <div className="d-flex">
            <div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto ">
                  <Nav.Link href="#home">HESABIM</Nav.Link>
                  <Nav.Link href="#link">MÜŞTERİ YORUMLARI</Nav.Link>
                  <Nav.Link href="#link">İLETİŞİM</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </div>
            <div>
              <Navbar.Brand className="order-md-1" href="#home">
                <img src="/src/assets/navbar/LOGO_Siyah.png" alt="" />
              </Navbar.Brand>
            </div>
            <div>
              <Button className="navbar-basket">
                <img src="/src/assets/navbar/basket.svg.png" alt="" />
              </Button>
            </div>
          </div>
          <div className="search">
            <div className="position-relative d-flex align-items-center">
              <i className="fa fa-search search-icon" aria-hidden="true"></i>
              <input
                className="input-search"
                placeholder="Aradığınız ürünü yazınız."
                type="text"
              />
            </div>
          </div>
        </Container>
      </Navbar>
      <div className="down-navbar">
        <Container className="my- py-0">
          {device == "phone" ? (
            <></>
          ) : (
            <Row className="dark-nav-row">
              <Col lg={2}>
                <a className="dark-nav" href="">
                  PROTEİN
                </a>
              </Col>
              <Col lg={2}>
                <a className="dark-nav" href="">
                  SPOR GIDALARI
                </a>
              </Col>
              <Col lg={2}>
                <a className="dark-nav" href="">
                  SAĞLIK
                </a>
              </Col>
              <Col lg={2}>
                <a className="dark-nav" href="">
                  GIDA
                </a>
              </Col>
              <Col lg={2}>
                <a className="dark-nav" href="">
                  VİTAMİN
                </a>
              </Col>
              <Col lg={2}>
                <a className="dark-nav" href="">
                  TÜM ÜRÜNLER
                </a>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </>
  );
};

export default NavbarHome;
