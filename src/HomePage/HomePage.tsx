import HomePageBestSeller from "./HomePageBestSeller";
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
    </>
  );
};

export default HomePage;
