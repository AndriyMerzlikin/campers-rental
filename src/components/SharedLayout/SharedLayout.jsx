import { Outlet } from "react-router-dom";
import { Container } from "./SharedLayout.styled";
import { Header } from "../Header/Header";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;
