import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";

const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route element={<MainLayouts />}> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddPage />} />
      {/* </Route> */}
    </Routes>
  );
};

export default MainRoutes;
