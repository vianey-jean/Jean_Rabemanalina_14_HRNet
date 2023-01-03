import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CreateEmployee from "../Pages/createEmployee/CreateEmployee";
import ListeEmployee from "../Pages/listeEmployee/listeEmployee";
import Page404 from "../Pages/Error/Page404";
import Home from "../Pages/home/home"

function RoutePath() {
  return (
    <BrowserRouter>
      <Header />
      <section className="elementsToDisplay">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateEmployee />} />
          <Route path="/list" element={<ListeEmployee />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </section>
      <Footer />
    </BrowserRouter>
  );
}
export default RoutePath;
