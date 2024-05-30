import { Outlet } from "react-router-dom";
import NavbarHome from "../components/layout/NavbarHome";
import Footer from "../components/layout/Footer";
import { Container } from "react-bootstrap";

export default function Root() {
  return (
    <>
      <NavbarHome />
      <Outlet />
      <Container className="up-footer pt-0 mt-0" fluid>
        <Footer />
      </Container>
    </>
  );
}
