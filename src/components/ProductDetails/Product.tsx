import Rating from "@mui/material/Rating";
import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

const allFlavors = [
  {
    name: "Bisküvi",
    color: "#E6BC79",
  },
  {
    name: "Çikolata",
    color: "#56321D",
  },
  {
    name: "Muz",
    color: "#F1D018",
  },
  {
    name: "Salted Caramel",
    color: "#B64300",
  },
  {
    name: "Choco Nut",
    color: "#7B3F00",
  },
  {
    name: "Hindistan Cevizi",
    color: "#BA9051",
  },
  {
    name: "Raspberry Cheesecake",
    color: "#CC1E5F",
  },
  {
    name: "Çilek",
    color: "#D61F33",
  },
];

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
  const [selectedFlavorIndex, setSelectedFlavorIndex] = useState<number | null>(
    null
  );

  const handleClick = (index: number) => {
    setSelectedFlavorIndex(index);
  };

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
          {allFlavors.map((flavor, index) => (
            <Button
              key={index}
              className="flavor-buttons p-0 ps-3 "
              style={{
                border: `3px solid ${
                  selectedFlavorIndex === index ? "#2126AB" : "#e5e5e5"
                }`,
              }}
              onClick={() => handleClick(index)}
            >
              {flavor.name}{" "}
              <span
                className="flavor-span "
                style={{
                  background: `${flavor.color}`,
                }}
              ></span>
            </Button>
          ))}
        </Col>
      </Row>
    </>
  );
};

export default Product;
