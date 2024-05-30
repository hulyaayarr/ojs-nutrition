import { Container } from "react-bootstrap";
import HomePageUpFooter from "../components/HomePage/HomePageUpFooter";

const HomePageFooter = () => {
  return (
    <div className="up-footer">
      <Container>
        <HomePageUpFooter
          starRate={5}
          numberOfVote={145568}
          title="LABORATUVAR TESTLİ ÜRÜNLER AYNI GÜN & ÜCRETSİZ KARGO MEMNUNİYET GARANTİSİ"
          paragraph="200.000'den fazla ürün yorumumuza dayanarak, ürünlerimizi seveceğinize eminiz. Eğer herhangi bir sebeple memnun kalmazsan, bizimle iletişime geçtiğinde çözüme kavuşturacağız."
        />
      </Container>
    </div>
  );
};

export default HomePageFooter;
