import HomePageBestSeller from "./HomePageBestSeller";
import HomePageComments from "./HomePageComments";
import HomePageFooter from "./HomePageFooter";
import HomePageHeader from "./HomePageHeader";
import HomePageImage from "./HomePageImage";
import HomePageInspect from "./HomePageInspect";

const HomePage = () => {
  return (
    <>
      <HomePageHeader />
      <HomePageInspect />
      <HomePageBestSeller />
      <HomePageImage />
      <HomePageComments />
      <HomePageFooter />
    </>
  );
};

export default HomePage;
