import { Outlet } from "react-router-dom";
import { Container } from "./SharedLayout.styled";
import { Header } from "../Header/Header";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
