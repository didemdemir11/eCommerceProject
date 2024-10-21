import React from "react";
import Header from "../components/layout/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <h1 className="text-2xl font-bold">Welcome to Didi Store!</h1>
      <p>Discover amazing products at great prices.</p>
      {/* Add more content like featured products, banners, etc. */}
    </div>
  );
};

export default HomePage;
