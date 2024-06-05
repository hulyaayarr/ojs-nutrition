// import { useLoaderData } from "react-router-dom";

import ProductDetails from "../components/ProductDetails/ProductDetails";

const ProductDetailPage = () => {
  //   const product = useLoaderData();

  return (
    <>
      {/* <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: {product.price} TL</p>
      <Rating name="read-only" value={product.rating} readOnly />
      <p>{product.commentNumber} Yorum</p> */}
      <ProductDetails />
    </>
  );
};

export default ProductDetailPage;
