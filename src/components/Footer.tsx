import { Col, Row, Accordion } from "react-bootstrap";
import CheckDevice from "./HomePage/CheckDevice";

interface Link {
  text: string;
  href: string;
}

const footerLinks = {
  general: [
    { text: "İletişim", href: "" },
    { text: "Hakkımızda", href: "" },
    { text: "Sıkça Sorulan Sorular", href: "" },
    { text: "KVKK", href: "" },
    { text: "Çalışma İlkelerimiz", href: "" },
    { text: "Satış Sözleşmesi", href: "" },
    { text: "Garanti ve İade Koşulları", href: "" },
    { text: "Gerçek Müşteri Yorumları", href: "" },
    { text: "Blog", href: "" },
  ],
  categories: [
    { text: "Protein", href: "" },
    { text: "Spor Gıdaları", href: "" },
    { text: "Sağlık", href: "" },
    { text: "Gıda", href: "" },
    { text: "Vitamin", href: "" },
    { text: "Aksesuar", href: "" },
    { text: "Tüm Ürünler", href: "" },
    { text: "Paketler", href: "" },
    { text: "Lansmana Özel Fırsatlar", href: "" },
  ],
  popularProducts: [
    { text: "Whey Protein", href: "" },
    { text: "Cream of Rice", href: "" },
    { text: "Creatine", href: "" },
    { text: "BCAA++", href: "" },
    { text: "Pre-Workout", href: "" },
    { text: "Fitness Paketi", href: "" },
    { text: "Collagen", href: "" },
    { text: "Günlük Vitamin Paketi", href: "" },
    { text: "ZMA", href: "" },
  ],
};

const renderLinks = (links: Link[]) =>
  links.map((link, index) => (
    <Row key={index} className="footer-row pb-2">
      <a href={link.href}>{link.text}</a>
    </Row>
  ));

const Footer = () => {
  const device = CheckDevice();

  return (
    <>
      <Row className="mt-5">
        {device == "phone" ? (
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>OJS NUTRITION</Accordion.Header>
              <Accordion.Body>
                {renderLinks(footerLinks.general)}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>KATEGORİLER</Accordion.Header>
              <Accordion.Body>
                {renderLinks(footerLinks.categories)}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>POPÜLER ÜRÜNLER</Accordion.Header>
              <Accordion.Body>
                {renderLinks(footerLinks.popularProducts)}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ) : (
          <>
            {" "}
            <Col md={4}>
              <img
                className="img-fluid pb-2"
                src="/src/assets/footer/logo.png"
                alt="Logo"
              />
              {renderLinks(footerLinks.general)}
            </Col>
            <Col md={4}>
              <Row className="footer-title pb-2">Kategoriler</Row>
              {renderLinks(footerLinks.categories)}
            </Col>
            <Col md={4}>
              <Row className="footer-title pb-2">Popüler Ürünler</Row>
              {renderLinks(footerLinks.popularProducts)}
            </Col>
          </>
        )}
      </Row>
      <Row className="pt-5 mt-5 pb-3 ps-2" style={{ color: "#999999" }}>
        Copyright © - Tüm Hakları Saklıdır.
      </Row>
    </>
  );
};

export default Footer;
