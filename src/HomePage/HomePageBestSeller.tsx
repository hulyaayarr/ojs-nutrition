import { Container, Row, Col } from "react-bootstrap";
import HomePageBestSellerProducts from "../components/HomePage/HomePageBestSellerProducts";

const HomePageBestSeller = () => {
  return (
    <Container>
      <Row>
        <h3 className="text-center pb-4">ÇOK SATANLAR</h3>
        <Col xs={6} lg={4} xl={2} className="text-center position-relative">
          <HomePageBestSellerProducts
            imageSource="/src/assets/bestseller/whey.png"
            title="WHEY PROTEIN"
            mutedTitle="EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ"
            rating={5}
            commentNumber={10869}
            price={549}
            saleRate={23}
            priceBeforeSale={1126}
          />
        </Col>
        <Col xs={6} lg={4} xl={2} className="text-center position-relative">
          <HomePageBestSellerProducts
            imageSource="/src/assets/bestseller/whey.png"
            title="WHEY PROTEIN"
            mutedTitle="EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ"
            rating={5}
            commentNumber={10869}
            price={549}
            saleRate={23}
            priceBeforeSale={1126}
          />
        </Col>
        <Col xs={6} lg={4} xl={2} className="text-center position-relative">
          <HomePageBestSellerProducts
            imageSource="/src/assets/bestseller/whey.png"
            title="WHEY PROTEIN"
            mutedTitle="EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ"
            rating={5}
            commentNumber={10869}
            price={549}
            saleRate={23}
            priceBeforeSale={1126}
          />
        </Col>
        <Col xs={6} lg={4} xl={2} className="text-center position-relative">
          <HomePageBestSellerProducts
            imageSource="/src/assets/bestseller/whey.png"
            title="WHEY PROTEIN"
            mutedTitle="EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ"
            rating={5}
            commentNumber={10869}
            price={549}
            saleRate={23}
            priceBeforeSale={1126}
          />
        </Col>
        <Col xs={6} lg={4} xl={2} className="text-center position-relative">
          <HomePageBestSellerProducts
            imageSource="/src/assets/bestseller/whey.png"
            title="WHEY PROTEIN"
            mutedTitle="EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ"
            rating={5}
            commentNumber={10869}
            price={549}
            saleRate={23}
            priceBeforeSale={1126}
          />
        </Col>
        <Col xs={6} lg={4} xl={2} className="text-center position-relative">
          <HomePageBestSellerProducts
            imageSource="/src/assets/bestseller/whey.png"
            title="WHEY PROTEIN"
            mutedTitle="EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ"
            rating={5}
            commentNumber={10869}
            price={549}
            saleRate={23}
            priceBeforeSale={1126}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePageBestSeller;
