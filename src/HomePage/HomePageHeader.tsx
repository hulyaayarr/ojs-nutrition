import { Container, Row } from "react-bootstrap";

const HomePageHeader = () => {
  return (
    <Container fluid className="px-0 me-0 pe-0 overflow-x-hidden">
      <Row>
        <img
          className="img-fluid pe-0"
          src="/src/assets/header/OJS nutrition slider banner 2.png"
          alt=""
        />
      </Row>
    </Container>
  );
};

export default HomePageHeader;
