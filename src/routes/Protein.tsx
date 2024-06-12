import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomePageBestSellerProducts from "../components/HomePage/HomePageBestSellerProducts";

const ProductData = [
  {
    imageSource: "/src/assets/bestseller/whey.png",
    title: "WHEY PROTEIN",
    mutedTitle: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    rating: 5,
    commentNumber: 10869,
    price: 549,
    saleRate: 23,
    priceBeforeSale: 1126,
  },
  {
    imageSource: "/src/assets/bestseller/whey.png",
    title: "WHEY PROTEIN",
    mutedTitle: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    rating: 5,
    commentNumber: 10869,
    price: 549,
    saleRate: 23,
    priceBeforeSale: 1126,
  },
  {
    imageSource: "/src/assets/bestseller/whey.png",
    title: "WHEY PROTEIN",
    mutedTitle: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    rating: 5,
    commentNumber: 10869,
    price: 549,
    saleRate: 23,
    priceBeforeSale: 1126,
  },
  {
    imageSource: "/src/assets/bestseller/whey.png",
    title: "WHEY PROTEIN",
    mutedTitle: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    rating: 5,
    commentNumber: 10869,
    price: 549,
    saleRate: 23,
    priceBeforeSale: 1126,
  },
  {
    imageSource: "/src/assets/bestseller/whey.png",
    title: "WHEY PROTEIN",
    mutedTitle: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    rating: 5,
    commentNumber: 10869,
    price: 549,
    saleRate: 23,
    priceBeforeSale: 1126,
  },
  {
    imageSource: "/src/assets/bestseller/whey.png",
    title: "WHEY PROTEIN",
    mutedTitle: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    rating: 5,
    commentNumber: 10869,
    price: 549,
    saleRate: 23,
    priceBeforeSale: 1126,
  },
  {
    imageSource: "/src/assets/bestseller/whey.png",
    title: "WHEY PROTEIN",
    mutedTitle: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    rating: 5,
    commentNumber: 10869,
    price: 549,
    saleRate: 23,
    priceBeforeSale: 1126,
  },
  {
    imageSource: "/src/assets/bestseller/whey.png",
    title: "WHEY PROTEIN",
    mutedTitle: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    rating: 5,
    commentNumber: 10869,
    price: 549,
    saleRate: 23,
    priceBeforeSale: 1126,
  },
  {
    imageSource: "/src/assets/bestseller/whey.png",
    title: "WHEY PROTEIN",
    mutedTitle: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    rating: 5,
    commentNumber: 10869,
    price: 549,
    saleRate: 23,
    priceBeforeSale: 1126,
  },
  {
    imageSource: "/src/assets/bestseller/whey.png",
    title: "WHEY PROTEIN",
    mutedTitle: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    rating: 5,
    commentNumber: 10869,
    price: 549,
    saleRate: 23,
    priceBeforeSale: 1126,
  },
  {
    imageSource: "/src/assets/bestseller/whey.png",
    title: "WHEY PROTEIN",
    mutedTitle: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    rating: 5,
    commentNumber: 10869,
    price: 549,
    saleRate: 23,
    priceBeforeSale: 1126,
  },
  {
    imageSource: "/src/assets/bestseller/whey.png",
    title: "WHEY PROTEIN",
    mutedTitle: "EN ÇOK TERCİH EDİLEN PROTEİN TAKVİYESİ",
    rating: 5,
    commentNumber: 10869,
    price: 549,
    saleRate: 23,
    priceBeforeSale: 1126,
  },
];

const Protein = () => {
  const productNumber = ProductData.length;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const text =
    "Vücudun tüm fonksiyonlarını sağlıklı bir şekilde yerine getirmesini sağlayan temel yapı taşlarından biri proteindir. Protein kısaca, bir veya daha fazla amino asit artık Protein kısaca, bir veya daha fazla amino asit artıkProtein kısaca, bir veya daha fazla amino asit artık Protein kısaca, bir veya daha fazla amino asit artık Protein kısaca, bir veya daha fazla amino asit artık";
  return (
    <Container>
      <Row>
        <h2 className="text-center my-4">PROTEIN</h2>
      </Row>
      <Row>
        {ProductData.map((product, index) => (
          <Col
            key={index}
            xs={6}
            lg={4}
            xl={3}
            className="text-center position-relative"
          >
            <HomePageBestSellerProducts
              imageSource={product.imageSource}
              title={product.title}
              mutedTitle={product.mutedTitle}
              rating={product.rating}
              commentNumber={product.commentNumber}
              price={product.price}
              saleRate={product.saleRate}
              priceBeforeSale={product.priceBeforeSale}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <div className="text-center my-5 pt-5">
          Toplam <span>{productNumber}</span> ürün görüntüleniyor
        </div>
      </Row>
      <Row>
        <p className="text mb-5 pb-5">
          {isReadMore ? text.slice(0, 200) : text}
          <div
            onClick={toggleReadMore}
            className="read-or-hide"
            style={{ color: "green", textDecoration: "underline" }}
          >
            {isReadMore ? "Daha fazla göster" : " Kapat"}
          </div>
        </p>
      </Row>
    </Container>
  );
};

export default Protein;
