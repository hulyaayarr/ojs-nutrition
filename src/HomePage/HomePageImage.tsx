import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";

const HomePageImage = () => {
  const [device, setDevice] = useState(getDevice(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setDevice(getDevice(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getDevice(width: number) {
    if (width <= 768) {
      return "phone";
    } else if (width <= 1024) {
      return "tablet";
    } else {
      return "desktop";
    }
  }
  return (
    <Container fluid className="px-0 me-0 pe-0 overflow-x-hidden">
      <Row className="position-relative">
        {device === "phone" && (
          <>
            <img
              src="/src/assets/homepage-pictures/phone.png"
              alt="Phone"
              className="img-fluid pe-0  "
            />
            <img
              src="/src/assets/homepage-pictures/label.png"
              className="img-fluid  picture-label-phone"
              alt=""
            />
          </>
        )}
        {device === "tablet" && (
          <>
            <img
              src="/src/assets/homepage-pictures/tablet.png"
              alt="Tablet"
              className="img-fluid pe-0 "
            />

            <img
              src="/src/assets/homepage-pictures/label.png"
              className="img-fluid  picture-label-tablet"
              alt=""
            />
          </>
        )}
        {device === "desktop" && (
          <img
            src="/src/assets/homepage-pictures/pc.png"
            alt="Desktop"
            className="img-fluid pe-0  "
          />
        )}
      </Row>
    </Container>
  );
};

export default HomePageImage;
