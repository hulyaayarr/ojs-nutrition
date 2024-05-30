import HomePageBestSeller from "../HomePage/HomePageBestSeller";
import HomePageComments from "../HomePage/HomePageComments";
import HomePageFooter from "../HomePage/HomePageFooter";
import HomePageHeader from "../HomePage/HomePageHeader";
import HomePageImage from "../HomePage/HomePageImage";
import HomePageInspect from "../HomePage/HomePageInspect";

export default function HomePage() {
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
}
