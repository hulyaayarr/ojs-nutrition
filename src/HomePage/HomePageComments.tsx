// import { useState } from "react";

import { Container, Row } from "react-bootstrap";
import TotalComments from "../components/HomePage/TotalComments";
import Comments from "../components/HomePage/Comments";
import CheckDevice from "../components/HomePage/CheckDevice";
import { useState } from "react";

const HomePageComments = () => {
  const device = CheckDevice();
  const [currentIndex, setCurrentIndex] = useState(0);

  const commentsData = [
    {
      starRate: 5,
      date: new Date(2024, 4, 3),
      title: "Beğendim gayet güzeldi 1",
      mutedTitle:
        "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
      user: "Burhan Kaya",
    },
    {
      starRate: 5,
      date: new Date(2024, 4, 3),
      title: "Beğendim gayet güzeldi 2",
      mutedTitle:
        "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
      user: "Burhan Kaya",
    },
    {
      starRate: 5,
      date: new Date(2024, 4, 3),
      title: "Beğendim gayet güzeldi 3",
      mutedTitle:
        "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
      user: "Burhan Kaya",
    },
    {
      starRate: 5,
      date: new Date(2024, 4, 3),
      title: "Beğendim gayet güzeldi 4",
      mutedTitle:
        "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
      user: "Burhan Kaya",
    },
    {
      starRate: 5,
      date: new Date(2024, 4, 3),
      title: "Beğendim gayet güzeldi 5",
      mutedTitle:
        "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
      user: "Burhan Kaya",
    },
    {
      starRate: 5,
      date: new Date(2024, 4, 3),
      title: "Beğendim gayet güzeldi 6",
      mutedTitle:
        "Ürün gayet güzel ama ekşiliği bi süreden sonra bayabiliyor insanı teşekkürler.",
      user: "Burhan Kaya",
    },
  ];
  const itemsPerPage = device === "phone" ? 2 : device === "tablet" ? 3 : 4;
  const handleNext = () => {
    if (currentIndex < commentsData.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Container>
      <TotalComments
        totalComment={198453}
        starValue={5}
        onNext={handleNext}
        onPrev={handlePrev}
      />
      <Row className="gx-5">
        {commentsData
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((comment, index) => (
            <Comments key={index} {...comment} />
          ))}
      </Row>
    </Container>
  );
};

export default HomePageComments;
