import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./layout/Header.jsx";
import PageContent from "./layout/PageContent.jsx";
import Footer from "./layout/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <Router>
      <Header />
      <PageContent>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/products" component={ProductsPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <div>
            <Button>Click me</Button>
          </div>
        </Switch>
      </PageContent>
      <Footer />
    </Router>
  );
}

export default App;
