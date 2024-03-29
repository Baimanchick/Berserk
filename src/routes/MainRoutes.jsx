import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import YesPage from "../pages/YesPage";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}></Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/yes" element={<YesPage />} />
    </Routes>
  );
}

export default MainRoutes;
