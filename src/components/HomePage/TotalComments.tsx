import Rating from "@mui/material/Rating";
import { Row } from "react-bootstrap";
import CheckDevice from "./CheckDevice";

const TotalComments = ({
  totalComment,
  starValue,
  onNext,
  onPrev,
}: {
  totalComment: number;
  starValue: number;
  onNext: () => void;
  onPrev: () => void;
}) => {
  const device = CheckDevice();

  return (
    <>
      {device === "tablet" ? (
        <>
          <Row className="border-bottom mt-5 pb-3">
            <div className="d-lg-flex justify-content-end">
              <div className="d-flex  justify-content-between">
                <div className="d-flex align-items-center ">
                  <Rating name="read-only" value={starValue} readOnly />
                  <span className="comment-total ps-3 pe-3">
                    {totalComment} Yorum
                  </span>
                </div>
                <div className="d-flex align-items-center ">
                  <button className="arrow-button " onClick={onPrev}>
                    {" "}
                    <i className="fa-solid fa-chevron-left pe-1"></i>
                  </button>
                  <button className="arrow-button" onClick={onNext}>
                    {" "}
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <h5 className="comment-title">GERÇEK MÜŞTERİ YORUMLARI</h5>
          </Row>
        </>
      ) : (
        <Row className="border-bottom mt-5 pb-3">
          <div className="d-lg-flex justify-content-between">
            <h5 className="comment-title">GERÇEK MÜŞTERİ YORUMLARI</h5>
            <div className="d-flex  justify-content-between">
              <div className="d-flex align-items-center ">
                <Rating name="read-only" value={starValue} readOnly />
                <span className="comment-total ps-3 pe-3">
                  {totalComment} Yorum
                </span>
              </div>
              <div className="d-flex align-items-center ">
                <button className="arrow-button " onClick={onPrev}>
                  {" "}
                  <i className="fa-solid fa-chevron-left pe-1"></i>
                </button>
                <button className="arrow-button" onClick={onNext}>
                  {" "}
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </Row>
      )}
    </>
  );
};

export default TotalComments;
