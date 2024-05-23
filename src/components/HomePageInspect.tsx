import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const HomePageInspect = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col xs={6} md={4}>
          <img
            className="img-fluid inspect-img mt-3"
            src="/src/assets/inspect/protein.png"
            alt=""
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            className="img-fluid inspect-img mt-3"
            src="/src/assets/inspect/vitaminler.png"
            alt=""
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            className="img-fluid inspect-img mt-3"
            src="/src/assets/inspect/sağlık.png"
            alt=""
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            className="img-fluid inspect-img mt-3"
            src="/src/assets/inspect/spor-gıdaları.png"
            alt=""
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            className="img-fluid inspect-img mt-3"
            src="/src/assets/inspect/gıda.png"
            alt=""
          />
        </Col>
        <Col xs={6} md={4}>
          <img
            className="img-fluid inspect-img mt-3"
            src="/src/assets/inspect/tum-urunler.png"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePageInspect;
