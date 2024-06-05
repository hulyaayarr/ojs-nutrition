import Rating from "@mui/material/Rating";
import { Col, Row } from "react-bootstrap";

const Product = ({
  productName,
  silentTitle,
  starValue,
  totalComment,
}: {
  productName: string;
  silentTitle: string;
  starValue: number;
  totalComment: number;
}) => {
  return (
    <Row>
      <Col xs={12} lg={6}>
        <img
          className="img-fluid pe-0 me-0"
          src={`/src/assets/productDetailPictures/${productName}.png`}
          alt=""
        />
      </Col>
      <Col xs={12} lg={6} className="ps-0 ms-0">
        <h1 className="product-title">{productName.toLocaleUpperCase()}</h1>
        <p className="product-title-small">{silentTitle}</p>
        <div className="d-flex ">
          <Rating name="read-only" value={starValue} readOnly />
          <span className="comment-total ps-3 pe-3">{totalComment} Yorum</span>
        </div>
      </Col>
    </Row>
  );
};

export default Product;
