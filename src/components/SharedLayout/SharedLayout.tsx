import { Header } from "../Header";
import { Container } from "./SharedLayout.styled";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

export const SharedLayout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
