import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import PageContent from "./components/layout/PageContent";
import HomePage from "./pages/Home/HomePage";
import ProductsPage from "./pages/Product/ProductsPage";
import ShopPage from "./pages//Shop/ShopPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/Contact/ContactPage";
import AboutPage from "./pages/About/AboutPage";
import "./App.css";

import { Button } from "@/components/ui/button";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
