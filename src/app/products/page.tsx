"use client";

import { useEffect, useState } from "react";

export default function ProductsClient() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchTerm(keyword);

    const filtered = products.filter((product) => {
      const title = product.title?.toLowerCase() || "";
      const brand = product.brand?.toLowerCase() || "";
      return title.includes(keyword) || brand.includes(keyword);
    });

    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">Client-side Products</h1>

      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search products by title or brand..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : filteredProducts.length === 0 ? (
        <p className="text-center text-red-500">No products match your search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{product.title}</h2>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-green-600 font-bold">${product.price}</span>
                  <span className="text-sm text-gray-500">{product.brand}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

