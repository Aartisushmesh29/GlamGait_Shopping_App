import React from "react";
import Hero from "../Hero.jsx";
import Popular from "../Popular.jsx";
import Category from "../Category.jsx";

const Shop = () => {
  return (
    <div className="bg-gradient-to-b from-emerald-700 to-green-950">
      <Hero />
      <Popular />
      <Category />
    </div>
  );
};

export default Shop;
