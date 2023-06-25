import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout";
import { ROUTES } from "./constants/routes";
import { HomePage } from "./pages/HomePage";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Contacts } from "./pages/Contacts";

export const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTES.home} element={<SharedLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path={ROUTES.about} element={<About />}></Route>
          <Route path={ROUTES.projects} element={<Projects />}></Route>
          <Route path={ROUTES.skills} element={<Skills />}></Route>
          <Route path={ROUTES.contacts} element={<Contacts />}></Route>
          <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
        </Route>
      </Routes>
    </>
  );
};
