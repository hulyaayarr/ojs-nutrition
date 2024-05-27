import { Container } from "react-bootstrap";
import HomePageHeader from "./HomePageHeader";
import HomePageImage from "./HomePageImage";
import HomePageInspect from "./HomePageInspect";

const HomePage = () => {
  return (
    <Container className="mx-0 px-0">
      <HomePageHeader />
      <HomePageInspect />
      <HomePageImage />
    </Container>
  );
};

export default HomePage;
