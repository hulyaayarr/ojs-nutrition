import { Container, Row, Col } from "react-bootstrap";

const NavbarInfo = () => {
  return (
    <Container>
      <Row className="text-center py-2">
        <Col md={4}>
          <img
            className="img-fluid  pe-2"
            src="/src/assets/navbar/box1.png"
            alt=""
            style={{ height: "16px" }}
          />
          <span className="white-navbar-bold">AYNI GÜN KARGO </span>

          <span className="white-navbar-text">
            {` - 16:00'DAN ÖNCEKİ SİPARİŞLERDE`}
          </span>
        </Col>
        <Col md={4}>
          {" "}
          <i className="fa-regular fa-face-smile pe-2"></i>
          <span className="white-navbar-bold">ÜCRETSİZ KARGO </span>
          <span className="white-navbar-text">- 100 TL ÜZERİ SİPARİŞLERDE</span>
        </Col>
        <Col md={4}>
          <img
            className="img-fluid pe-2"
            src="/src/assets/navbar/shield1.png"
            alt=""
            style={{ height: "16px" }}
          />
          <span className="white-navbar-bold">GÜVENLİ ALIŞVERİŞ </span>
          <span className="white-navbar-text">- 1.000.000+ MUTLU MÜŞTERİ</span>
        </Col>
      </Row>
    </Container>
  );
};

export default NavbarInfo;
