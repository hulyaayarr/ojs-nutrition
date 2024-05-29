import Rating from "@mui/material/Rating";
import React from "react";
import { Col, Row } from "react-bootstrap";

const HomePageUpFooter = ({
  starRate,
  numberOfVote,
  title,
  paragraph,
}: {
  starRate: number;
  numberOfVote: number;
  title: string;
  paragraph: string;
}) => {
  function formatToThousands(number: number) {
    const rounded = Math.round(number / 1000) * 1000;
    const formatted = rounded.toLocaleString("tr-TR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    return formatted;
  }

  return (
    <Row className="mt-3 py-4 gx-5 d-flex align-items-center">
      <Col xs={12} lg={6}>
        <div className="d-flex align-items-center">
          <Rating name="read-only " value={starRate} readOnly />
          <span className="up-vote ps-3">
            ({formatToThousands(numberOfVote)}+)
          </span>
        </div>
        <h6 className="up-title pt-5">{title.toLocaleUpperCase()}</h6>
      </Col>
      <Col xs={12} lg={6} className="d-flex align-items-center">
        <p className="up-paragraph mt-lg-5 pt-3">{paragraph}</p>
      </Col>
    </Row>
  );
};

export default HomePageUpFooter;
