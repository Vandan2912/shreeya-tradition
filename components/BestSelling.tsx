import React from "react";
import ProductCard from "./ProductCard";

const BestSelling = () => {
  return (
    <div className="bg-white min-h-section w-full py-20 px-28 pt-0 text-center">
      <p className="font-roboto text-[rgba(0,0,0,0.7)] leading-5 text-small">
        Shop
      </p>
      <h2 className="font-cinzel text-black text-5xl mt-2">Best Selling</h2>
      <div className="mt-8 mb-10 h-px w-12 bg-rani mx-auto"></div>
      <div className="grid grid-cols-4 mt-3 gap-6">
        <ProductCard
          image="/assets/sample.jpg"
          name="Product 1"
          price={600}
          discountedPrice={400}
          sale={true}
        />
        <ProductCard image="/assets/sample.jpg" name="Product 1" price={600} />
        <ProductCard image="/assets/sample.jpg" name="Product 1" price={600} />
        <ProductCard image="/assets/sample.jpg" name="Product 1" price={600} />
      </div>
    </div>
  );
};

export default BestSelling;
