"use client";
import { useEffect, useState } from "react";

export default function CartsClient() {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((data) => {
        setCarts(data.carts);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Shopping Carts</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading carts...</p>
      ) : (
        <div className="space-y-8 max-w-5xl mx-auto">
          {carts.map((cart) => (
            <div
              key={cart.id}
              className="bg-blue-200 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4">Cart #{cart.id}</h2>
              <p className="text-gray-600 mb-2">User ID: {cart.userId}</p>
              <p className="text-green-600 font-semibold mb-4">
                Total: ${cart.total} | Quantity: {cart.totalQuantity}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="border rounded-md p-4 bg-gray-50"
                  >
                    <h3 className="font-medium">{product.title}</h3>
                    <p className="text-sm text-gray-600">
                      Price: ${product.price} | Qty: {product.quantity}
                    </p>
                    <p className="text-sm text-gray-500">
                      Total: ${product.total}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
