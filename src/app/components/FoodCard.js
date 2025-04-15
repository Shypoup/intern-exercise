'use client';
import React, { useState } from 'react';

export default function FoodCard({ item }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="mt-[10px] border-2 border-gray-400 flex flex-col items-center w-64 h-auto rounded-lg shadow">
      {/* Image with Cart Overlay */}
      <div className="relative w-[250px] h-[180px]">
        <img
          src={item.image1}
          alt={`${item.title} image 1`}
          className="rounded-t-lg w-full h-full object-cover text-xlg bg-white text-black"
        />

        {/* Cart Button Overlay */}
        <div className="absolute top-2 right-2 mt-35 bg-green">
          {count === 0 ? (
            <button
              onClick={handleIncrement}
              className="  bg-white text-xl text-black px-3 py-1 rounded-full shadow hover: transition active:scale-95 hover:cursor-pointer"
            >
              +
            </button>
          ) : (
            <div className="flex items-center bg-white text-green-200 rounded-full px-2 py-1 shadow gap-2">
              <button
                onClick={handleDecrement}
                className="bg-red-300 font-bold text-xl text-red-400 px-2 py-1 rounded-full transition active:scale-95"
              >
                −
              </button>
              <span className="text-gray-800 font-medium">{count}</span>
              <button
                onClick={handleIncrement}
                className="bg-green-200 hover:bg-green-200 text-green-500 text-xl font-bold px-2 py-1 rounded-full transition active:scale-95"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col px-3 py-2 w-full">
        <h2 className="text-lg font-bold text-black">{item.title}</h2>
        <img
          className="mt-2"
          src={item.image2}
          alt={`${item.title} image 2`}
          style={{ width: '70px', height: '20px' }}
        />
        <p className="mt-2 text-black text-sm">{item.paragraph}</p>
        <p className="text-red-500 font-semibold">{item.price}</p>
      </div>
    </div>
  );
}

