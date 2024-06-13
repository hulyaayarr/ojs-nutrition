import CheckDevice from "../components/HomePage/CheckDevice";
import NavbarInfo from "../components/layout/NavbarInfo";
import HomePageBestSeller from "../HomePage/HomePageBestSeller";
import HomePageComments from "../HomePage/HomePageComments";
import HomePageFooter from "../HomePage/HomePageFooter";
import HomePageHeader from "../HomePage/HomePageHeader";
import HomePageImage from "../HomePage/HomePageImage";
import HomePageInspect from "../HomePage/HomePageInspect";

export default function HomePage() {
  const device = CheckDevice();
  const isComputer = device === "desktop";

  return (
    <>
      {isComputer && <NavbarInfo />}
      <HomePageHeader />
      <HomePageInspect />
      <HomePageBestSeller />
      <HomePageImage />
      <HomePageComments />
      <HomePageFooter />
    </>
  );
}
