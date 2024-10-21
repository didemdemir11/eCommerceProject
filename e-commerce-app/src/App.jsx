import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ShopPages from "./pages/ShopPages.jsx";
import SignUpPage from "./pages/SignUpPage";
import TeamPage from "./pages/TeamPage";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import "./App.css";

import { Button } from "@/components/ui/button";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/shop" component={ShopPages} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/team" component={TeamPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
