import { Col } from "react-bootstrap";

const HomePageInspectPictures = ({ product }: { product: string }) => {
  return (
    <Col xs={6} md={4} className="position-inspect">
      <img
        className="img-fluid inspect-img mt-3 "
        src={`/src/assets/inspect/${product}.png`}
        alt={product}
      />
      <p className="inspect-text">{product.toUpperCase()}</p>
      <a className="btn btn-primary inspect-button" href={`/${product}`}>
        İNCELE
      </a>
    </Col>
  );
};

export default HomePageInspectPictures;
