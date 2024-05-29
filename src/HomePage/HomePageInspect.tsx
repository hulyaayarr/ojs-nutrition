import { Container, Row } from "react-bootstrap";
import HomePageInspectPictures from "../components/HomePage/HomePageInspectPictures";

const HomePageInspect = () => {
  const inspectProducts = [
    "protein",
    "vitaminler",
    "sağlık",
    "spor gıdaları",
    "gıda",
    "tüm ürünler",
  ];
  return (
    <Container>
      <Row className="my-5">
        {inspectProducts.map((product, index) => (
          <HomePageInspectPictures product={product} key={index} />
        ))}
      </Row>
    </Container>
  );
};

export default HomePageInspect;
