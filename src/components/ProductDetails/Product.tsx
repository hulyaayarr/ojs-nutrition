import Rating from "@mui/material/Rating";
import { Col, Row } from "react-bootstrap";

// const allFlavors = [
//   'Bisküvi',
//   'Çikolata',
//   'Muz',
//   'Salted Caramel',
//   'Choco Nut',
//   'Hindistan Cevizi',
//   'Raspberry Cheesecake',
//   'Çilek'
// ];

const Product = ({
  productName,
  silentTitle,
  starValue,
  totalComment,
  tags,
}: {
  productName: string;
  silentTitle: string;
  starValue: number;
  totalComment: number;
  tags: string[];
}) => {
  return (
    <>
      <Row className="mt-3">
        <Col xs={12} lg={6} className="text-center ">
          <img
            className="img-fluid "
            src={`/src/assets/productDetailPictures/${productName}.png`}
            alt=""
          />
        </Col>
        <Col xs={12} lg={6} className="py-5">
          <h1 className="product-title">{productName.toLocaleUpperCase()}</h1>
          <p className="product-title-small">{silentTitle}</p>
          <div className="d-flex ">
            <Rating name="read-only" value={starValue} readOnly />
            <span className="comment-total-product">{totalComment} Yorum</span>
          </div>
          <br />
          {tags.map((tag, index) => (
            <div key={index} className={"d-inline tags me-2"}>
              {tag.toLocaleUpperCase()}
            </div>
          ))}
          <div className="border-bottom my-4"></div>
          <h4>AROMA:</h4>
        </Col>
      </Row>
    </>
  );
};

export default Product;
