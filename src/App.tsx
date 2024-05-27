import HomePageHeader from "./components/HomePageHeader";
import HomePageImage from "./components/HomePageImage";
import HomePageInspect from "./components/HomePageInspect";
import NavbarHome from "./components/NavbarHome";

function App() {
  return (
    <>
      <NavbarHome />
      <HomePageHeader />
      <HomePageInspect />
      <HomePageImage />
    </>
  );
}

export default App;
