'use client';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function MyCart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cart = JSON.parse(localStorage.getItem('cart')) || {};
      setCartItems(Object.values(cart));
    }
  }, []);

  const handleRemove = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    delete cart[id];
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartItems(Object.values(cart));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (parseFloat(item.price.replace('$', '')) * item.count), 0);
  const deliveryFee = 2;
  const total = subtotal + deliveryFee;

  return (
    <div>
      <Navbar />
      <div className="flex flex-col">
        <div className="flex flex-col mx-30 mt-20">
          <table className="h-30 w-full">
            <thead>
              <tr className="text-left text-[#808080] text-sm">
                <th className="px-2 py-3">Item</th>
                <th className="px-2 py-3">Title</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Quantity</th>
                <th className="px-4 py-3">Total</th>
                <th className="px-4 py-3">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id} className="text-left text-[#808080] text-sm border-b border-gray-300">
                  <td className="px-4 py-2">
                    <img className="w-15 h-10" src={item.image} alt={item.title} />
                  </td>
                  <td className="px-4 py-3">{item.title}</td>
                  <td className="px-4 py-3">{item.price}</td>
                  <td className="px-4 py-3">{item.count}</td>
                  <td className="px-4">${(parseFloat(item.price.replace('$', '')) * item.count).toFixed(2)}</td>
                  <td className="px-4 py-3">
                    <button onClick={() => handleRemove(item.id)} className="text-[#808080] text-lg">&times;</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-row mx-30 mt-20">
          <div>
            <h1 className="font-bold text-2xl ml-3">Cart Totals</h1>
            <table className="table-auto w-110 ml-3 mt-3">
              <tbody>
                <tr className="border-b border-[#555555]">
                  <td className="py-2 text-[#555555]">Subtotal</td>
                  <td className="px-4 py-2 text-gray-600 text-right">${subtotal.toFixed(2)}</td>
                </tr>
                <tr className="border-b border-[#555555]">
                  <td className="py-2 text-[#555555]">Delivery Fee</td>
                  <td className="px-4 py-2 text-gray-600 text-right">${deliveryFee.toFixed(2)}</td>
                </tr>
                <tr className="border-b border-[#555555]">
                  <td className="py-2 text-[#555555] font-semibold">Total</td>
                  <td className="px-4 py-2 text-gray-600 text-right font-semibold">${total.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>

            <button className="mt-4 bg-[#fbbe30] text-white hover:cursor-pointer text-sm h-8 px-4 py-2 rounded">
              PROCEED TO CHECKOUT
            </button>
          </div>

          <div className="flex flex-col mx-40 text-[#555555]">
            <p className="text-[#555555] font-semibold">
              If you have a promo code, Enter it here
            </p>
            <div className="flex justify-between w-full mt-2">
              <p className="bg-[#EAEAEA] w-80 px-2 text-left text-sm py-2">promo code</p>
              <p className="bg-black text-white w-30 text-center rounded text-sm py-2 px-2">
                submit
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


