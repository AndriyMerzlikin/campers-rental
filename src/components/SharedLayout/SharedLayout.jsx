import { Outlet } from "react-router-dom";
import { Container } from "./SharedLayout.styled";
import { Header } from "../Header/Header";
import { Suspense } from "react";
import { GlobalStyle } from "../GlobalStyle/GlobalStyle";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <GlobalStyle />
      </Container>
    </>
  );
};

export default SharedLayout;
