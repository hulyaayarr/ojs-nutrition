import { useEffect, useState } from "react";

const CheckDevice = () => {
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

  return device;
};

export default CheckDevice;
