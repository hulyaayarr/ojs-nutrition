import { Container, Row } from "react-bootstrap";
import HomePageBestSellerProducts from "../components/HomePage/HomePageBestSellerProducts";

const HomePageBestSeller = () => {
  return (
    <Container>
      <Row>
        <h3 className="text-center pb-4">ÇOK SATANLAR</h3>
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
        <HomePageBestSellerProducts
          imageSource="/src/assets/bestseller/whey.png"
          title="WHEY PROTEIN"
          mutedTitle="EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ"
          rating={5}
          commentNumber={10869}
          price={549}
        />
        <HomePageBestSellerProducts
          imageSource="/src/assets/bestseller/whey.png"
          title="WHEY PROTEIN"
          mutedTitle="EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ"
          rating={5}
          commentNumber={10869}
          price={549}
        />
        <HomePageBestSellerProducts
          imageSource="/src/assets/bestseller/whey.png"
          title="WHEY PROTEIN"
          mutedTitle="EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ"
          rating={5}
          commentNumber={10869}
          price={549}
        />
        <HomePageBestSellerProducts
          imageSource="/src/assets/bestseller/whey.png"
          title="WHEY PROTEIN"
          mutedTitle="EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ"
          rating={5}
          commentNumber={10869}
          price={549}
        />
        <HomePageBestSellerProducts
          imageSource="/src/assets/bestseller/whey.png"
          title="WHEY PROTEIN"
          mutedTitle="EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ"
          rating={5}
          commentNumber={10869}
          price={549}
        />
      </Row>
    </Container>
  );
};

export default HomePageBestSeller;
