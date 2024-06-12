import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Col,
  Row,
} from "react-bootstrap";
import CheckDevice from "../HomePage/CheckDevice";

const NavbarHome = () => {
  const device = CheckDevice();
  const isPhone = device === "phone";

  return (
    <>
      <Navbar expand="lg">
        <Container className="d-flex">
          <div className="d-md-none">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">HESABIM</Nav.Link>
                <Nav.Link href="#link">MÜŞTERİ YORUMLARI</Nav.Link>
                <Nav.Link href="#link">İLETİŞİM</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
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

          <div className="order-md-1">
            <Navbar.Brand href="#home">
              <img src="/src/assets/navbar/LOGO_Siyah.png" alt="Logo" />
            </Navbar.Brand>
          </div>

          <div className="order-md-4">
            <Button
              className={
                isPhone
                  ? "navbar-basket-small position-relative"
                  : "navbar-basket-big position-relative"
              }
            >
              <img
                src={
                  isPhone
                    ? "/src/assets/navbar/basket.svg.png"
                    : "/src/assets/navbar/basket-white.svg"
                }
                alt="Basket"
              />
              <span className="basket-number">1</span>
              {!isPhone && <span className="basket-text">SEPET</span>}
            </Button>
          </div>

          <div
            className={
              isPhone
                ? "search order-md-2 mt-3"
                : "search-big-screen order-md-2"
            }
          >
            <div className="position-relative d-flex align-items-center">
              <i className="fa fa-search search-icon" aria-hidden="true"></i>
              <input
                className={isPhone ? "input-search " : "input-search-big"}
                placeholder={
                  isPhone
                    ? "ARADIĞINIZ ÜRÜNÜ YAZINIZ."
                    : "Aradığınız ürünü yazınız"
                }
                type="text"
              />
              {!isPhone && <button className="search-button">ARA</button>}
            </div>
          </div>

          <div className="d-none d-md-flex order-md-3">
            <NavDropdown title="HESAP" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Container>
      </Navbar>

      <div className="down-navbar">
        <Container>
          {!isPhone && (
            <Row className="dark-nav-row">
              <Col lg={2}>
                <a className="dark-nav" href="/protein">
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
