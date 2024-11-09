import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/Home/HomePage";
import ProductsPage from "./pages/Product/ProductsPage";
import ShopPage from "./pages//Shop/ShopPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/Contact/ContactPage";
import AboutPage from "./pages/About/AboutPage";
import ProductDetailPage from "./pages/Product/ProductDetailPage";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { autoLogin } from "./store/actions/authActions";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);
  return (
    <Router>
      <Header />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="shop/:gender/:categoryName/:categoryId"
          element={<ShopPage />}
        />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
