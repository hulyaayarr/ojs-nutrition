import { Container } from "react-bootstrap";
import Product from "./Product";

const ProductDetails = () => {
  return (
    <Container>
      <Product
        productName="Whey Protein"
        silentTitle="EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ"
        starValue={5}
        totalComment={15656}
      />
    </Container>
  );
};

export default ProductDetails;
