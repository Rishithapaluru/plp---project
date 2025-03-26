import React from "react";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Product Listing Page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={product.image}
              alt={product.title}
              className="h-48 mx-auto object-contain"
            />
            <h2 className="text-lg font-bold mt-2">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
