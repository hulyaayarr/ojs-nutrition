import { Container, Row } from "react-bootstrap";

const NavbarInfo = () => {
  return (
    <Container>
      <Row className="text-center">
        <p>
          <span>
            {" "}
            <img
              src="/src/assets/navbar/box.png"
              alt=""
              style={{
                width: "16px",
                height: "16px",
              }}
            />
          </span>
          <span className="text-strong">AYNI GÜN KARGO</span>
          <span>{`AYNI GÜN KARGO - 16:00'DAN ÖNCEKİ SİPARİŞLERDE`}</span>
        </p>
        <p></p>
        <p></p>
      </Row>
    </Container>
  );
};

export default NavbarInfo;
