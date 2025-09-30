import React from "react";
import products from "../layout/data";
import ProductCard from "../layout/CardLayout";

function Home() {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Our Products</h2>
      <div className="row g-4">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
