import Rating from "@mui/material/Rating";
import { Col } from "react-bootstrap";

const HomePageBestSellerProducts = ({
  imageSource,
  title,
  mutedTitle,
  rating,
  commentNumber,
  price,
  saleRate,
  priceBeforeSale,
}: {
  imageSource: string;
  title: string;
  mutedTitle: string;
  rating: number;
  commentNumber: number;
  price: number;
  saleRate?: number;
  priceBeforeSale?: number;
}) => {
  return (
    <>
      <Col xs={6} lg={4} xl={2} className="text-center position-relative">
        {saleRate ? (
          <>
            <div className="sale-red position-absolute">
              <p className="big-red p-0 m-0">%{saleRate}</p>{" "}
              <p className="small-red p-0 m-0">İNDİRİM</p>
            </div>
          </>
        ) : (
          <></>
        )}
        <img className="img-fluid " src={imageSource} alt={title} />
        <h5 className="bestSeller-title pt-2">{title.toLocaleUpperCase()}</h5>
        <p className="bestSeller-muted pb-0 mb-0">
          {mutedTitle.toLocaleUpperCase()}
        </p>
        <Rating name="read-only" value={rating} readOnly />
        <p className="bestSeller-comment pt-3 pb-0 mb-0">
          {commentNumber} Yorum
        </p>
        {priceBeforeSale ? (
          <>
            <p className="bestSeller-price">
              {price} TL{" "}
              <span className=" price-before-sale"> {priceBeforeSale} TL</span>
            </p>
          </>
        ) : (
          <p className="bestSeller-price">{price} TL</p>
        )}
      </Col>
    </>
  );
};

export default HomePageBestSellerProducts;
