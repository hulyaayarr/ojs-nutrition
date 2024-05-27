import { useState, useEffect } from "react";

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
    if (width < 768) {
      return "phone";
    } else if (width < 1024) {
      return "tablet";
    } else {
      return "desktop";
    }
  }
  return (
    <>
      {device === "phone" && (
        <img
          src="/src/assets/homepage-pictures/phone.png"
          alt="Phone"
          className="img-fluid"
        />
      )}
      {device === "tablet" && (
        <img
          src="/src/assets/homepage-pictures/tablet.png"
          alt="Tablet"
          className="img-fluid"
        />
      )}
      {device === "desktop" && (
        <img
          src="/src/assets/homepage-pictures/pc.png"
          alt="Desktop"
          className="img-fluid"
        />
      )}
    </>
  );
};

export default HomePageImage;
